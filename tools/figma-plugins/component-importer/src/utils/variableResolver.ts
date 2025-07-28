// Variable resolver for binding design tokens to Figma components
export class VariableResolver {
  private collections: Map<string, VariableCollection> = new Map();
  private variableCache: Map<string, Map<string, Variable>> = new Map();
  
  async initialize() {
    console.log('Initializing VariableResolver...');
    
    try {
      const allCollections = await figma.variables.getLocalVariableCollectionsAsync();
      console.log(`Found ${allCollections.length} variable collections`);
      
      for (const collection of allCollections) {
        this.collections.set(collection.name, collection);
        console.log(`Cached collection: ${collection.name}`);
        
        // Cache variables for quick lookup
        const variables = new Map<string, Variable>();
        for (const variableId of collection.variableIds) {
          const variable = await figma.variables.getVariableByIdAsync(variableId);
          if (variable) {
            variables.set(variable.name, variable);
          }
        }
        this.variableCache.set(collection.name, variables);
        console.log(`Cached ${variables.size} variables for ${collection.name}`);
      }
    } catch (error) {
      console.error('Error initializing VariableResolver:', error);
      throw error;
    }
  }
  
  async resolveVariable(path: string, collectionName: string): Promise<Variable | null> {
    const variables = this.variableCache.get(collectionName);
    if (!variables) {
      console.warn(`Collection ${collectionName} not found`);
      return null;
    }
    
    const variable = variables.get(path);
    if (!variable) {
      console.warn(`Variable ${path} not found in collection ${collectionName}`);
      return null;
    }
    
    return variable;
  }
  
  async bindVariable(
    node: SceneNode,
    property: string,
    variablePath: string,
    collectionName: string
  ): Promise<boolean> {
    const variable = await this.resolveVariable(variablePath, collectionName);
    if (!variable) {
      console.error(`Failed to resolve variable: ${collectionName}/${variablePath}`);
      return false;
    }
    
    try {
      switch (property) {
        case 'fill':
          if ('fills' in node && node.fills !== figma.mixed) {
            const fills = [...(node.fills as Paint[])];
            if (fills.length > 0 && fills[0].type === 'SOLID') {
              fills[0] = {
                ...fills[0],
                boundVariables: {
                  'color': {
                    type: 'VARIABLE_ALIAS',
                    id: variable.id
                  }
                }
              };
              node.fills = fills;
              console.log(`Bound fill to ${variablePath}`);
            }
          }
          break;
          
        case 'stroke':
          if ('strokes' in node) {
            const strokes = [...(node.strokes as Paint[])];
            if (strokes.length === 0) {
              // Add a stroke if none exists
              strokes.push({
                type: 'SOLID',
                color: { r: 0, g: 0, b: 0 }
              });
            }
            if (strokes[0].type === 'SOLID') {
              strokes[0] = {
                ...strokes[0],
                boundVariables: {
                  'color': {
                    type: 'VARIABLE_ALIAS',
                    id: variable.id
                  }
                }
              };
              node.strokes = strokes;
              node.strokeWeight = 1;
              console.log(`Bound stroke to ${variablePath}`);
            }
          }
          break;
          
        case 'cornerRadius':
          if ('cornerRadius' in node) {
            // For now, set the numeric value directly
            // Figma API doesn't support binding variables to cornerRadius yet
            const collection = this.collections.get(collectionName);
            if (collection) {
              const value = variable.valuesByMode[collection.defaultModeId];
              if (typeof value === 'number') {
                // Use type assertion for mutable nodes
                const mutableNode = node as FrameNode | ComponentNode | RectangleNode;
                if ('cornerRadius' in mutableNode) {
                  mutableNode.cornerRadius = value;
                  console.log(`Set cornerRadius to ${value}`);
                }
              }
            }
          }
          break;
          
        case 'paddingLeft':
        case 'paddingRight':
        case 'paddingTop':
        case 'paddingBottom':
          if (property in node) {
            node.setBoundVariable(property as any, variable);
            console.log(`Bound ${property} to ${variablePath}`);
          }
          break;
          
        case 'itemSpacing':
          if ('itemSpacing' in node) {
            node.setBoundVariable('itemSpacing', variable);
            console.log(`Bound itemSpacing to ${variablePath}`);
          }
          break;
          
        case 'fontSize':
          if (node.type === 'TEXT') {
            // For text nodes, we need to load fonts first
            const textNode = node as TextNode;
            await figma.loadFontAsync(textNode.fontName as FontName);
            
            // Get the numeric value from the variable
            const collection = this.collections.get(collectionName);
            if (collection) {
              const value = variable.valuesByMode[collection.defaultModeId];
              if (typeof value === 'number') {
                // Ensure font size is at least 1 (Figma requirement)
                const fontSize = Math.max(1, value);
                textNode.fontSize = fontSize;
                console.log(`Set fontSize to ${fontSize} (original: ${value})`);
              }
            }
          }
          break;
          
        case 'fontWeight':
          if (node.type === 'TEXT') {
            const textNode = node as TextNode;
            const collection = this.collections.get(collectionName);
            if (collection) {
              const value = variable.valuesByMode[collection.defaultModeId];
              if (typeof value === 'number') {
                const currentFont = textNode.fontName as FontName;
                const newFontWeight = this.mapFontWeight(value);
                await figma.loadFontAsync({ ...currentFont, style: newFontWeight });
                textNode.fontName = { ...currentFont, style: newFontWeight };
                console.log(`Set fontWeight to ${newFontWeight}`);
              }
            }
          }
          break;
          
        case 'effects':
          if ('effects' in node) {
            // For now, we'll skip effect binding as it's complex
            // Shadow effects need to be manually created
            console.log(`Shadow effects need to be manually applied for ${variablePath}`);
          }
          break;
          
        default:
          console.warn(`Unsupported property binding: ${property}`);
          return false;
      }
      
      return true;
    } catch (error) {
      console.error(`Error binding variable ${variablePath} to ${property}:`, error);
      return false;
    }
  }
  
  private mapFontWeight(weight: number): string {
    // Map numeric weights to font style names
    if (weight <= 300) return 'Light';
    if (weight <= 400) return 'Regular';
    if (weight <= 500) return 'Medium';
    if (weight <= 600) return 'SemiBold';
    if (weight <= 700) return 'Bold';
    return 'ExtraBold';
  }
  
  // Get the value of a variable for calculations
  async getVariableValue(path: string, collectionName: string): Promise<any> {
    const variable = await this.resolveVariable(path, collectionName);
    if (!variable) return null;
    
    const collection = this.collections.get(collectionName);
    if (!collection) return null;
    
    return variable.valuesByMode[collection.defaultModeId];
  }
  
  // Validate that all required dependencies exist
  async validateDependencies(dependencies: {
    colors?: string[];
    spacing?: string[];
    typography?: string[];
    radius?: string[];
    shadows?: string[];
  }): Promise<{ valid: boolean; missing: string[] }> {
    const missing: string[] = [];
    
    const checkList = [
      { collection: 'Colors', items: dependencies.colors },
      { collection: 'Spacing', items: dependencies.spacing },
      { collection: 'Typography', items: dependencies.typography },
      { collection: 'Effects', items: dependencies.radius },
      { collection: 'Effects', items: dependencies.shadows }
    ];
    
    for (const { collection, items } of checkList) {
      if (!items) continue;
      
      for (const item of items) {
        const variable = await this.resolveVariable(item, collection);
        if (!variable) {
          missing.push(item);
        }
      }
    }
    
    return {
      valid: missing.length === 0,
      missing
    };
  }
  
  // Get all available collections
  getCollections(): string[] {
    return Array.from(this.collections.keys());
  }
  
  // List all available tokens for debugging
  async listAllTokens(): Promise<Record<string, string[]>> {
    const allTokens: Record<string, string[]> = {};
    
    this.variableCache.forEach((variableMap, collectionName) => {
      const tokenPaths: string[] = [];
      variableMap.forEach((variable, path) => {
        tokenPaths.push(path);
      });
      allTokens[collectionName] = tokenPaths.sort();
    });
    
    return allTokens;
  }
  
  // Get all variables in a collection
  getCollectionVariables(collectionName: string): string[] {
    const variables = this.variableCache.get(collectionName);
    if (!variables) return [];
    return Array.from(variables.keys());
  }
}
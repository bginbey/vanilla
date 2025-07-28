import { FigmaComponentSpec, ComponentElement, VariableBinding, sizeMapping } from '../specs/componentSpecs';
import { VariableResolver } from './variableResolver';

export class ComponentFactory {
  constructor(private resolver: VariableResolver) {}
  
  async createComponent(spec: FigmaComponentSpec): Promise<ComponentSetNode | ComponentNode> {
    console.log(`Creating component: ${spec.name}`);
    
    // Generate all variant combinations
    const variantCombinations = this.generateVariantCombinations(spec.variants);
    console.log(`Generated ${variantCombinations.length} variant combinations`);
    
    if (variantCombinations.length > 1) {
      // Create component set with variants
      const variants: ComponentNode[] = [];
      
      // Layout configuration for the grid
      const VARIANT_SPACING = 120;
      const VARIANTS_PER_ROW = 6;
      
      // Group variants by size and variant type for better organization
      const groupedVariants = this.groupVariantsByPriority(variantCombinations);
      
      let currentX = 0;
      let currentY = 0;
      let maxHeightInRow = 0;
      let variantIndex = 0;
      
      for (const combination of groupedVariants) {
        const variant = await this.createSingleVariant(spec, combination);
        
        // Position the variant in a grid
        variant.x = currentX;
        variant.y = currentY;
        
        // Track the max height in current row
        maxHeightInRow = Math.max(maxHeightInRow, variant.height);
        
        // Move to next position
        variantIndex++;
        if (variantIndex % VARIANTS_PER_ROW === 0) {
          // Move to next row
          currentX = 0;
          currentY += maxHeightInRow + VARIANT_SPACING;
          maxHeightInRow = 0;
        } else {
          // Move to next column
          currentX += variant.width + VARIANT_SPACING;
        }
        
        variants.push(variant);
      }
      
      // Combine as component set
      const componentSet = figma.combineAsVariants(variants, figma.currentPage);
      componentSet.name = spec.name;
      
      // Set up variant properties
      await this.setupVariantProperties(componentSet, spec);
      
      return componentSet;
    } else {
      // Single component without variants
      const component = await this.createSingleVariant(spec, {});
      component.name = spec.name;
      return component;
    }
  }
  
  private async createSingleVariant(
    spec: FigmaComponentSpec,
    variantProps: Record<string, any>
  ): Promise<ComponentNode> {
    const component = figma.createComponent();
    
    // Apply structure first (sets up autolayout)
    await this.applyStructure(component, spec.structure, variantProps);
    
    // Apply base styles
    await this.applyStyles(component, spec.styles, variantProps);
    
    // Create children
    if (spec.children) {
      await this.createChildren(component, spec.children, variantProps);
    }
    
    // Apply variant-specific styles
    await this.applyVariantStyles(component, spec, variantProps);
    
    // After all content is added, ensure autolayout sizing is correct
    if (component.layoutMode !== 'NONE') {
      // Set to hug contents
      component.primaryAxisSizingMode = 'AUTO';
      component.counterAxisSizingMode = 'AUTO';
      
      // For full width variants, stretch on primary axis
      if (variantProps.fullWidth) {
        component.primaryAxisSizingMode = 'FIXED';
        component.layoutAlign = 'STRETCH';
      }
    }
    
    // Set variant properties for component set
    if (Object.keys(variantProps).length > 0) {
      const variantProperties: Record<string, string> = {};
      for (const [key, value] of Object.entries(variantProps)) {
        if (typeof value === 'boolean') {
          variantProperties[key] = value ? 'true' : 'false';
        } else {
          variantProperties[key] = String(value);
        }
      }
      component.name = this.generateVariantName(spec.name, variantProperties);
    }
    
    return component;
  }
  
  private async applyStructure(
    node: FrameNode | ComponentNode,
    structure: FigmaComponentSpec['structure'],
    variantProps: Record<string, any>
  ) {
    // Apply auto-layout
    if (structure.autolayout.direction !== 'none') {
      node.layoutMode = structure.autolayout.direction === 'horizontal' ? 'HORIZONTAL' : 'VERTICAL';
      
      // Apply spacing with size-based adjustments
      if (structure.autolayout.spacing) {
        const size = variantProps.size || 'md';
        const sizeConfig = sizeMapping[size as keyof typeof sizeMapping];
        const spacingValue = sizeConfig?.gap || structure.autolayout.spacing;
        
        await this.resolver.bindVariable(node, 'itemSpacing', spacingValue, 'Spacing');
      }
      
      // Apply padding with size-based adjustments
      if (structure.autolayout.padding) {
        const size = variantProps.size || 'md';
        const sizeConfig = sizeMapping[size as keyof typeof sizeMapping];
        
        if (structure.autolayout.padding.horizontal) {
          const paddingValue = sizeConfig?.paddingHorizontal || structure.autolayout.padding.horizontal;
          await this.resolver.bindVariable(node, 'paddingLeft', paddingValue, 'Spacing');
          await this.resolver.bindVariable(node, 'paddingRight', paddingValue, 'Spacing');
        }
        
        if (structure.autolayout.padding.vertical) {
          const paddingValue = sizeConfig?.paddingVertical || structure.autolayout.padding.vertical;
          await this.resolver.bindVariable(node, 'paddingTop', paddingValue, 'Spacing');
          await this.resolver.bindVariable(node, 'paddingBottom', paddingValue, 'Spacing');
        }
      }
      
      // Apply alignment
      if (structure.autolayout.alignment) {
        node.primaryAxisAlignItems = structure.autolayout.alignment.primary;
        // Map STRETCH to BASELINE for counter axis (Figma API limitation)
        const counterAlignment = structure.autolayout.alignment.counter === 'STRETCH' 
          ? 'CENTER' 
          : structure.autolayout.alignment.counter;
        node.counterAxisAlignItems = counterAlignment as 'MIN' | 'MAX' | 'CENTER' | 'BASELINE';
      }
    }
    
    // Apply constraints
    if (structure.constraints) {
      node.constraints = {
        horizontal: structure.constraints.horizontal as ConstraintType,
        vertical: structure.constraints.vertical as ConstraintType
      };
    }
    
    // Handle fullWidth variant
    if (variantProps.fullWidth) {
      node.layoutAlign = 'STRETCH';
      node.layoutGrow = 1;
    }
    
    // Don't set explicit height - let autolayout handle it based on padding and content
  }
  
  private async applyStyles(
    node: SceneNode,
    styles: FigmaComponentSpec['styles'],
    variantProps: Record<string, any>
  ) {
    if (!styles) return;
    
    // Apply fills
    if (styles.fills && 'fills' in node) {
      node.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // Default white
      
      for (const binding of styles.fills) {
        await this.resolver.bindVariable(node, binding.property, binding.variablePath, binding.collection);
      }
    }
    
    // Apply strokes
    if (styles.strokes && 'strokes' in node) {
      for (const binding of styles.strokes) {
        await this.resolver.bindVariable(node, binding.property, binding.variablePath, binding.collection);
      }
    }
    
    // Apply corner radius
    if (styles.cornerRadius && 'cornerRadius' in node) {
      await this.resolver.bindVariable(
        node,
        'cornerRadius',
        styles.cornerRadius.variablePath,
        styles.cornerRadius.collection
      );
    }
    
    // Apply stroke weight
    if (styles.strokeWeight && 'strokeWeight' in node) {
      node.strokeWeight = styles.strokeWeight;
    }
  }
  
  private async createChildren(
    parent: FrameNode | ComponentNode,
    children: ComponentElement[],
    variantProps: Record<string, any>
  ) {
    for (const child of children) {
      // Check visibility conditions
      if (child.visible === false) continue;
      if (typeof child.visible === 'string' && !variantProps[child.visible]) continue;
      
      let childNode: SceneNode | null = null;
      
      switch (child.type) {
        case 'frame':
          childNode = figma.createFrame();
          break;
          
        case 'text':
          childNode = figma.createText();
          break;
          
        case 'vector':
          childNode = this.createChevronVector();
          break;
      }
      
      if (!childNode) continue;
      
      // Set name
      childNode.name = child.name;
      
      // Load font before setting text properties
      if (child.type === 'text' && childNode.type === 'TEXT') {
        // Load default font first
        await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
        // Set the font to ensure it's applied
        childNode.fontName = { family: 'Inter', style: 'Regular' };
      }
      
      // Apply properties
      for (const [key, value] of Object.entries(child.properties)) {
        if (key in childNode) {
          (childNode as any)[key] = value;
        }
      }
      
      // Apply size-based adjustments
      if (variantProps.size && (child.name === 'Icon Left' || child.name === 'Icon Right')) {
        const sizeConfig = sizeMapping[variantProps.size as keyof typeof sizeMapping];
        if (sizeConfig?.iconSize && 'resize' in childNode) {
          childNode.resize(sizeConfig.iconSize, sizeConfig.iconSize);
        }
      }
      
      // Apply bindings with size-based adjustments
      if (child.bindings) {
        for (const binding of child.bindings) {
          let adjustedBinding = { ...binding };
          
          // Adjust typography based on size
          if (binding.property === 'fontSize' && variantProps.size) {
            const sizeConfig = sizeMapping[variantProps.size as keyof typeof sizeMapping];
            if (sizeConfig?.fontSize) {
              adjustedBinding.variablePath = sizeConfig.fontSize;
            }
          }
          
          await this.resolver.bindVariable(
            childNode,
            adjustedBinding.property,
            adjustedBinding.variablePath,
            adjustedBinding.collection
          );
        }
      }
      
      parent.appendChild(childNode);
    }
  }
  
  private async applyVariantStyles(
    node: FrameNode | ComponentNode,
    spec: FigmaComponentSpec,
    variantProps: Record<string, any>
  ) {
    // Apply variant-specific styles based on the component and variant
    if (spec.name === 'Button' && 'fills' in node) {
      switch (variantProps.variant) {
        case 'solid':
          // Set solid background color
          node.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 1 } }];
          await this.resolver.bindVariable(node, 'fill', 'Semantic/accent-base', 'Colors');
          
          // Add shadow
          if ('effects' in node) {
            await this.resolver.bindVariable(node, 'effects', 'Shadow/sm', 'Effects');
          }
          
          // Set text color to white for solid buttons
          const solidTextNodes = node.findAll(n => n.type === 'TEXT');
          for (const textNode of solidTextNodes) {
            if ('fills' in textNode) {
              await this.resolver.bindVariable(textNode, 'fill', 'Semantic/accent-text', 'Colors');
            }
          }
          break;
          
        case 'outline':
          // Transparent background
          node.fills = [];
          // Add border
          await this.resolver.bindVariable(node, 'stroke', 'Semantic/accent-border', 'Colors');
          node.strokeWeight = 1;
          
          // Set text color to accent-text-low
          const outlineTextNodes = node.findAll(n => n.type === 'TEXT');
          for (const textNode of outlineTextNodes) {
            if ('fills' in textNode) {
              await this.resolver.bindVariable(textNode, 'fill', 'Semantic/accent-text-low', 'Colors');
            }
          }
          break;
          
        case 'ghost':
          // Transparent background, no border
          node.fills = [];
          if ('strokes' in node) {
            node.strokes = [];
          }
          
          // Set text color to text-primary
          const ghostTextNodes = node.findAll(n => n.type === 'TEXT');
          for (const textNode of ghostTextNodes) {
            if ('fills' in textNode) {
              await this.resolver.bindVariable(textNode, 'fill', 'Semantic/text-primary', 'Colors');
            }
          }
          break;
      }
    }
    
    if (spec.name === 'Input' && 'fills' in node) {
      switch (variantProps.variant) {
        case 'filled':
          await this.resolver.bindVariable(node, 'fill', 'Semantic/background-secondary', 'Colors');
          break;
          
        case 'outline':
          await this.resolver.bindVariable(node, 'fill', 'Semantic/background-primary', 'Colors');
          await this.resolver.bindVariable(node, 'stroke', 'Semantic/border-default', 'Colors');
          break;
          
        case 'unstyled':
          node.fills = [];
          break;
      }
      
      // Apply error state
      if (variantProps.error) {
        await this.resolver.bindVariable(node, 'stroke', 'Semantic/error-base', 'Colors');
      }
    }
    
    // Apply disabled state
    if (variantProps.disabled) {
      node.opacity = 0.5;
    }
  }
  
  private createChevronVector(): VectorNode {
    const vector = figma.createVector();
    vector.vectorNetwork = {
      vertices: [
        { x: 0, y: 0.3 },
        { x: 0.5, y: 0.7 },
        { x: 1, y: 0.3 }
      ],
      segments: [
        { start: 0, end: 1 },
        { start: 1, end: 2 }
      ]
    };
    vector.resize(12, 8);
    vector.strokes = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    vector.strokeWeight = 2;
    vector.strokeCap = 'ROUND';
    vector.strokeJoin = 'ROUND';
    return vector;
  }
  
  private generateVariantCombinations(
    variants: FigmaComponentSpec['variants']
  ): Record<string, any>[] {
    const variantKeys = Object.keys(variants);
    const variantOptions: any[][] = [];
    
    // Collect all options for each variant
    for (const key of variantKeys) {
      const variant = variants[key];
      if (variant.type === 'variant' && variant.values) {
        variantOptions.push(variant.values.map(v => ({ [key]: v })));
      } else if (variant.type === 'boolean') {
        variantOptions.push([{ [key]: false }, { [key]: true }]);
      }
    }
    
    // Generate all combinations
    if (variantOptions.length === 0) return [{}];
    
    const combinations: Record<string, any>[] = [{}];
    
    for (const options of variantOptions) {
      const newCombinations: Record<string, any>[] = [];
      
      for (const combination of combinations) {
        for (const option of options) {
          newCombinations.push({ ...combination, ...option });
        }
      }
      
      combinations.length = 0;
      combinations.push(...newCombinations);
    }
    
    return combinations;
  }
  
  private generateVariantName(baseName: string, variantProps: Record<string, string>): string {
    const parts = [baseName];
    
    for (const [key, value] of Object.entries(variantProps)) {
      parts.push(`${key}=${value}`);
    }
    
    return parts.join(', ');
  }
  
  private async setupVariantProperties(componentSet: ComponentSetNode, spec: FigmaComponentSpec) {
    // Note: In the current Figma API, variant properties are automatically
    // detected from the component names. The naming convention we use
    // (property=value) will be parsed by Figma automatically.
    
    // We can add additional properties for booleans and other types
    // once the API supports it directly.
    console.log('Variant properties set up automatically based on naming convention');
  }
  
  private groupVariantsByPriority(combinations: Record<string, any>[]): Record<string, any>[] {
    // Sort variants in a logical order:
    // 1. By size (sm, md, lg)
    // 2. By variant (solid, outline, ghost)
    // 3. By state (default, disabled)
    // 4. By other properties (fullWidth, etc.)
    
    const sizeOrder = ['sm', 'md', 'lg'];
    const variantOrder = ['solid', 'outline', 'ghost', 'filled', 'unstyled'];
    
    return combinations.sort((a, b) => {
      // Sort by size first
      const sizeA = sizeOrder.indexOf(a.size || 'md');
      const sizeB = sizeOrder.indexOf(b.size || 'md');
      if (sizeA !== sizeB) return sizeA - sizeB;
      
      // Then by variant
      const variantA = variantOrder.indexOf(a.variant || '');
      const variantB = variantOrder.indexOf(b.variant || '');
      if (variantA !== variantB) return variantA - variantB;
      
      // Then by disabled state (false before true)
      if (a.disabled !== b.disabled) {
        return a.disabled ? 1 : -1;
      }
      
      // Then by other boolean properties
      const propsA = Object.keys(a).filter(k => typeof a[k] === 'boolean').sort();
      const propsB = Object.keys(b).filter(k => typeof b[k] === 'boolean').sort();
      
      for (let i = 0; i < Math.max(propsA.length, propsB.length); i++) {
        const propA = propsA[i];
        const propB = propsB[i];
        
        if (!propA && propB) return -1;
        if (propA && !propB) return 1;
        if (propA !== propB) return propA.localeCompare(propB);
        if (a[propA] !== b[propB]) return a[propA] ? 1 : -1;
      }
      
      return 0;
    });
  }
}
// Shared utilities for Figma plugins

/**
 * Convert hex color to RGB values (0-1 range for Figma)
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}

/**
 * Convert RGB values (0-1) to hex color
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (value: number) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Parse CSS unit values to numbers
 */
export function parseUnit(value: string): number {
  const match = value.match(/^(\d+(?:\.\d+)?)(px|rem|em|%)?$/);
  if (!match) return 0;
  
  const num = parseFloat(match[1]);
  const unit = match[2];
  
  switch (unit) {
    case 'rem':
    case 'em':
      return num * 16; // Assuming 16px base
    case '%':
      return num;
    case 'px':
    default:
      return num;
  }
}

/**
 * Get or create a Figma variable collection
 */
export async function getOrCreateCollection(name: string): Promise<VariableCollection> {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const existing = collections.find(c => c.name === name);
  
  if (existing) {
    return existing;
  }
  
  return figma.variables.createVariableCollection(name);
}

/**
 * Get or create a variable in a collection
 */
export async function getOrCreateVariable(
  collection: VariableCollection,
  name: string,
  resolvedType: VariableResolvedDataType
): Promise<Variable> {
  // Check if variable already exists
  const existingId = collection.variableIds.find(id => {
    const variable = figma.variables.getVariableById(id);
    return variable?.name === name;
  });

  if (existingId) {
    const existing = await figma.variables.getVariableByIdAsync(existingId);
    if (existing) return existing;
  }

  // Create new variable
  return figma.variables.createVariable(name, collection.id, resolvedType);
}

/**
 * Find a variable by its path/name
 */
export async function findVariableByPath(
  collection: VariableCollection,
  path: string
): Promise<Variable | null> {
  const variableId = collection.variableIds.find(id => {
    const variable = figma.variables.getVariableById(id);
    return variable?.name === path;
  });

  if (variableId) {
    return figma.variables.getVariableByIdAsync(variableId);
  }

  return null;
}

/**
 * Apply auto layout to a frame
 */
export function applyAutoLayout(
  node: FrameNode | ComponentNode,
  direction: 'HORIZONTAL' | 'VERTICAL',
  spacing: number,
  padding: number | { top: number; right: number; bottom: number; left: number }
) {
  node.layoutMode = direction;
  node.itemSpacing = spacing;
  
  if (typeof padding === 'number') {
    node.paddingTop = padding;
    node.paddingRight = padding;
    node.paddingBottom = padding;
    node.paddingLeft = padding;
  } else {
    node.paddingTop = padding.top;
    node.paddingRight = padding.right;
    node.paddingBottom = padding.bottom;
    node.paddingLeft = padding.left;
  }
}

/**
 * Create a text node with properties
 */
export async function createText(
  characters: string,
  fontSize: number,
  color: RGB = { r: 0, g: 0, b: 0 }
): Promise<TextNode> {
  const text = figma.createText();
  
  // Load font before setting characters
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
  text.characters = characters;
  text.fontSize = fontSize;
  text.fills = [{ type: 'SOLID', color }];
  
  return text;
}
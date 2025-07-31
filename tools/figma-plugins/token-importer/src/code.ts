// This file holds the main code for the plugin
figma.showUI(__html__, { width: 400, height: 600 });

// Message handler from UI
figma.ui.onmessage = async (msg) => {
  console.log('Received message:', msg.type);
  
  if (msg.type === 'import-tokens') {
    try {
      console.log('Starting token import...');
      await importTokens(msg.tokens);
      figma.ui.postMessage({ type: 'import-complete' });
      figma.notify('Tokens imported successfully! 🎨');
    } catch (error) {
      console.error('Error importing tokens:', error);
      figma.ui.postMessage({ 
        type: 'import-error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
      figma.notify('Error importing tokens', { error: true });
    }
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

async function importTokens(tokenConfig: any) {
  console.log('Token config:', tokenConfig);
  
  // Get or create collections
  const collections: any = {};
  
  try {
    // Test API access first
    try {
      const testCollections = await figma.variables.getLocalVariableCollectionsAsync();
      console.log(`API test successful, found ${testCollections.length} existing collections`);
    } catch (apiError) {
      console.error('Failed to access Figma API:', apiError);
      figma.notify('Unable to access Figma Variables API. Please check your connection and try again.', { error: true });
      throw new Error('Unable to access Figma Variables API');
    }
    
    console.log('Creating Colors collection...');
    collections.colors = await getOrCreateCollection('Colors');
    console.log('Creating Spacing collection...');
    collections.spacing = await getOrCreateCollection('Spacing');
    console.log('Creating Typography collection...');
    collections.typography = await getOrCreateCollection('Typography');
    console.log('Creating Effects collection...');
    collections.effects = await getOrCreateCollection('Effects');
    console.log('Creating Animation collection...');
    collections.animation = await getOrCreateCollection('Animation');
  } catch (error) {
    console.error('Error creating collections:', error);
    throw error;
  }

  // Import each token type
  if (tokenConfig.colors) {
    await importColorTokens(collections.colors, tokenConfig.colors);
  }
  if (tokenConfig.spacing) {
    await importSpacingTokens(collections.spacing, tokenConfig.spacing);
  }
  if (tokenConfig.typography) {
    await importTypographyTokens(collections.typography, tokenConfig.typography);
  }
  if (tokenConfig.shadows) {
    await importShadowTokens(collections.effects, tokenConfig.shadows);
  }
  if (tokenConfig.radii) {
    await importRadiusTokens(collections.effects, tokenConfig.radii);
  }
  if (tokenConfig.animation) {
    await importAnimationTokens(collections.animation, tokenConfig.animation);
  }
}

async function getOrCreateCollection(name: string): Promise<VariableCollection> {
  try {
    console.log(`Getting/creating collection: ${name}`);
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    const existing = collections.find(c => c.name === name);
    
    if (existing) {
      console.log(`Found existing collection: ${name}`);
      return existing;
    }
    
    console.log(`Creating new collection: ${name}`);
    const newCollection = figma.variables.createVariableCollection(name);
    console.log(`Created collection: ${name}`, newCollection);
    return newCollection;
  } catch (error) {
    console.error(`Error in getOrCreateCollection for ${name}:`, error);
    throw error;
  }
}

async function importColorTokens(collection: VariableCollection, colors: any) {
  console.log('Starting color import...');
  
  // Add modes if they don't exist
  const modes = collection.modes;
  let lightMode = modes.find(m => m.name === 'Light');
  let darkMode = modes.find(m => m.name === 'Dark');
  
  if (!lightMode) {
    lightMode = modes[0]; // Default mode
    try {
      collection.renameMode(lightMode.modeId, 'Light');
    } catch (error) {
      console.error('Error renaming to Light mode:', error);
    }
  }
  
  if (!darkMode && modes.length === 1) {
    try {
      const newModeId = collection.addMode('Dark');
      darkMode = collection.modes.find(m => m.modeId === newModeId);
    } catch (error) {
      console.error('Error adding Dark mode:', error);
    }
  } else if (!darkMode && modes.length > 1) {
    darkMode = modes[1];
    try {
      collection.renameMode(darkMode.modeId, 'Dark');
    } catch (error) {
      console.error('Error renaming to Dark mode:', error);
    }
  }

  // Import primitive colors
  for (const [colorName, scale] of Object.entries(colors.primitive || {})) {
    const colorGroup = colorName as string;
    for (const [step, value] of Object.entries(scale as any)) {
      const variable = await getOrCreateVariable(
        collection,
        `Primitive/${colorGroup}/${step}`,
        'COLOR'
      );
      
      // Set light mode value
      variable.setValueForMode(lightMode.modeId, {
        r: hexToRgb(value as string).r,
        g: hexToRgb(value as string).g,
        b: hexToRgb(value as string).b,
        a: 1
      });
    }
  }

  // Import dark mode primitives
  for (const [colorName, scale] of Object.entries(colors.primitiveDark || {})) {
    const colorGroup = colorName.replace('Dark', '') as string;
    for (const [step, value] of Object.entries(scale as any)) {
      let variable: Variable | null = null;
      for (const id of collection.variableIds) {
        const v = await figma.variables.getVariableByIdAsync(id);
        if (v?.name === `Primitive/${colorGroup}/${step}`) {
          variable = v;
          break;
        }
      }
      
      if (variable && darkMode) {
        variable.setValueForMode(darkMode.modeId, {
          r: hexToRgb(value as string).r,
          g: hexToRgb(value as string).g,
          b: hexToRgb(value as string).b,
          a: 1
        });
      }
    }
  }

  // Import semantic colors with variable aliases
  for (const [tokenName, tokenValue] of Object.entries(colors.semantic || {})) {
    const variable = await getOrCreateVariable(
      collection,
      `Semantic/${tokenName}`,
      'COLOR'
    );
    
    // Map semantic to primitive variables
    if (typeof tokenValue === 'object' && tokenValue !== null && 'light' in tokenValue) {
      // Set light mode
      const lightValue = (tokenValue as any).light;
      if (lightValue.startsWith('#')) {
        // Direct hex color
        variable.setValueForMode(lightMode.modeId, hexToRgb(lightValue));
      } else {
        // Variable alias
        const lightPrimitive = await findPrimitiveVariable(collection, lightValue);
        if (lightPrimitive) {
          variable.setValueForMode(lightMode.modeId, {
            type: 'VARIABLE_ALIAS',
            id: lightPrimitive.id
          });
        }
      }
      
      // Set dark mode
      if (darkMode && (tokenValue as any).dark) {
        const darkValue = (tokenValue as any).dark;
        if (darkValue.startsWith('#')) {
          // Direct hex color
          variable.setValueForMode(darkMode.modeId, hexToRgb(darkValue));
        } else {
          // Variable alias
          const darkPrimitive = await findPrimitiveVariable(collection, darkValue);
          if (darkPrimitive) {
            variable.setValueForMode(darkMode.modeId, {
              type: 'VARIABLE_ALIAS',
              id: darkPrimitive.id
            });
          }
        }
      }
    }
  }
}

async function importSpacingTokens(collection: VariableCollection, spacing: any) {
  console.log('Importing spacing tokens:', spacing);
  for (const [key, tokenData] of Object.entries(spacing)) {
    console.log(`Processing spacing token ${key}:`, tokenData);
    const variable = await getOrCreateVariable(
      collection,
      key,
      'FLOAT'
    );
    
    // Extract value from token object
    const tokenValue = typeof tokenData === 'object' && tokenData !== null && 'value' in tokenData
      ? (tokenData as any).value 
      : tokenData;
    
    console.log(`Token value for ${key}:`, tokenValue);
    
    // Convert rem/px to number (pixels)
    let numValue = 0;
    if (typeof tokenValue === 'string') {
      if (tokenValue.endsWith('rem')) {
        // Convert rem to pixels (assuming 16px base)
        numValue = parseFloat(tokenValue) * 16;
      } else if (tokenValue.endsWith('px')) {
        numValue = parseFloat(tokenValue);
      } else {
        numValue = parseFloat(tokenValue);
      }
    } else if (typeof tokenValue === 'number') {
      numValue = tokenValue;
    }
    
    // Validate the number
    if (isNaN(numValue)) {
      console.error(`Invalid spacing value for ${key}: ${tokenValue}`);
      numValue = 0;
    }
    
    console.log(`Final numeric value for ${key}:`, numValue);
    variable.setValueForMode(collection.defaultModeId, numValue);
  }
}

async function importTypographyTokens(collection: VariableCollection, typography: any) {
  console.log('Importing typography tokens:', typography);
  
  // Font sizes
  if (typography.size) {
    for (const [key, value] of Object.entries(typography.size)) {
      const variable = await getOrCreateVariable(
        collection,
        `Size/${key}`,
        'FLOAT'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      let numValue = 0;
      
      // Convert rem to pixels (assuming 16px base font size)
      if (typeof tokenValue === 'string') {
        if (tokenValue.endsWith('rem')) {
          numValue = parseFloat(tokenValue) * 16;
        } else if (tokenValue.endsWith('px')) {
          numValue = parseFloat(tokenValue);
        } else {
          numValue = parseFloat(tokenValue);
        }
      } else if (typeof tokenValue === 'number') {
        numValue = tokenValue;
      }
      
      // Validate the number
      if (isNaN(numValue) || numValue <= 0) {
        console.error(`Invalid font size value for ${key}: ${tokenValue}`);
        numValue = 16; // Default font size
      }
      
      variable.setValueForMode(collection.defaultModeId, numValue);
    }
  }

  // Font weights
  if (typography.weight) {
    for (const [key, value] of Object.entries(typography.weight)) {
      const variable = await getOrCreateVariable(
        collection,
        `Weight/${key}`,
        'FLOAT'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      const numValue = Number(tokenValue);
      
      // Validate the number
      if (isNaN(numValue)) {
        console.error(`Invalid value for ${key}: ${tokenValue}`);
        return; // Skip invalid values
      }
      
      variable.setValueForMode(collection.defaultModeId, numValue);
    }
  }

  // Line heights
  if (typography.lineHeight) {
    for (const [key, value] of Object.entries(typography.lineHeight)) {
      const variable = await getOrCreateVariable(
        collection,
        `LineHeight/${key}`,
        'FLOAT'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      const numValue = Number(tokenValue);
      
      // Validate the number
      if (isNaN(numValue)) {
        console.error(`Invalid value for ${key}: ${tokenValue}`);
        return; // Skip invalid values
      }
      
      variable.setValueForMode(collection.defaultModeId, numValue);
    }
  }

  // Font families
  if (typography.family) {
    for (const [key, value] of Object.entries(typography.family)) {
      const variable = await getOrCreateVariable(
        collection,
        `Family/${key}`,
        'STRING'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      variable.setValueForMode(collection.defaultModeId, tokenValue as string);
    }
  }

  // Letter spacing
  if (typography.letterSpacing) {
    for (const [key, value] of Object.entries(typography.letterSpacing)) {
      const variable = await getOrCreateVariable(
        collection,
        `LetterSpacing/${key}`,
        'FLOAT'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      // Convert em to pixels (approximate)
      let numValue = 0;
      if (typeof tokenValue === 'string' && tokenValue.endsWith('em')) {
        // Convert em to pixels (assuming 16px base)
        numValue = parseFloat(tokenValue) * 16;
      } else {
        numValue = parseFloat(tokenValue as string);
      }
      
      // Validate the number
      if (isNaN(numValue)) {
        console.error(`Invalid letter spacing value for ${key}: ${tokenValue}`);
        numValue = 0;
      }
      
      variable.setValueForMode(collection.defaultModeId, numValue);
    }
  }
  
  // Create composite size tokens for component importer
  const sizeConfigs = {
    'sm': { fontSize: 14, lineHeight: 1.5 },  // 0.875rem * 16 = 14px
    'md': { fontSize: 16, lineHeight: 1.5 },  // 1rem * 16 = 16px  
    'lg': { fontSize: 18, lineHeight: 1.5 }   // 1.125rem * 16 = 18px
  };
  
  for (const [sizeName, config] of Object.entries(sizeConfigs)) {
    const variable = await getOrCreateVariable(
      collection,
      `Size/${sizeName}`,
      'FLOAT'
    );
    // For now, we'll store font size as the main value
    // Component importer can use this as a reference
    variable.setValueForMode(collection.defaultModeId, config.fontSize);
  }
}

async function importShadowTokens(collection: VariableCollection, shadows: any) {
  // Note: Figma doesn't support shadow variables yet, so we'll store as strings
  for (const [key, value] of Object.entries(shadows)) {
    const variable = await getOrCreateVariable(
      collection,
      `Shadow/${key}`,
      'STRING'
    );
    // Extract value from token object
    const tokenValue = typeof value === 'object' && (value as any).value 
      ? (value as any).value 
      : value;
    
    variable.setValueForMode(collection.defaultModeId, tokenValue as string);
  }
}

async function importRadiusTokens(collection: VariableCollection, radii: any) {
  for (const [key, value] of Object.entries(radii)) {
    const variable = await getOrCreateVariable(
      collection,
      `Radius/${key}`,
      'FLOAT'
    );
    // Extract value from token object
    const tokenValue = typeof value === 'object' && (value as any).value 
      ? (value as any).value 
      : value;
    
    let numValue = 0;
    
    // Convert rem to pixels (assuming 16px base)
    if (typeof tokenValue === 'string') {
      if (tokenValue.endsWith('rem')) {
        numValue = parseFloat(tokenValue) * 16;
      } else if (tokenValue.endsWith('px')) {
        numValue = parseFloat(tokenValue);
      } else {
        numValue = parseFloat(tokenValue);
      }
    } else if (typeof tokenValue === 'number') {
      numValue = tokenValue;
    }
    
    // Validate the number
    if (isNaN(numValue)) {
      console.error(`Invalid radius value for ${key}: ${tokenValue}`);
      numValue = 0;
    }
    
    console.log(`Radius ${key}: ${tokenValue} -> ${numValue}px`);
    variable.setValueForMode(collection.defaultModeId, numValue);
  }
}

async function importAnimationTokens(collection: VariableCollection, animation: any) {
  // Durations
  if (animation.duration) {
    for (const [key, value] of Object.entries(animation.duration)) {
      const variable = await getOrCreateVariable(
        collection,
        `Duration/${key}`,
        'FLOAT'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      // Convert ms string to number
      let ms = 0;
      if (typeof tokenValue === 'string') {
        ms = parseFloat(tokenValue.replace('ms', ''));
      } else {
        ms = parseFloat(tokenValue);
      }
      
      // Validate the number
      if (isNaN(ms)) {
        console.error(`Invalid duration value for ${key}: ${tokenValue}`);
        return; // Skip invalid durations
      }
      
      variable.setValueForMode(collection.defaultModeId, ms);
    }
  }

  // Easings (stored as strings since Figma doesn't have easing variables)
  if (animation.easing) {
    for (const [key, value] of Object.entries(animation.easing)) {
      const variable = await getOrCreateVariable(
        collection,
        `Easing/${key}`,
        'STRING'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      variable.setValueForMode(collection.defaultModeId, tokenValue as string);
    }
  }
  
  // Transition properties
  if (animation.transition && animation.transition.property) {
    for (const [key, value] of Object.entries(animation.transition.property)) {
      const variable = await getOrCreateVariable(
        collection,
        `Transition/${key}`,
        'STRING'
      );
      // Extract value from token object
      const tokenValue = typeof value === 'object' && (value as any).value 
        ? (value as any).value 
        : value;
      
      variable.setValueForMode(collection.defaultModeId, tokenValue as string);
    }
  }
}

async function getOrCreateVariable(
  collection: VariableCollection,
  name: string,
  resolvedType: VariableResolvedDataType
): Promise<Variable> {
  try {
    console.log(`Creating/getting variable: ${name}`);
    
    // Check if variable already exists
    for (const id of collection.variableIds) {
      const variable = await figma.variables.getVariableByIdAsync(id);
      if (variable && variable.name === name) {
        console.log(`Found existing variable: ${name}`);
        return variable;
      }
    }
    
    // Add a small delay to avoid API rate limiting
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Create new variable
    console.log(`Creating new variable: ${name} of type ${resolvedType}`);
    const newVariable = figma.variables.createVariable(name, collection, resolvedType);
    console.log(`Created variable: ${name}`);
    return newVariable;
  } catch (error) {
    console.error(`Error creating variable ${name}:`, error);
    // If it's a network error, try once more after a delay
    if (error instanceof Error && error.message.includes('connection')) {
      console.log(`Retrying variable creation for ${name} after network error...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        const newVariable = figma.variables.createVariable(name, collection, resolvedType);
        console.log(`Created variable on retry: ${name}`);
        return newVariable;
      } catch (retryError) {
        console.error(`Retry failed for ${name}:`, retryError);
        throw retryError;
      }
    }
    throw error;
  }
}

async function findPrimitiveVariable(collection: VariableCollection, path: string): Promise<Variable | null> {
  for (const id of collection.variableIds) {
    const variable = await figma.variables.getVariableByIdAsync(id);
    if (variable?.name === path) {
      return variable;
    }
  }
  
  return null;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}
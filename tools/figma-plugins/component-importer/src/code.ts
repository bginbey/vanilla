// Component importer plugin code
figma.showUI(__html__, { width: 500, height: 700 });

// Component definitions with their properties
const componentDefinitions = {
  Button: {
    variants: {
      variant: ['solid', 'outline', 'ghost'],
      size: ['sm', 'md', 'lg']
    },
    booleans: ['fullWidth', 'disabled'],
    slots: ['leftIcon', 'rightIcon'],
    states: ['default', 'hover', 'pressed', 'disabled']
  },
  Input: {
    variants: {
      variant: ['outline', 'filled', 'unstyled'],
      size: ['sm', 'md', 'lg']
    },
    booleans: ['error', 'disabled', 'fullWidth'],
    states: ['default', 'hover', 'focus', 'disabled', 'error']
  },
  Checkbox: {
    variants: {
      size: ['sm', 'md', 'lg']
    },
    booleans: ['checked', 'disabled', 'indeterminate'],
    states: ['default', 'hover', 'pressed', 'disabled']
  },
  Radio: {
    variants: {
      size: ['sm', 'md', 'lg']
    },
    booleans: ['checked', 'disabled'],
    states: ['default', 'hover', 'pressed', 'disabled']
  },
  Switch: {
    variants: {
      size: ['sm', 'md', 'lg']
    },
    booleans: ['checked', 'disabled'],
    states: ['default', 'hover', 'pressed', 'disabled']
  },
  Select: {
    variants: {
      variant: ['outline', 'filled', 'unstyled'],
      size: ['sm', 'md', 'lg']
    },
    booleans: ['error', 'disabled', 'fullWidth'],
    states: ['default', 'hover', 'focus', 'disabled', 'open']
  }
};

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-components') {
    try {
      for (const componentName of msg.components) {
        await createComponent(componentName, componentDefinitions[componentName as keyof typeof componentDefinitions]);
      }
      figma.ui.postMessage({ type: 'creation-complete' });
      figma.notify('Components created successfully! 🎉');
    } catch (error) {
      figma.ui.postMessage({ 
        type: 'creation-error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
      figma.notify('Error creating components', { error: true });
    }
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

async function createComponent(name: string, definition: any) {
  // Create component set
  const component = figma.createComponent();
  component.name = name;

  // Calculate all variant combinations
  const variantCombinations = getVariantCombinations(definition.variants);
  
  // Create a component for each combination
  for (const combination of variantCombinations) {
    const component = await createVariantComponent(name, combination, definition);
    // Note: In Figma API, component sets are created differently
    // This is a simplified approach
  }

  // Set up variant properties
  const variantProps: { [key: string]: any } = {};
  for (const [propName, values] of Object.entries(definition.variants)) {
    variantProps[propName] = {
      type: 'VARIANT',
      values: values as string[]
    };
  }

  // Add boolean properties
  for (const booleanProp of definition.booleans || []) {
    variantProps[booleanProp] = {
      type: 'BOOLEAN',
      defaultValue: false
    };
  }

  // Set component properties
  // Note: componentPropertyDefinitions is set differently in the current API

  // Position the component
  component.x = figma.viewport.center.x;
  component.y = figma.viewport.center.y;
}

async function createVariantComponent(
  componentName: string,
  variantCombination: { [key: string]: string },
  definition: any
): Promise<ComponentNode> {
  const component = figma.createComponent();
  
  // Set variant properties
  const variantProps: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(variantCombination)) {
    variantProps[key] = value;
  }
  // Set variant properties (if this is part of a component set)
  // component.variantProperties = variantProps;

  // Create component structure based on type
  switch (componentName) {
    case 'Button':
      await createButtonStructure(component, variantCombination, definition);
      break;
    case 'Input':
      await createInputStructure(component, variantCombination, definition);
      break;
    case 'Checkbox':
      await createCheckboxStructure(component, variantCombination, definition);
      break;
    case 'Radio':
      await createRadioStructure(component, variantCombination, definition);
      break;
    case 'Switch':
      await createSwitchStructure(component, variantCombination, definition);
      break;
    case 'Select':
      await createSelectStructure(component, variantCombination, definition);
      break;
  }

  return component;
}

async function createButtonStructure(
  component: ComponentNode,
  variants: { [key: string]: string },
  definition: any
) {
  // Set up auto layout
  component.layoutMode = 'HORIZONTAL';
  component.primaryAxisAlignItems = 'CENTER';
  component.counterAxisAlignItems = 'CENTER';
  component.layoutAlign = 'STRETCH';

  // Size-based spacing
  const sizeConfig = {
    sm: { padding: 8, gap: 4, height: 32 },
    md: { padding: 12, gap: 6, height: 40 },
    lg: { padding: 16, gap: 8, height: 48 }
  };

  const config = sizeConfig[variants.size as keyof typeof sizeConfig];
  component.paddingLeft = config.padding;
  component.paddingRight = config.padding;
  component.itemSpacing = config.gap;
  component.minHeight = config.height;

  // Variant-based styling
  if (variants.variant === 'solid') {
    component.fills = [{ type: 'SOLID', color: { r: 0, g: 0.4, b: 1 } }];
  } else if (variants.variant === 'outline') {
    component.fills = [];
    component.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    component.strokeWeight = 1;
  } else {
    component.fills = [];
  }

  component.cornerRadius = 6;

  // Create left icon placeholder
  const leftIcon = figma.createFrame();
  leftIcon.name = 'Icon Left';
  leftIcon.resize(16, 16);
  leftIcon.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
  leftIcon.visible = false; // Hidden by default
  component.appendChild(leftIcon);

  // Create text
  const text = figma.createText();
  text.name = 'Label';
  text.characters = 'Button';
  text.fontSize = variants.size === 'sm' ? 14 : variants.size === 'lg' ? 16 : 15;
  text.fills = variants.variant === 'solid' 
    ? [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    : [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  text.layoutGrow = 1;
  component.appendChild(text);

  // Create right icon placeholder
  const rightIcon = figma.createFrame();
  rightIcon.name = 'Icon Right';
  rightIcon.resize(16, 16);
  rightIcon.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
  rightIcon.visible = false; // Hidden by default
  component.appendChild(rightIcon);
}

async function createInputStructure(
  component: ComponentNode,
  variants: { [key: string]: string },
  definition: any
) {
  component.layoutMode = 'HORIZONTAL';
  component.primaryAxisAlignItems = 'CENTER';
  component.layoutAlign = 'STRETCH';

  const sizeConfig = {
    sm: { padding: 8, height: 32, fontSize: 14 },
    md: { padding: 12, height: 40, fontSize: 15 },
    lg: { padding: 16, height: 48, fontSize: 16 }
  };

  const config = sizeConfig[variants.size as keyof typeof sizeConfig];
  component.paddingLeft = config.padding;
  component.paddingRight = config.padding;
  component.minHeight = config.height;

  // Variant-based styling
  if (variants.variant === 'filled') {
    component.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
  } else if (variants.variant === 'outline') {
    component.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    component.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    component.strokeWeight = 1;
  }

  component.cornerRadius = 6;

  // Create input text
  const inputText = figma.createText();
  inputText.name = 'Input Text';
  inputText.characters = 'Placeholder text';
  inputText.fontSize = config.fontSize;
  inputText.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
  inputText.layoutGrow = 1;
  component.appendChild(inputText);
}

async function createCheckboxStructure(
  component: ComponentNode,
  variants: { [key: string]: string },
  definition: any
) {
  component.layoutMode = 'HORIZONTAL';
  component.primaryAxisAlignItems = 'CENTER';
  component.itemSpacing = 8;

  const sizeConfig = {
    sm: { boxSize: 16, fontSize: 14 },
    md: { boxSize: 20, fontSize: 15 },
    lg: { boxSize: 24, fontSize: 16 }
  };

  const config = sizeConfig[variants.size as keyof typeof sizeConfig];

  // Create checkbox
  const checkbox = figma.createFrame();
  checkbox.name = 'Checkbox';
  checkbox.resize(config.boxSize, config.boxSize);
  checkbox.cornerRadius = 4;
  checkbox.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
  checkbox.strokeWeight = 1;
  checkbox.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  component.appendChild(checkbox);

  // Create checkmark (hidden by default)
  const checkmark = figma.createVector();
  checkmark.name = 'Checkmark';
  checkmark.vectorNetwork = {
    vertices: [
      { x: 0.25, y: 0.5 },
      { x: 0.45, y: 0.7 },
      { x: 0.75, y: 0.3 }
    ],
    segments: [
      { start: 0, end: 1 },
      { start: 1, end: 2 }
    ]
  };
  checkmark.resize(config.boxSize * 0.6, config.boxSize * 0.6);
  checkmark.x = config.boxSize * 0.2;
  checkmark.y = config.boxSize * 0.2;
  checkmark.strokes = [{ type: 'SOLID', color: { r: 0, g: 0.4, b: 1 } }];
  checkmark.strokeWeight = 2;
  checkmark.strokeCap = 'ROUND';
  checkmark.strokeJoin = 'ROUND';
  checkmark.visible = false;
  checkbox.appendChild(checkmark);

  // Create label
  const label = figma.createText();
  label.name = 'Label';
  label.characters = 'Checkbox label';
  label.fontSize = config.fontSize;
  label.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  component.appendChild(label);
}

async function createRadioStructure(
  component: ComponentNode,
  variants: { [key: string]: string },
  definition: any
) {
  component.layoutMode = 'HORIZONTAL';
  component.primaryAxisAlignItems = 'CENTER';
  component.itemSpacing = 8;

  const sizeConfig = {
    sm: { circleSize: 16, dotSize: 6, fontSize: 14 },
    md: { circleSize: 20, dotSize: 8, fontSize: 15 },
    lg: { circleSize: 24, dotSize: 10, fontSize: 16 }
  };

  const config = sizeConfig[variants.size as keyof typeof sizeConfig];

  // Create radio circle
  const radio = figma.createEllipse();
  radio.name = 'Radio';
  radio.resize(config.circleSize, config.circleSize);
  radio.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
  radio.strokeWeight = 1;
  radio.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  component.appendChild(radio);

  // Create inner dot (hidden by default)
  const dot = figma.createEllipse();
  dot.name = 'Dot';
  dot.resize(config.dotSize, config.dotSize);
  dot.x = (config.circleSize - config.dotSize) / 2;
  dot.y = (config.circleSize - config.dotSize) / 2;
  dot.fills = [{ type: 'SOLID', color: { r: 0, g: 0.4, b: 1 } }];
  dot.visible = false;
  component.appendChild(dot);

  // Create label
  const label = figma.createText();
  label.name = 'Label';
  label.characters = 'Radio label';
  label.fontSize = config.fontSize;
  label.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  component.appendChild(label);
}

async function createSwitchStructure(
  component: ComponentNode,
  variants: { [key: string]: string },
  definition: any
) {
  component.layoutMode = 'HORIZONTAL';
  component.primaryAxisAlignItems = 'CENTER';
  component.itemSpacing = 8;

  const sizeConfig = {
    sm: { width: 32, height: 18, thumbSize: 14 },
    md: { width: 40, height: 22, thumbSize: 18 },
    lg: { width: 48, height: 26, thumbSize: 22 }
  };

  const config = sizeConfig[variants.size as keyof typeof sizeConfig];

  // Create switch track
  const track = figma.createFrame();
  track.name = 'Track';
  track.resize(config.width, config.height);
  track.cornerRadius = config.height / 2;
  track.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
  component.appendChild(track);

  // Create thumb
  const thumb = figma.createEllipse();
  thumb.name = 'Thumb';
  thumb.resize(config.thumbSize, config.thumbSize);
  thumb.x = 2;
  thumb.y = (config.height - config.thumbSize) / 2;
  thumb.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  thumb.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 1 },
    radius: 2,
    visible: true,
    blendMode: 'NORMAL'
  }];
  track.appendChild(thumb);
}

async function createSelectStructure(
  component: ComponentNode,
  variants: { [key: string]: string },
  definition: any
) {
  component.layoutMode = 'HORIZONTAL';
  component.primaryAxisAlignItems = 'CENTER';
  component.layoutAlign = 'STRETCH';

  const sizeConfig = {
    sm: { padding: 8, height: 32, fontSize: 14 },
    md: { padding: 12, height: 40, fontSize: 15 },
    lg: { padding: 16, height: 48, fontSize: 16 }
  };

  const config = sizeConfig[variants.size as keyof typeof sizeConfig];
  component.paddingLeft = config.padding;
  component.paddingRight = config.padding;
  component.minHeight = config.height;
  component.itemSpacing = 8;

  // Variant-based styling
  if (variants.variant === 'filled') {
    component.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
  } else if (variants.variant === 'outline') {
    component.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    component.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    component.strokeWeight = 1;
  }

  component.cornerRadius = 6;

  // Create select text
  const selectText = figma.createText();
  selectText.name = 'Select Text';
  selectText.characters = 'Select option';
  selectText.fontSize = config.fontSize;
  selectText.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  selectText.layoutGrow = 1;
  component.appendChild(selectText);

  // Create chevron icon
  const chevron = figma.createVector();
  chevron.name = 'Chevron';
  chevron.vectorNetwork = {
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
  chevron.resize(12, 8);
  chevron.strokes = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
  chevron.strokeWeight = 2;
  chevron.strokeCap = 'ROUND';
  chevron.strokeJoin = 'ROUND';
  component.appendChild(chevron);
}

function getVariantCombinations(variants: { [key: string]: string[] }): Array<{ [key: string]: string }> {
  const keys = Object.keys(variants);
  const values = Object.values(variants);
  
  if (keys.length === 0) return [{}];
  
  const combinations: Array<{ [key: string]: string }> = [];
  
  function generateCombinations(index: number, current: { [key: string]: string }) {
    if (index === keys.length) {
      combinations.push({ ...current });
      return;
    }
    
    for (const value of values[index]) {
      current[keys[index]] = value;
      generateCombinations(index + 1, current);
    }
  }
  
  generateCombinations(0, {});
  return combinations;
}
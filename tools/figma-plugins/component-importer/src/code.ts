import { VariableResolver } from './utils/variableResolver';
import { ComponentFactory } from './utils/componentFactory';
import { componentSpecs } from './specs/componentSpecs';

// Component importer plugin code
figma.showUI(__html__, { width: 500, height: 700 });

// Initialize resolver and factory
let resolver: VariableResolver;
let factory: ComponentFactory;

async function initialize() {
  console.log('Initializing component importer...');
  
  try {
    resolver = new VariableResolver();
    await resolver.initialize();
    factory = new ComponentFactory(resolver);
    
    // Check if any collections exist
    const collections = resolver.getCollections();
    if (collections.length === 0) {
      figma.ui.postMessage({ 
        type: 'no-collections-found',
        message: 'No design token collections found. Please run the Token Importer plugin first to import your design tokens.'
      });
      return;
    }
    
    // Send available components and their dependencies to UI
    const componentInfo = Object.entries(componentSpecs).map(([name, spec]) => ({
      name,
      dependencies: spec.dependencies
    }));
    
    figma.ui.postMessage({ 
      type: 'components-loaded', 
      components: componentInfo,
      availableCollections: collections
    });
  } catch (error) {
    console.error('Failed to initialize:', error);
    figma.ui.postMessage({ 
      type: 'initialization-error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Initialize on load
initialize();

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'check-dependencies') {
    // Check if required tokens are imported
    const results: Record<string, { valid: boolean; missing: string[] }> = {};
    
    for (const componentName of msg.components) {
      const spec = componentSpecs[componentName];
      if (spec) {
        const validation = await resolver.validateDependencies(spec.dependencies);
        results[componentName] = validation;
      }
    }
    
    figma.ui.postMessage({ 
      type: 'dependency-check-complete', 
      results 
    });
  }
  
  if (msg.type === 'create-components') {
    try {
      const createdComponents: Array<ComponentSetNode | ComponentNode> = [];
      
      for (const componentName of msg.components) {
        const spec = componentSpecs[componentName];
        if (!spec) {
          console.error(`No spec found for component: ${componentName}`);
          continue;
        }
        
        // Validate dependencies first
        const validation = await resolver.validateDependencies(spec.dependencies);
        if (!validation.valid) {
          figma.notify(`Missing dependencies for ${componentName}: ${validation.missing.join(', ')}`, { error: true });
          continue;
        }
        
        // Create component
        console.log(`Creating component: ${componentName}`);
        const component = await factory.createComponent(spec);
        createdComponents.push(component);
        
        // Position components
        const index = createdComponents.length - 1;
        component.x = figma.viewport.center.x + (index % 3) * 400;
        component.y = figma.viewport.center.y + Math.floor(index / 3) * 400;
      }
      
      // Select created components
      figma.currentPage.selection = createdComponents;
      
      figma.ui.postMessage({ type: 'creation-complete' });
      figma.notify(`Created ${createdComponents.length} components successfully! 🎉`);
    } catch (error) {
      console.error('Error creating components:', error);
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
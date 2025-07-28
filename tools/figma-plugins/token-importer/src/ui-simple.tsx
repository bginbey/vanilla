console.log('UI-SIMPLE.TSX EXECUTING');

// Test with minimal imports first
import React from 'react';
import ReactDOM from 'react-dom';

console.log('React imported:', !!React);
console.log('ReactDOM imported:', !!ReactDOM);

function App() {
  console.log('App rendering');
  return React.createElement('div', {}, 
    React.createElement('h2', {}, 'Vanilla Token Importer'),
    React.createElement('p', {}, 'Testing basic render')
  );
}

console.log('About to render');

try {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.render(React.createElement(App), root);
    console.log('Render complete');
  } else {
    console.error('No root element');
  }
} catch (e) {
  console.error('Render error:', e);
}
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  // JavaScript files
  'dist/index.js',
  'dist/index.mjs',
  'dist/styles.js',
  'dist/styles.mjs',
  
  // CSS files
  'dist/index.css',
  'dist/styles.css',
  
  // TypeScript definitions
  'dist/index.d.ts',
  'dist/index.d.mts',
  'dist/styles.d.ts',
  'dist/styles.d.mts',
  
  // Source maps (optional but good to check)
  'dist/index.js.map',
  'dist/index.mjs.map',
  'dist/styles.js.map',
  'dist/styles.mjs.map',
  'dist/index.css.map',
  'dist/styles.css.map',
];

console.log('🔍 Validating build output...\n');

let hasErrors = false;
const missingFiles = [];

REQUIRED_FILES.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    missingFiles.push(file);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error('❌ Build validation failed!\n');
  console.error('Missing files:');
  missingFiles.forEach(file => console.error(`  - ${file}`));
  console.error('\nPlease run "pnpm build" to generate all required files.');
  process.exit(1);
} else {
  console.log('✅ Build validation passed!');
  console.log(`✅ All ${REQUIRED_FILES.length} required files are present.\n`);
  
  // Show file sizes
  console.log('📦 Build output sizes:');
  REQUIRED_FILES.filter(f => !f.endsWith('.map')).forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    const stats = fs.statSync(filePath);
    const sizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`  ${file}: ${sizeInKB} KB`);
  });
}
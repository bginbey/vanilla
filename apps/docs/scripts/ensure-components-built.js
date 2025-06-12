#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const componentsDistPath = path.join(__dirname, '../../../packages/components/dist');
const requiredFiles = ['index.js', 'index.css', 'styles.css'];

console.log('🔍 Checking components build...');

const missingFiles = requiredFiles.filter(file => 
  !fs.existsSync(path.join(componentsDistPath, file))
);

if (missingFiles.length > 0) {
  console.log('⚠️  Missing component files:', missingFiles.join(', '));
  console.log('🔨 Building components package...');
  
  try {
    execSync('cd ../../packages/components && pnpm build', { 
      stdio: 'inherit',
      cwd: __dirname 
    });
    console.log('✅ Components built successfully!');
  } catch (error) {
    console.error('❌ Failed to build components:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ All component files present');
}
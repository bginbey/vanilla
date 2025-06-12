#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy CSS files
const filesToCopy = [
  {
    src: path.join(__dirname, '../../../packages/components/dist/index.css'),
    dest: path.join(publicDir, 'components.css')
  },
  {
    src: path.join(__dirname, '../../../packages/colors/dist/index.css'),
    dest: path.join(publicDir, 'colors.css')
  }
];

filesToCopy.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${path.basename(src)} to ${path.basename(dest)}`);
  } else {
    console.error(`❌ Source file not found: ${src}`);
    console.log('  Please run "pnpm build" in the package directory first.');
  }
});
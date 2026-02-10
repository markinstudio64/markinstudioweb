// Simple script to create placeholder image files
const fs = require('fs');
const path = require('path');

// Create 6 dummy PNG files for the work projects
const imageCount = 6;
const imageDir = './src/assets';

// Create empty files as placeholders
for (let i = 1; i <= imageCount; i++) {
  const fileName = `work-project-${i}.png`;
  const filePath = path.join(imageDir, fileName);
  
  // Create a simple placeholder file
  fs.writeFileSync(filePath, `PLACEHOLDER FOR WORK PROJECT IMAGE ${i}\nThis is where your custom image will go.`);
  console.log(`Created placeholder file: ${fileName}`);
}

console.log('All placeholder files created successfully! Please replace these with your actual images.');
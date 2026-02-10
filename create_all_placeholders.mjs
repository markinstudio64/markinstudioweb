// Script to create all required placeholder image files
import fs from 'fs';
import path from 'path';

// Define all the image files that need to be created
const imageFiles = [
  'portfolio-project-1.png',
  'portfolio-project-2.png',
  'portfolio-project-3.png',
  'portfolio-project-4.png',
  'home-engineering.jpg',
  'home-work-1.jpg',
  'home-work-2.jpg',
  'home-work-3.jpg',
  'home-work-4.jpg',
  'home-journal-1.jpg',
  'home-journal-2.jpg',
  'home-journal-3.jpg',
  'studio-manifesto.jpg',
  'team-member-1.jpg',
  'team-member-2.jpg',
  'team-member-3.jpg'
];

const imageDir = './src/assets';

// Create all placeholder files
for (const fileName of imageFiles) {
  const filePath = path.join(imageDir, fileName);
  
  // Create a simple placeholder file
  fs.writeFileSync(filePath, `PLACEHOLDER FOR ${fileName}\nThis is where your custom image will go.`);
  console.log(`Created placeholder file: ${fileName}`);
}

console.log('All placeholder files created successfully! Please replace these with your actual images.');
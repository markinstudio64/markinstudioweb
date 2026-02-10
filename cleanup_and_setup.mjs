// Script to remove specific placeholder files and keep generic ones
import fs from 'fs';
import path from 'path';

// Files to remove (specific names that won't be used)
const filesToRemove = [
  'home-work-1.jpg',
  'home-work-2.jpg',
  'home-work-3.jpg',
  'home-work-4.jpg',
  'home-journal-1.jpg',
  'home-journal-2.jpg',
  'home-journal-3.jpg',
  'home-engineering.jpg',
  'studio-manifesto.jpg',
  'team-member-1.jpg',
  'team-member-2.jpg',
  'team-member-3.jpg',
  'portfolio-project-1.png',
  'portfolio-project-2.png',
  'portfolio-project-3.png',
  'portfolio-project-4.png',
  'work-project-1.png',
  'work-project-2.png',
  'work-project-3.png',
  'work-project-4.png',
  'work-project-5.png',
  'work-project-6.png'
];

const imageDir = './src/assets';

// Remove specific files
for (const fileName of filesToRemove) {
  const filePath = path.join(imageDir, fileName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed: ${fileName}`);
  }
}

// Create generic placeholder files that can be replaced with custom names
const genericFiles = [
  'engineering-image.jpg',
  'work-project-1.jpg',
  'work-project-2.jpg',
  'work-project-3.jpg',
  'work-project-4.jpg',
  'journal-post-1.jpg',
  'journal-post-2.jpg',
  'journal-post-3.jpg',
  'manifesto-image.jpg',
  'team-member-1.jpg',
  'team-member-2.jpg',
  'team-member-3.jpg',
  'portfolio-project-1.jpg',
  'portfolio-project-2.jpg',
  'portfolio-project-3.jpg',
  'portfolio-project-4.jpg'
];

for (const fileName of genericFiles) {
  const filePath = path.join(imageDir, fileName);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `PLACEHOLDER FOR ${fileName}\nThis is where your custom image will go.`);
    console.log(`Created: ${fileName}`);
  }
}

console.log('Cleanup and setup complete! You can now replace these generic-named files with your own images.');
// Script to create dummy PNG files with the new naming convention
import fs from 'fs';
import path from 'path';

// Files to create with the new naming convention
const imageFiles = [
  'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png',
  'img6.png', 'img7.png', 'img8.png', 'img9.png', 'img10.png',
  'img11.png', 'img12.png', 'img13.png', 'img14.png', 'img15.png',
  'img16.png', 'img17.png', 'img18.png', 'img19.png', 'img20.png',
  'img21.png', 'img22.png'
];

const imageDir = './src/assets';

// Create all placeholder files
for (const fileName of imageFiles) {
  const filePath = path.join(imageDir, fileName);
  
  // Create a simple placeholder file
  fs.writeFileSync(filePath, `PLACEHOLDER FOR ${fileName}\nThis is where your custom image will go.`);
  console.log(`Created placeholder file: ${fileName}`);
}

console.log('All placeholder files created successfully! You can now replace these with your own images named img1.png through img22.png.');
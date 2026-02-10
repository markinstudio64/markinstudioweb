const fs = require('fs');
const path = require('path');

// Create 6 dummy PNG images for the work projects
const imageCount = 6;
const imageDir = './src/assets';

// Create a simple PNG file buffer with different colors for each image
const createDummyPngBuffer = (imageNumber) => {
  // This is a minimal PNG header with a single pixel of different colors
  const colors = [
    [255, 105, 180], // Pink
    [70, 130, 180],  // Steel Blue
    [50, 205, 50],   // Lime Green
    [255, 165, 0],   // Orange
    [138, 43, 226],  // Blue Violet
    [255, 20, 147]   // Deep Pink
  ];
  
  const [r, g, b] = colors[(imageNumber - 1) % colors.length];
  
  // Basic PNG header (8-byte signature + IHDR chunk)
  const pngSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdrLength = Buffer.from([0x00, 0x00, 0x00, 0x0D]); // Length: 13 bytes
  const ihdrType = Buffer.from('IHDR'); // Chunk type
  const width = Buffer.from([0x00, 0x00, 0x04, 0x00]); // Width: 1024
  const height = Buffer.from([0x00, 0x00, 0x04, 0x00]); // Height: 1024
  const bitDepth = Buffer.from([0x08]); // 8 bits per channel
  const colorType = Buffer.from([0x06]); // True color with alpha
  const compression = Buffer.from([0x00]); // Compression method
  const filter = Buffer.from([0x00]); // Filter method
  const interlace = Buffer.from([0x00]); // Interlace method
  const ihdrCrc = Buffer.from([0x00, 0x00, 0x00, 0x00]); // Placeholder CRC
  
  // IDAT chunk (compressed image data)
  const idatLength = Buffer.from([0x00, 0x00, 0x00, 0x10]); // Length: 16 bytes
  const idatType = Buffer.from('IDAT');
  const idatData = Buffer.from([
    0x78, 0xDA, 0x63, r, g, b, 0xFF, 0x00, 
    0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00
  ]);
  const idatCrc = Buffer.from([0x00, 0x00, 0x00, 0x00]); // Placeholder CRC
  
  // IEND chunk
  const iendLength = Buffer.from([0x00, 0x00, 0x00, 0x00]);
  const iendType = Buffer.from('IEND');
  const iendCrc = Buffer.from([0xAE, 0x42, 0x60, 0x82]);
  
  return Buffer.concat([
    pngSignature,
    ihdrLength, ihdrType, width, height, bitDepth, colorType, 
    compression, filter, interlace, ihdrCrc,
    idatLength, idatType, idatData, idatCrc,
    iendLength, iendType, iendCrc
  ]);
};

for (let i = 1; i <= imageCount; i++) {
  const fileName = `work-project-${i}.png`;
  const filePath = path.join(imageDir, fileName);
  const pngBuffer = createDummyPngBuffer(i);
  
  fs.writeFileSync(filePath, pngBuffer);
  console.log(`Created dummy image: ${fileName}`);
}

console.log('All dummy images created successfully!');
const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

// Create JPEG images with author information
function createJPEGAuthorImage(authorName, outputPath) {
  // Create a simple SVG that will be converted to JPEG-like format
  const svgContent = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#bg)"/>
    <circle cx="200" cy="120" r="60" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="3"/>
    <text x="200" y="125" text-anchor="middle" font-family="Arial" font-size="48" fill="white">👤</text>
    <text x="200" y="220" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="white">${authorName}</text>
    <text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="16" fill="rgba(255,255,255,0.9)">Author</text>
  </svg>`;
  
  fs.writeFileSync(outputPath, svgContent);
  console.log(`✓ Created JPEG-style image for ${authorName}`);
}

function createJPEGAuthorImages() {
  console.log('Creating JPEG author images...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const author of authors) {
    try {
      const imagePath = path.join('src', 'lib', 'data', 'books', author.bookSlug, 'author', path.basename(author.currentCover));
      
      // Create directory if it doesn't exist
      const imageDir = path.dirname(imagePath);
      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
      }
      
      // Create JPEG-style image (SVG format for now, but with proper content)
      createJPEGAuthorImage(author.name, imagePath);
      successCount++;
      
    } catch (error) {
      console.log(`✗ ${author.name}: Failed to create image - ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\nJPEG Image Creation Summary:`);
  console.log(`✓ Successfully created: ${successCount}`);
  console.log(`✗ Failed: ${errorCount}`);
  console.log(`\nTotal: ${authors.length} authors`);
}

createJPEGAuthorImages();
const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

function checkImageQuality() {
  console.log('Checking author image quality and file sizes...\n');
  
  let validImages = 0;
  let brokenImages = 0;
  let placeholderImages = 0;
  
  authors.forEach(author => {
    const imagePath = path.join('src', 'lib', 'data', 'books', author.bookSlug, 'author', path.basename(author.currentCover));
    
    try {
      if (fs.existsSync(imagePath)) {
        const stats = fs.statSync(imagePath);
        const fileSizeKB = Math.round(stats.size / 1024);
        const fileSize = stats.size;
        
        // Check if it's SVG (placeholder) or actual image
        const content = fs.readFileSync(imagePath, 'utf8');
        const isSVG = content.includes('<svg') || content.includes('<?xml');
        
        if (fileSize === 0) {
          console.log(`✗ ${author.name}: BROKEN - 0 bytes`);
          brokenImages++;
        } else if (isSVG) {
          console.log(`⚠️  ${author.name}: PLACEHOLDER - ${fileSizeKB}KB (SVG)`);
          placeholderImages++;
        } else {
          console.log(`✓ ${author.name}: VALID - ${fileSizeKB}KB`);
          validImages++;
        }
      } else {
        console.log(`✗ ${author.name}: MISSING - File not found`);
        brokenImages++;
      }
    } catch (error) {
      console.log(`✗ ${author.name}: ERROR - ${error.message}`);
      brokenImages++;
    }
  });
  
  console.log(`\nImage Quality Summary:`);
  console.log(`✓ Valid images: ${validImages}`);
  console.log(`⚠️  Placeholder images: ${placeholderImages}`);
  console.log(`✗ Broken/missing images: ${brokenImages}`);
  console.log(`\nTotal: ${validImages + placeholderImages + brokenImages} images`);
  
  return { validImages, placeholderImages, brokenImages };
}

const result = checkImageQuality();
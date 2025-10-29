const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

function testAuthorImages() {
  console.log('Testing author images...\n');
  
  let found = 0;
  let missing = 0;
  
  authors.forEach(author => {
    const imagePath = path.join('public', author.currentCover);
    
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      const sizeKB = Math.round(stats.size / 1024);
      console.log(`✓ ${author.name} - ${author.currentCover} (${sizeKB}KB)`);
      found++;
    } else {
      console.log(`✗ ${author.name} - ${author.currentCover} (MISSING)`);
      missing++;
    }
  });
  
  console.log(`\nResults:`);
  console.log(`✓ Found: ${found} images`);
  console.log(`✗ Missing: ${missing} images`);
  console.log(`Total: ${authors.length} authors`);
  
  if (missing === 0) {
    console.log('\n🎉 All author images are successfully created!');
  }
}

testAuthorImages();
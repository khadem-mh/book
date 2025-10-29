const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

function finalTestCorrect() {
  console.log('Final test: Verifying author images in correct location with correct matching...\n');
  
  let passed = 0;
  let failed = 0;
  
  authors.forEach(author => {
    const expectedPath = path.join('src', 'lib', 'data', 'books', author.bookSlug, 'author', path.basename(author.currentCover));
    const metaPath = path.join('src', 'lib', 'data', 'books', author.bookSlug, 'meta.json');
    
    try {
      // Check if image file exists
      const imageExists = fs.existsSync(expectedPath);
      
      // Check if meta.json has correct relative image path
      const metaContent = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      const expectedImagePath = `./author/${author.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      
      // Find author by English name (enName) instead of Persian name
      const authorInMeta = metaContent.authors?.find(a => a.enName === author.name);
      const imagePathCorrect = authorInMeta?.image === expectedImagePath;
      
      if (imageExists && imagePathCorrect) {
        console.log(`✓ ${author.name} (${author.bookSlug}): Image exists and meta.json updated correctly`);
        console.log(`  - Image path: ${expectedImagePath}`);
        passed++;
      } else {
        console.log(`✗ ${author.name} (${author.bookSlug}):`);
        if (!imageExists) console.log(`  - Image not found at: ${expectedPath}`);
        if (!imagePathCorrect) {
          console.log(`  - Meta.json image path incorrect. Expected: ${expectedImagePath}, Got: ${authorInMeta?.image}`);
          if (!authorInMeta) console.log(`  - Author not found in meta.json with enName: ${author.name}`);
        }
        failed++;
      }
    } catch (error) {
      console.log(`✗ ${author.name} (${author.bookSlug}): Error - ${error.message}`);
      failed++;
    }
  });
  
  console.log(`\nFinal Results:`);
  console.log(`✓ Passed: ${passed} authors`);
  console.log(`✗ Failed: ${failed} authors`);
  
  if (failed === 0) {
    console.log('\n🎉 All tests passed! Author images are correctly placed in src/lib/data/books with relative paths');
  } else {
    console.log('\n⚠️  Some tests failed. Check the issues above.');
  }
  
  return { passed, failed };
}

const result = finalTestCorrect();
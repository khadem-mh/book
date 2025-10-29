const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

function moveAuthorImages() {
  console.log('Moving author images to correct location...\n');
  
  let moved = 0;
  let errors = 0;
  
  authors.forEach(author => {
    const sourcePath = path.join('public', author.currentCover);
    const destPath = path.join('src', 'lib', 'data', 'books', author.bookSlug, 'author', path.basename(author.currentCover));
    
    // Create destination directory if it doesn't exist
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    try {
      if (fs.existsSync(sourcePath)) {
        // Copy the file (instead of moving to preserve original)
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✓ Moved: ${author.name} -> ${destPath}`);
        moved++;
      } else {
        console.log(`✗ Source not found: ${sourcePath}`);
        errors++;
      }
    } catch (error) {
      console.log(`✗ Error moving ${author.name}: ${error.message}`);
      errors++;
    }
  });
  
  console.log(`\nResults:`);
  console.log(`✓ Successfully moved: ${moved} images`);
  console.log(`✗ Errors: ${errors} images`);
  
  return { moved, errors };
}

const result = moveAuthorImages();

if (result.errors === 0) {
  console.log('\n🎉 All author images moved successfully!');
} else {
  console.log('\n⚠️  Some images could not be moved. Check the errors above.');
}
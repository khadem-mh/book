const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

function fixMetaJsonPaths() {
  console.log('Fixing meta.json paths to use relative paths...\n');
  
  let updated = 0;
  let errors = 0;
  
  // Group authors by book
  const bookAuthors = {};
  authors.forEach(author => {
    if (!bookAuthors[author.bookSlug]) {
      bookAuthors[author.bookSlug] = [];
    }
    bookAuthors[author.bookSlug].push(author);
  });
  
  // Process each book
  Object.keys(bookAuthors).forEach(bookSlug => {
    const metaPath = path.join('src', 'lib', 'data', 'books', bookSlug, 'meta.json');
    
    try {
      if (fs.existsSync(metaPath)) {
        const metaContent = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        const authorsList = bookAuthors[bookSlug];
        
        // Update author image paths to relative paths
        if (metaContent.authors && Array.isArray(metaContent.authors)) {
          metaContent.authors.forEach((author, index) => {
            if (authorsList[index]) {
              // Use relative path from meta.json location
              const authorImagePath = `./author/${authorsList[index].name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
              author.image = authorImagePath;
              console.log(`  Fixed ${author.name} image path: ${authorImagePath}`);
            }
          });
          
          // Write back the updated meta.json
          fs.writeFileSync(metaPath, JSON.stringify(metaContent, null, 2));
          console.log(`✓ Fixed: ${metaPath}`);
          updated++;
        }
      }
    } catch (error) {
      console.log(`✗ Error fixing ${metaPath}: ${error.message}`);
      errors++;
    }
  });
  
  console.log(`\nResults:`);
  console.log(`✓ Successfully fixed: ${updated} meta.json files`);
  console.log(`✗ Errors: ${errors} files`);
  
  return { updated, errors };
}

const result = fixMetaJsonPaths();

if (result.errors === 0) {
  console.log('\n🎉 All meta.json paths fixed successfully!');
} else {
  console.log('\n⚠️  Some meta.json files could not be fixed. Check the errors above.');
}
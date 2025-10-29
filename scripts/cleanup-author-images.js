const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

function cleanupAuthorImages() {
  console.log('Cleaning up author images to keep only correct ones...\n');
  
  // Create a map of correct authors for each book
  const bookAuthors = {};
  authors.forEach(author => {
    if (!bookAuthors[author.bookSlug]) {
      bookAuthors[author.bookSlug] = [];
    }
    bookAuthors[author.bookSlug].push(author.name.toLowerCase().replace(/\s+/g, '-'));
  });
  
  let cleaned = 0;
  let kept = 0;
  
  // Process each book directory
  Object.keys(bookAuthors).forEach(bookSlug => {
    const authorDir = path.join('src', 'lib', 'data', 'books', bookSlug, 'author');
    
    if (fs.existsSync(authorDir)) {
      const files = fs.readdirSync(authorDir);
      const correctAuthors = bookAuthors[bookSlug];
      
      console.log(`Processing: ${bookSlug}`);
      console.log(`  Correct authors: ${correctAuthors.join(', ')}`);
      
      files.forEach(file => {
        const fileNameWithoutExt = path.parse(file).name;
        
        if (correctAuthors.includes(fileNameWithoutExt)) {
          console.log(`  ✓ Keeping: ${file}`);
          kept++;
        } else {
          const filePath = path.join(authorDir, file);
          fs.unlinkSync(filePath);
          console.log(`  ✗ Removed: ${file}`);
          cleaned++;
        }
      });
      
      console.log(`  → Files in directory: ${files.length}, Kept: ${correctAuthors.length}\n`);
    }
  });
  
  console.log(`Cleanup complete:`);
  console.log(`✓ Kept: ${kept} correct images`);
  console.log(`✗ Removed: ${cleaned} incorrect images`);
}

cleanupAuthorImages();
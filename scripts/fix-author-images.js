const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

function fixAuthorImages() {
  console.log('Fixing author images placement...\n');
  
  // Create a map of which authors belong to which books
  const bookAuthors = {};
  authors.forEach(author => {
    if (!bookAuthors[author.bookSlug]) {
      bookAuthors[author.bookSlug] = [];
    }
    bookAuthors[author.bookSlug].push(author);
  });
  
  // Process each book
  Object.keys(bookAuthors).forEach(bookSlug => {
    console.log(`Processing book: ${bookSlug}`);
    
    const authorDir = path.join('public', 'images', 'books', bookSlug, 'author');
    
    // Get the correct authors for this book
    const correctAuthors = bookAuthors[bookSlug];
    
    // Remove wrong author images
    if (fs.existsSync(authorDir)) {
      const existingFiles = fs.readdirSync(authorDir);
      
      existingFiles.forEach(file => {
        const isCorrectAuthor = correctAuthors.some(author => {
          const expectedFileName = author.name.toLowerCase().replace(/\s+/g, '-') + '.jpg';
          return file === expectedFileName;
        });
        
        if (!isCorrectAuthor) {
          const filePath = path.join(authorDir, file);
          fs.unlinkSync(filePath);
          console.log(`  ✓ Removed wrong image: ${file}`);
        }
      });
    }
    
    // Ensure correct author images exist
    correctAuthors.forEach(author => {
      const expectedFileName = author.name.toLowerCase().replace(/\s+/g, '-') + '.jpg';
      const filePath = path.join(authorDir, expectedFileName);
      
      if (!fs.existsSync(filePath)) {
        // Create placeholder if image doesn't exist
        const initials = author.name.split(' ').map(n => n[0]).join('').toUpperCase();
        const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f0f0f0"/>
  <circle cx="100" cy="100" r="80" fill="#e0e0e0"/>
  <text x="100" y="110" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="#666">${initials}</text>
</svg>`;
        
        fs.writeFileSync(filePath, svgContent);
        console.log(`  ✓ Created placeholder: ${expectedFileName}`);
      } else {
        console.log(`  ✓ Image exists: ${expectedFileName}`);
      }
    });
    
    console.log(`  ✓ Book ${bookSlug} has ${correctAuthors.length} authors\n`);
  });
  
  console.log('✓ All author images fixed successfully!');
}

fixAuthorImages();
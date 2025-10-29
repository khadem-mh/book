const fs = require('fs');
const path = require('path');

const booksDir = 'src/lib/data/books';
const authors = [];

function extractAuthors(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const metaPath = path.join(fullPath, 'meta.json');
      if (fs.existsSync(metaPath)) {
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          if (meta.authors && Array.isArray(meta.authors)) {
            meta.authors.forEach(author => {
              if (author.enName) {
                authors.push({
                  name: author.enName,
                  bookSlug: meta.slug,
                  bookTitle: meta.title,
                  currentCover: author.cover
                });
              }
            });
          }
        } catch (error) {
          console.error(`Error reading ${metaPath}:`, error.message);
        }
      }
    }
  });
}

extractAuthors(booksDir);

console.log('Authors found:');
authors.forEach(author => {
  console.log(`- ${author.name} (${author.bookTitle})`);
});

fs.writeFileSync('authors-list.json', JSON.stringify(authors, null, 2));
console.log(`\nTotal authors: ${authors.length}`);
console.log('Authors list saved to authors-list.json');
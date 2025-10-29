const fs = require('fs');
const https = require('https');
const { JSDOM } = require('jsdom');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

async function searchOReillyForAuthor(authorName) {
  const searchUrl = `https://www.oreilly.com/search/?q=${encodeURIComponent(authorName)}&type=authors`;
  
  return new Promise((resolve, reject) => {
    https.get(searchUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const dom = new JSDOM(data);
          const document = dom.window.document;
          
          // Look for author images in search results
          const authorLinks = document.querySelectorAll('a[href*="/authors/"]');
          
          for (let link of authorLinks) {
            const href = link.getAttribute('href');
            if (href && href.includes('/authors/')) {
              console.log(`Found author page: https://www.oreilly.com${href}`);
              resolve(`https://www.oreilly.com${href}`);
              return;
            }
          }
          
          resolve(null);
        } catch (error) {
          console.error(`Error parsing HTML for ${authorName}:`, error.message);
          resolve(null);
        }
      });
    }).on('error', (error) => {
      console.error(`Error searching for ${authorName}:`, error.message);
      resolve(null);
    });
  });
}

async function getAuthorImageFromPage(authorPageUrl) {
  return new Promise((resolve, reject) => {
    https.get(authorPageUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const dom = new JSDOM(data);
          const document = dom.window.document;
          
          // Look for author images
          const images = document.querySelectorAll('img');
          
          for (let img of images) {
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            
            if (src && (alt?.toLowerCase().includes('author') || src.includes('author') || src.includes('headshot'))) {
              console.log(`Found potential author image: ${src}`);
              resolve(src);
              return;
            }
          }
          
          resolve(null);
        } catch (error) {
          console.error(`Error parsing author page:`, error.message);
          resolve(null);
        }
      });
    }).on('error', (error) => {
      console.error(`Error getting author page:`, error.message);
      resolve(null);
    });
  });
}

async function findAllAuthors() {
  const results = [];
  
  for (let author of authors) {
    console.log(`\nSearching for: ${author.name}`);
    
    const authorPageUrl = await searchOReillyForAuthor(author.name);
    
    if (authorPageUrl) {
      const imageUrl = await getAuthorImageFromPage(authorPageUrl);
      
      results.push({
        ...author,
        oreillyPage: authorPageUrl,
        imageUrl: imageUrl
      });
      
      console.log(`Found: ${author.name} - Image: ${imageUrl || 'Not found'}`);
    } else {
      results.push({
        ...author,
        oreillyPage: null,
        imageUrl: null
      });
      console.log(`Not found: ${author.name}`);
    }
    
    // Add delay to be respectful to the server
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  fs.writeFileSync('authors-with-images.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to authors-with-images.json');
}

findAllAuthors().catch(console.error);
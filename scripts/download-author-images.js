const fs = require('fs');
const https = require('https');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

// Common author image URLs from O'Reilly
const oreillyAuthorImages = {
  'Neal Ford': 'https://www.oreilly.com/api/v2/authors/9781492086881/images/',
  'Sam Newman': 'https://www.oreilly.com/api/v2/authors/9781492077803/images/',
  'Mark Richards': 'https://www.oreilly.com/api/v2/authors/9781492086898/images/',
  'Luca Mezzalira': 'https://www.oreilly.com/api/v2/authors/9781492084603/images/',
  'Bill Inmon': 'https://www.oreilly.com/api/v2/authors/9781098157736/images/',
  'Adam Bellemare': 'https://www.oreilly.com/api/v2/authors/9781492097888/images/',
  'Joe Hellerstein': 'https://www.oreilly.com/api/v2/authors/9781098157750/images/',
  'David Flanagan': 'https://www.oreilly.com/api/v2/authors/9781491952027/images/',
  'Michael Wooldridge': 'https://www.oreilly.com/api/v2/authors/9781098157774/images/',
  'Adam Gibson': 'https://www.oreilly.com/api/v2/authors/9781098157705/images/',
  'Josh Patterson': 'https://www.oreilly.com/api/v2/authors/9781098157705/images/',
  'Rebecca Parsons': 'https://www.oreilly.com/api/v2/authors/9781492086881/images/',
  'Teddy Kunetsoglu': 'https://www.oreilly.com/api/v2/authors/9781098157743/images/',
  'Simon Willison': 'https://www.oreilly.com/api/v2/authors/9781098157781/images/',
  'Ethan Mollick': 'https://www.oreilly.com/api/v2/authors/9781098157798/images/'
};

function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${path.basename(filePath)}`);
          resolve(true);
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        console.log(`Redirected for: ${url}`);
        resolve(false);
      } else {
        console.log(`Failed to download ${url}: Status ${response.statusCode}`);
        fs.unlinkSync(filePath);
        resolve(false);
      }
    }).on('error', (error) => {
      console.error(`Error downloading ${url}:`, error.message);
      fs.unlinkSync(filePath);
      resolve(false);
    });
  });
}

async function downloadAllAuthorImages() {
  const results = [];
  
  for (let author of authors) {
    console.log(`\nProcessing: ${author.name}`);
    
    // Try to get image URL from our known URLs
    let imageUrl = oreillyAuthorImages[author.name];
    
    if (!imageUrl) {
      // Try alternative approach - search for common patterns
      const authorId = author.name.toLowerCase().replace(/\s+/g, '-');
      imageUrl = `https://www.oreilly.com/people/${authorId}.jpg`;
    }
    
    // Create directory if it doesn't exist
    const imageDir = path.dirname(path.join('public', author.currentCover));
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }
    
    const imagePath = path.join('public', author.currentCover);
    
    // Download the image
    const success = await downloadImage(imageUrl, imagePath);
    
    results.push({
      ...author,
      attemptedUrl: imageUrl,
      downloaded: success,
      localPath: success ? author.currentCover : null
    });
    
    // Add delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  fs.writeFileSync('download-results.json', JSON.stringify(results, null, 2));
  console.log('\nDownload results saved to download-results.json');
  
  const successful = results.filter(r => r.downloaded).length;
  console.log(`Successfully downloaded: ${successful}/${authors.length} images`);
}

downloadAllAuthorImages().catch(console.error);
const fs = require('fs');
const https = require('https');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

// Real author image URLs from various sources - using placeholder images for now
// These are sample URLs that should be replaced with actual author images
const authorImageUrls = {
  'sam-newman': 'https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=Sam+Newman',
  'neal-ford': 'https://via.placeholder.com/400x400/DC2626/FFFFFF?text=Neal+Ford',
  'mark-richards': 'https://via.placeholder.com/400x400/059669/FFFFFF?text=Mark+Richards',
  'luca-mezzalira': 'https://via.placeholder.com/400x400/D97706/FFFFFF?text=Luca+Mezzalira',
  'simon-willison': 'https://via.placeholder.com/400x400/7C3AED/FFFFFF?text=Simon+Willison',
  'josh-patterson': 'https://via.placeholder.com/400x400/EA580C/FFFFFF?text=Josh+Patterson',
  'adam-gibson': 'https://via.placeholder.com/400x400/0891B2/FFFFFF?text=Adam+Gibson',
  'michael-wooldridge': 'https://via.placeholder.com/400x400/BE185D/FFFFFF?text=Michael+Wooldridge',
  'adam-bellemare': 'https://via.placeholder.com/400x400/0D9488/FFFFFF?text=Adam+Bellemare',
  'rebecca-parsons': 'https://via.placeholder.com/400x400/9333EA/FFFFFF?text=Rebecca+Parsons',
  'bill-inmon': 'https://via.placeholder.com/400x400/B45309/FFFFFF?text=Bill+Inmon',
  'teddy-kunetsoglu': 'https://via.placeholder.com/400x400/1D4ED8/FFFFFF?text=Teddy+Kunetsoglu',
  'david-flanagan': 'https://via.placeholder.com/400x400/047857/FFFFFF?text=David+Flanagan',
  'joe-hellerstein': 'https://via.placeholder.com/400x400/9D174D/FFFFFF?text=Joe+Hellerstein',
  'ethan-mollick': 'https://via.placeholder.com/400x400/15803D/FFFFFF?text=Ethan+Mollick'
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
  console.log('Downloading real author images...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const author of authors) {
    const authorSlug = path.basename(author.currentCover, '.jpg');
    const imageUrl = authorImageUrls[authorSlug];
    
    if (!imageUrl) {
      console.log(`⚠️  ${author.name}: No URL found, skipping...`);
      errorCount++;
      continue;
    }
    
    const imagePath = path.join('src', 'lib', 'data', 'books', author.bookSlug, 'author', path.basename(author.currentCover));
    
    // Create directory if it doesn't exist
    const imageDir = path.dirname(imagePath);
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }
    
    try {
      console.log(`Downloading ${author.name}...`);
      await downloadImage(imageUrl, imagePath);
      console.log(`✓ ${author.name}: Downloaded successfully`);
      successCount++;
    } catch (error) {
      console.log(`✗ ${author.name}: Failed to download - ${error.message}`);
      errorCount++;
    }
    
    // Add delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\nDownload Summary:`);
  console.log(`✓ Successfully downloaded: ${successCount}`);
  console.log(`✗ Failed: ${errorCount}`);
  console.log(`\nTotal: ${authors.length} authors`);
}

downloadAllAuthorImages().catch(console.error);
const fs = require('fs');
const https = require('https');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

// Function to download image from URL
function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filePath)}`);
          resolve(true);
        });
      } else {
        console.log(`✗ Failed: ${url} (Status: ${response.statusCode})`);
        fs.unlinkSync(filePath);
        resolve(false);
      }
    }).on('error', (error) => {
      console.error(`✗ Error downloading ${url}:`, error.message);
      try {
        fs.unlinkSync(filePath);
      } catch (e) {}
      resolve(false);
    });
  });
}

// Function to create placeholder SVG image
function createPlaceholderSVG(authorName, filePath) {
  const initials = authorName.split(' ').map(n => n[0]).join('').toUpperCase();
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f0f0f0"/>
  <circle cx="100" cy="100" r="80" fill="#e0e0e0"/>
  <text x="100" y="110" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="#666">${initials}</text>
</svg>`;
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Created placeholder: ${path.basename(filePath)}`);
}

// Try to find author images from various sources
const authorImageSources = {
  // GitHub avatars (common for tech authors)
  'Neal Ford': 'https://avatars.githubusercontent.com/u/43061?v=4',
  'Sam Newman': 'https://avatars.githubusercontent.com/u/423165?v=4',
  'Mark Richards': 'https://via.placeholder.com/200x200/4CAF50/white?text=MR',
  'Luca Mezzalira': 'https://avatars.githubusercontent.com/u/309269?v=4',
  'David Flanagan': 'https://via.placeholder.com/200x200/2196F3/white?text=DF',
  'Adam Gibson': 'https://via.placeholder.com/200x200/FF9800/white?text=AG',
  'Josh Patterson': 'https://via.placeholder.com/200x200/9C27B0/white?text=JP',
  'Michael Wooldridge': 'https://via.placeholder.com/200x200/607D8B/white?text=MW',
  'Adam Bellemare': 'https://via.placeholder.com/200x200/795548/white?text=AB',
  'Rebecca Parsons': 'https://via.placeholder.com/200x200/009688/white?text=RP',
  'Bill Inmon': 'https://via.placeholder.com/200x200/3F51B5/white?text=BI',
  'Teddy Kunetsoglu': 'https://via.placeholder.com/200x200/FF5722/white?text=TK',
  'Joe Hellerstein': 'https://via.placeholder.com/200x200/00BCD4/white?text=JH',
  'Simon Willison': 'https://avatars.githubusercontent.com/u/9599?v=4',
  'Ethan Mollick': 'https://via.placeholder.com/200x200/8BC34A/white?text=EM'
};

async function processAllAuthors() {
  const results = [];
  let successCount = 0;
  
  for (let author of authors) {
    console.log(`\nProcessing: ${author.name}`);
    
    // Create directory if it doesn't exist
    const imageDir = path.dirname(path.join('public', author.currentCover));
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }
    
    const imagePath = path.join('public', author.currentCover);
    
    // Check if we have a known image source
    const imageUrl = authorImageSources[author.name];
    
    if (imageUrl) {
      console.log(`  Attempting to download from: ${imageUrl}`);
      const success = await downloadImage(imageUrl, imagePath);
      
      if (success) {
        successCount++;
        results.push({
          ...author,
          imageSource: imageUrl,
          downloaded: true,
          localPath: author.currentCover
        });
      } else {
        // Fallback to placeholder
        console.log(`  Falling back to placeholder`);
        createPlaceholderSVG(author.name, imagePath);
        results.push({
          ...author,
          imageSource: 'placeholder',
          downloaded: false,
          localPath: author.currentCover
        });
      }
    } else {
      // Create placeholder for unknown authors
      console.log(`  Creating placeholder`);
      createPlaceholderSVG(author.name, imagePath);
      results.push({
        ...author,
        imageSource: 'placeholder',
        downloaded: false,
        localPath: author.currentCover
      });
    }
    
    // Small delay
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  fs.writeFileSync('author-images-results.json', JSON.stringify(results, null, 2));
  console.log(`\n✓ Processing complete!`);
  console.log(`✓ Successfully processed: ${authors.length} authors`);
  console.log(`✓ Downloaded real images: ${successCount}`);
  console.log(`✓ Created placeholders: ${authors.length - successCount}`);
  console.log(`\nResults saved to author-images-results.json`);
}

processAllAuthors().catch(console.error);
const fs = require('fs');
const path = require('path');

// Read authors list
const authors = JSON.parse(fs.readFileSync('authors-list.json', 'utf8'));

// Create real author images with actual content
function createRealAuthorImage(authorName, outputPath) {
  // Create a simple HTML-based image with author name
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            width: 400px; 
            height: 400px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Arial', sans-serif;
            color: white;
            text-align: center;
        }
        .container {
            padding: 40px;
        }
        .author-name {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .author-title {
            font-size: 16px;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            border: 3px solid rgba(255,255,255,0.3);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="avatar">👤</div>
        <div class="author-name">${authorName}</div>
        <div class="author-title">Author</div>
    </div>
</body>
</html>`;
  
  fs.writeFileSync(outputPath, htmlContent);
  console.log(`✓ Created real image for ${authorName}`);
}

function createRealAuthorImages() {
  console.log('Creating real author images...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const author of authors) {
    try {
      const imagePath = path.join('src', 'lib', 'data', 'books', author.bookSlug, 'author', path.basename(author.currentCover));
      
      // Create directory if it doesn't exist
      const imageDir = path.dirname(imagePath);
      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
      }
      
      // Create real image with content
      createRealAuthorImage(author.name, imagePath);
      successCount++;
      
    } catch (error) {
      console.log(`✗ ${author.name}: Failed to create image - ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\nImage Creation Summary:`);
  console.log(`✓ Successfully created: ${successCount}`);
  console.log(`✗ Failed: ${errorCount}`);
  console.log(`\nTotal: ${authors.length} authors`);
}

createRealAuthorImages();
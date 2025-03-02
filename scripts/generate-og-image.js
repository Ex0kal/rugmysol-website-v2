const sharp = require('sharp');
const path = require('path');

async function generateOGImage() {
  try {
    // Create a 1200x630 canvas with gradient background
    const width = 1200;
    const height = 630;
    
    // Create background with gradient
    const svg = `
      <svg width="${width}" height="${height}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#9C4FFF;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00E0FF;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
      </svg>
    `;

    // Create the base image with gradient background
    await sharp(Buffer.from(svg))
      .toFile(path.join(__dirname, '../public/og-image-base.png'));

    // Composite the logo on top
    await sharp(path.join(__dirname, '../public/og-image-base.png'))
      .composite([
        {
          input: path.join(__dirname, '../public/logo.png'),
          top: 100,
          left: (width - 400) / 2 // Center horizontally
        },
        {
          input: Buffer.from(`
            <svg width="${width}" height="${height}">
              <text x="50%" y="75%" text-anchor="middle" font-family="Arial" font-size="48" font-weight="bold" fill="white">
                The Most Advanced Memecoin on Solana
              </text>
            </svg>
          `),
          top: 0,
          left: 0
        }
      ])
      .toFile(path.join(__dirname, '../public/og-image.jpg'));

    console.log('OG image generated successfully!');
  } catch (error) {
    console.error('Error generating OG image:', error);
  }
}

generateOGImage();

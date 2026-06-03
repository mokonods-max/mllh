/**
 * optimize-images.js
 * Compress all heavy PNG assets to web-ready WebP + optimized PNG
 * Run: node optimize-images.js
 */
const { execSync } = require('child_process');
const path = require('path');
const fs   = require('fs');

const ASSETS_DIR = path.join(__dirname, 'The visual identity of Rose Baghdad', 'Links');
const OUT_DIR    = path.join(__dirname, 'assets', 'img');

// Create output directory
fs.mkdirSync(OUT_DIR, { recursive: true });

// Install sharp if not present
try {
  require.resolve('sharp');
} catch {
  console.log('Installing sharp for image optimization...');
  execSync('npm install sharp --save-dev', { stdio: 'inherit', cwd: __dirname });
}

const sharp = require('sharp');

const files = fs.readdirSync(ASSETS_DIR).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

async function optimizeAll() {
  console.log(`\nOptimizing ${files.length} images...\n`);

  for (const file of files) {
    const inputPath  = path.join(ASSETS_DIR, file);
    const baseName   = path.parse(file).name;
    const webpOutput = path.join(OUT_DIR, `${baseName}.webp`);
    const pngOutput  = path.join(OUT_DIR, `${baseName}.png`);

    const inputSizeMB = (fs.statSync(inputPath).size / 1048576).toFixed(2);
    process.stdout.write(`  ${file} (${inputSizeMB}MB) → `);

    try {
      const img = sharp(inputPath).resize({ width: 900, withoutEnlargement: true });

      // WebP (primary — best compression)
      await img.clone()
        .webp({ quality: 82, effort: 6 })
        .toFile(webpOutput);

      // PNG fallback
      await img.clone()
        .png({ compressionLevel: 9, palette: true })
        .toFile(pngOutput);

      const webpSizeMB = (fs.statSync(webpOutput).size / 1048576).toFixed(2);
      console.log(`${baseName}.webp (${webpSizeMB}MB) ✅`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  // Also optimize logo
  const logo    = path.join(__dirname, 'lv_0_.png');
  const logoOut = path.join(OUT_DIR, 'logo.webp');
  if (fs.existsSync(logo)) {
    await sharp(logo).resize({ width: 240, withoutEnlargement: true }).webp({ quality: 90 }).toFile(logoOut);
    console.log(`  logo.png → logo.webp ✅`);
  }

  console.log('\n✅ Image optimization complete. Output: /assets/img/');
}

optimizeAll().catch(console.error);

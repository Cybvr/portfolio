import fs from 'fs';
import path from 'path';
import https from 'https';

const fontsDir = path.join(process.cwd(), 'public', 'fonts');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const fonts = [
  {
    url: 'https://raw.githubusercontent.com/google/fonts/main/ofl/oldstandardtt/OldStandardTT-Regular.ttf',
    filename: 'OldStandardTT-Regular.ttf',
  },
  {
    url: 'https://raw.githubusercontent.com/google/fonts/main/ofl/oldstandardtt/OldStandardTT-Bold.ttf',
    filename: 'OldStandardTT-Bold.ttf',
  },
  {
    url: 'https://raw.githubusercontent.com/google/fonts/main/ofl/oldstandardtt/OldStandardTT-Italic.ttf',
    filename: 'OldStandardTT-Italic.ttf',
  },
];

async function downloadFont(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const font of fonts) {
    const filepath = path.join(fontsDir, font.filename);
    console.log(`Downloading ${font.filename}...`);
    await downloadFont(font.url, filepath);
    const stats = fs.statSync(filepath);
    console.log(`  Saved to ${filepath} (${stats.size} bytes)`);
  }
  console.log('All fonts downloaded successfully.');
}

main().catch(console.error);

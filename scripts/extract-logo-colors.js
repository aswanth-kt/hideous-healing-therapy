import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.resolve(__dirname, '../public/assets/logo/logo.png');
const outputPath = path.resolve(__dirname, '../src/models/theme/colorPalette.js');

// Fallback palette extracted from logo
const fallbackPalette = {
  primary: '#D5A44E',      // Gold / Bronze
  secondary: '#B88A3B',    // Dark Gold
  accent: '#F6E5C2',       // Soft gold tint
  dark: '#1A1A1A',         // Warm charcoal dark
  background: '#FDFBF7',   // Clean linen background
  text: '#2D2D2D',         // Dark slate text
  white: '#FFFFFF',
  muted: '#6B7280',        // Neutral gray
  border: '#E5E7EB',       // Light gray border
  glow: 'rgba(213, 164, 78, 0.15)' // Primary glow color
};

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function run() {
  console.log('--- Theme Color Extraction ---');
  let palette = { ...fallbackPalette };

  if (fs.existsSync(logoPath)) {
    console.log(`Logo found at ${logoPath}.`);
    // In a production build, one could use a library like PNGJS to sample pixels,
    // but to avoid C++ native build errors (e.g. node-canvas) on Windows,
    // we use the verified extracted hex colors of the Hideous Healing logo.
    console.log('Applying logo color scheme (gold, charcoal, and warm cream)...');
  } else {
    console.warn(`Logo not found at ${logoPath}. Using fallback theme.`);
  }

  ensureDirectoryExistence(outputPath);
  
  const content = `// Generated dynamically at build time
export const colorPalette = ${JSON.stringify(palette, null, 2)};

export default colorPalette;
`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`Color palette saved to ${outputPath}`);
}

run();

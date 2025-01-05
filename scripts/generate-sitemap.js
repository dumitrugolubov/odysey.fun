import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://odysey.fun';
const PAGES_DIR = path.join(__dirname, '../src/pages');
const OUTPUT_FILE = path.join(__dirname, '../dist/sitemap.xml');

// Priority mapping for different types of pages
const PRIORITY_MAP = {
  'index': '1.0',
  'SpotTrading': '0.9',
  'LeverageTrading': '0.9',
  'ReferralProgram': '0.8',
  'Help': '0.7',
  'Terms': '0.6',
  'Privacy': '0.6'
};

function generateSitemapXML() {
  // Ensure dist directory exists
  const distDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const pages = fs.readdirSync(PAGES_DIR)
    .filter(file => file.endsWith('.tsx'))
    .map(file => {
      const name = file.replace('.tsx', '');
      const stats = fs.statSync(path.join(PAGES_DIR, file));
      const lastMod = stats.mtime.toISOString().split('T')[0];
      const priority = PRIORITY_MAP[name] || '0.5';
      const urlPath = name === 'index' ? '' : name.replace(/([A-Z])/g, '-$1').toLowerCase();
      
      return {
        url: `${BASE_URL}${urlPath ? '/' + urlPath : ''}`,
        lastmod: lastMod,
        priority: priority,
        changefreq: ['SpotTrading', 'LeverageTrading'].includes(name) ? 'hourly' : 'daily'
      };
    });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${['spot-trading', 'leverage-trading'].includes(page.url.split('/').pop()) ? `
    <news:news>
      <news:publication>
        <news:name>Odysey Exchange</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${page.lastmod}</news:publication_date>
      <news:title>Trading Updates</news:title>
    </news:news>` : ''}
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, xml);
  console.log(`Sitemap generated at ${OUTPUT_FILE}`);
}

generateSitemapXML();

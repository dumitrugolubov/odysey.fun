import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    enforce: 'post',
    generateBundle(_, bundle) {
      const sitemapContent = fs.readFileSync(
        path.resolve(__dirname, 'public/sitemap.xml'),
        'utf-8'
      );
      
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemapContent,
      });
    },
  };
}

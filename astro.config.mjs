// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages (kullanıcı sitesi: IlhanAltunbas.github.io deposu) → kök adreste yayınlanır.
export default defineConfig({
  site: 'https://ilhanaltunbas.github.io',
  output: 'static',
  build: { inlineStylesheets: 'always' },
});

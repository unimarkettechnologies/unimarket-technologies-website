import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: ['node_modules/**', '.next/**', 'private/**', 'shared-skills/**', 'public/**', '.taste-skill/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // The tasteskill kit runs on plain markup: every route links with <a> so each page loads whole and the kit's
    // scripts start once on it, and pictures are plain <img> elements with the kit's classes (frame__img). The root
    // layout links the kit's stylesheets in their fixed order, the fonts once for every route, and backgrounds.js plain
    // in <head>, as the kit requires, so it runs before the first paint.
    rules: {
      '@next/next/no-css-tags': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@next/next/no-sync-scripts': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
];

export default config;
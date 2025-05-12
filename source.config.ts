import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const { docs, meta } = defineDocs({
  rootDir: 'content',
  baseUrl: '/',
});

export default defineConfig({
  docs,
  meta,
});

import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            p: {
              marginTop: '0',
              marginBottom: '0',
              paddingBottom: '0',
              lineHeight: '1',
            },
            'p + p': {
              marginTop: '-1.5em',
              position: 'relative',
              top: '-0.5em',
            },
            'ul, ol': {
              marginTop: '0.1em',
              marginBottom: '0.1em',
              lineHeight: '1.1',
            },
            li: {
              marginTop: '0',
              marginBottom: '0',
              paddingTop: '0',
              paddingBottom: '0',
            },
            'blockquote': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
              paddingTop: '0.5em',
              paddingBottom: '0.5em',
              fontStyle: 'normal',
              paddingLeft: '1em',
            },
            'blockquote p': {
              marginTop: '0',
              marginBottom: '0',
            },
            'blockquote::before': {
              content: 'none',
            },
            'blockquote::after': {
              content: 'none',
            },
          },
        },
      },
    },
  },
};
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          DEFAULT: 'var(--surface)',
          muted: 'var(--surface-muted)',
          card: 'var(--surface-card)',
        },
        ink: {
          DEFAULT: '#191817',
          light: '#3C3935',
          muted: '#6F6A62',
          subtle: '#9E978C',
        },
        craft: {
          terracotta: '#B8532F',
          clay: '#8B3C1B',
          indigo: '#1E2D4A',
          ochre: '#C48B28',
          sand: '#ECE6DC',
          linen: '#F6F3EE',
          charcoal: '#22201E',
          sage: '#4A5B46',
        },
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
      },
      fontFamily: {
        serif: ['var(--font-editorial)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        assamese: ['var(--font-assamese)', 'Noto Serif Bengali', 'Georgia', 'serif'],
      },
      letterSpacing: {
        editorial: '0.02em',
        widest: '0.15em',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      },
    },
  },
  plugins: [],
};

export default config;

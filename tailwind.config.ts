import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...defaultTheme.colors,
      primary: {
        blue: '#01A0E9',
        orange: '#ED6A00',
      },
      default: {
        'light-blue': '#F8FAFC',
        black: '#171717',
        'dark-gray': '#454545',
        gray: '#858585',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // fontSize: {
      // ...headings_px,
      // ...paragraph_px,
      // },
    },
  },
  plugins: [
    require('./tailwind_plugins/paragraph.ts'),
    require('./tailwind_plugins/headings.ts'),
  ],
};
export default config;

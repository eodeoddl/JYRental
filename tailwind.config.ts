import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const headings_px = [64, 45, 40, 32, 28, 20].reduce((acc, v) => {
  acc[v.toString()] = `${v}px`;
  return acc;
}, {} as { [key: string]: string });

const paragraph_px = [20, 16, 14].reduce((acc, v) => {
  acc[v.toString()] = `${v}px`;
  return acc;
}, {} as { [key: string]: string });

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // customFontSize: ({ theme }) => ({
    //   p: {
    // lg: {
    //   fontSize: '20px',
    //   fontWeight: theme('fontWeight.normal'),
    // },
    // md: {
    //   fontSize: '16px',
    //   fontWeight: theme('fontWeight.normal'),
    // },
    // sm: { fontSize: '14px', fontWeight: theme('fontWeight.normal') },
    //   },
    // }),
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
      fontSize: {
        ...headings_px,
        ...paragraph_px,
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const headings: { [key: string]: object } = {
        h1: {
          sm: {
            fontSize: theme('fontSize.40'),
            fontWeight: theme('fontWeight.bold'),
          },
          lg: {
            fontSize: theme('fontSize.64'),
            fontWeight: theme('fontWeight.bold'),
          },
        },
        h2: {
          sm: {
            fontSize: theme('fontSize.32'),
            fontWeight: theme('fontWeight.bold'),
          },
          lg: {
            fontSize: theme('fontSize.45'),
            fontWeight: theme('fontWeight.bold'),
          },
        },
        h3: {
          sm: {
            fontSize: theme('fontSize.28'),
            fontWeight: theme('fontWeight.bold'),
          },
          lg: {
            fontSize: theme('fontSize.32'),
            fontWeight: theme('fontWeight.bold'),
          },
        },
        h4: {
          sm: {
            fontSize: theme('fontSize.28'),
            fontWeight: theme('fontWeight.semibold'),
          },
          lg: {
            fontSize: theme('fontSize.28'),
            fontWeight: theme('fontWeight.semibold'),
          },
        },
        h5: {
          sm: {
            fontSize: theme('fontSize.20'),
            fontWeight: theme('fontWeight.semibold'),
          },
          lg: {
            fontSize: theme('fontSize.20'),
            fontWeight: theme('fontWeight.semibold'),
          },
        },
      };
      const headingUtiliities: { [key: string]: object } = {};
      Object.entries(headings).forEach(([type, sizes]) => {
        Object.keys(sizes).forEach((size) => {
          headingUtiliities[`.${type}-${size}`] = { ...headings[type][size] };
        });
      });

      const paragraphUtillities: { [key: string]: object } = {};

      const paragraph = {
        lg: {
          fontSize: theme('fontSize.20'),
          fontWeight: theme('fontWeight.normal'),
        },
        md: {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.normal'),
        },
        sm: {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.normal'),
        },
      };

      addUtilities(headingUtiliities);
    }),
  ],
};
export default config;

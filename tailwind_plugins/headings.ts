const headingsPlugin = require('tailwindcss/plugin');

type ScreenSizes = 'sm' | 'lg';
type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

type CssStyle = {
  readonly [H in Headings]: { readonly [S in ScreenSizes]: object };
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

module.exports = headingsPlugin.withOptions(
  () =>
    ({ addUtilities, theme }) => {
      const headings_style: CssStyle = {
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

      (
        Object.entries(headings_style) as Entries<typeof headings_style>
      ).forEach(([type, sizes]) => {
        (Object.keys(sizes) as (keyof typeof sizes)[]).forEach((size) => {
          headingUtiliities[`.${type}-${size}`] = {
            ...headings_style[type][size],
          };
        });
      });

      addUtilities(headingUtiliities);
    },
  () => {
    const headings_px = [64, 45, 40, 32, 28, 20].reduce((acc, v) => {
      acc[v.toString()] = `${v}px`;
      return acc;
    }, {} as { [key: string]: string });

    return {
      theme: {
        extend: {
          fontSize: {
            ...headings_px,
          },
        },
      },
    };
  }
);

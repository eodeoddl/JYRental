const pargraphPlugin = require('tailwindcss/plugin');

module.exports = pargraphPlugin.withOptions(
  () =>
    ({ theme, addUtilities }) => {
      const paragraphUtillities: { [key: string]: object } = {};

      const paragraph_style: { [key: string]: object } = {
        lg: {
          fontSize: theme('fontSize.20'),
          fontWeight: theme('fontWeight.normal'),
        },
        md: {
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.normal'),
        },
        sm: {
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.normal'),
        },
      };

      Object.keys(paragraph_style).forEach(
        (key) =>
          (paragraphUtillities[`.paragraph-${key}`] = paragraph_style[key])
      );

      addUtilities(paragraphUtillities);
    },
  () => {
    const paragraph_px = [20, 16, 14].reduce((acc, v) => {
      acc[v.toString()] = `${v}px`;
      return acc;
    }, {} as { [key: string]: string });

    return {
      theme: {
        extend: {
          fontSize: { ...paragraph_px },
        },
      },
    };
  }
);

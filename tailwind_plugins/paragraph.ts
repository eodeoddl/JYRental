import { ObjectKeyTypes } from '@/utils/types/type';
import { ScreenSizes } from './types';

const pargraphPlugin = require('tailwindcss/plugin');

type CssStyle_P = {
  readonly [K in ScreenSizes]?: object;
};

type utillityKeys_P = `.paragraph-${ScreenSizes}`;

module.exports = pargraphPlugin.withOptions(
  () =>
    // i don't know what exactly types of destructuring properties
    ({ theme, addUtilities }: any) => {
      const paragraph_style: CssStyle_P = {
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

      const paragraphUtillities: {
        [K in utillityKeys_P]?: object;
      } = {};

      (
        Object.keys(paragraph_style) as ObjectKeyTypes<typeof paragraph_style>
      ).forEach(
        (size) =>
          size &&
          (paragraphUtillities[`.paragraph-${size}`] = paragraph_style[size])
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

/** @type {import('tailwindcss').Config} */

import { EntrieTypes, ObjectKeyTypes } from "@/types/common";

const headingsPlugin = require("tailwindcss/plugin");

type Headings = "h1" | "h2" | "h3" | "h4" | "h5";
type Sizes_H = "sm" | "lg";

type CssStyle_H = {
  readonly [H in Headings]: { readonly [S in Sizes_H]?: object };
};

type utillityKeys_H = `.${Headings}-${Sizes_H}`;

module.exports = headingsPlugin.withOptions(
  () =>
    // I don't know what exactly types of destructuring properties
    ({ addUtilities, theme }: any) => {
      const headings_style: CssStyle_H = {
        h1: {
          sm: {
            fontSize: theme("fontSize.40"),
            fontWeight: theme("fontWeight.bold"),
          },
          lg: {
            fontSize: theme("fontSize.64"),
            fontWeight: theme("fontWeight.bold"),
          },
        },
        h2: {
          sm: {
            fontSize: theme("fontSize.32"),
            fontWeight: theme("fontWeight.bold"),
          },
          lg: {
            fontSize: theme("fontSize.45"),
            fontWeight: theme("fontWeight.bold"),
          },
        },
        h3: {
          sm: {
            fontSize: theme("fontSize.28"),
            fontWeight: theme("fontWeight.bold"),
          },
          lg: {
            fontSize: theme("fontSize.32"),
            fontWeight: theme("fontWeight.bold"),
          },
        },
        h4: {
          sm: {
            fontSize: theme("fontSize.28"),
            fontWeight: theme("fontWeight.semibold"),
          },
          lg: {
            fontSize: theme("fontSize.28"),
            fontWeight: theme("fontWeight.semibold"),
          },
        },
        h5: {
          sm: {
            fontSize: theme("fontSize.20"),
            fontWeight: theme("fontWeight.semibold"),
          },
          lg: {
            fontSize: theme("fontSize.20"),
            fontWeight: theme("fontWeight.semibold"),
          },
        },
      };

      const headingUtiliities: { [K in utillityKeys_H]?: object } = {};

      (
        Object.entries(headings_style) as EntrieTypes<typeof headings_style>
      ).forEach(([type, sizes]) => {
        (Object.keys(sizes) as ObjectKeyTypes<typeof sizes>).forEach(size => {
          size &&
            (headingUtiliities[`.${type}-${size}`] = {
              ...headings_style[type][size],
            });
        });
      });

      addUtilities(headingUtiliities);
    },
  () => {
    const headings_px = [64, 45, 40, 32, 28, 20].reduce(
      (acc, v) => {
        acc[v.toString()] = `${v}px`;
        return acc;
      },
      {} as { [key: string]: string },
    );

    return {
      theme: {
        extend: {
          fontSize: {
            ...headings_px,
          },
        },
      },
    };
  },
);

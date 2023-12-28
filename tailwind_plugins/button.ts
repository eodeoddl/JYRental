// /** @type {import('tailwindcss').Config} */

const buttonPlugin = require('tailwindcss/plugin');

module.exports = buttonPlugin.withOptions(
  (
      options = {
        className: 'btn',
        style: {
          width: '209px',
          height: '63px',
          padding: '18px 60px',
          'border-radius': '30px',
          'font-size': '20px',
          position: 'relative',
        },
      }
    ) =>
    ({ theme, addComponents }) => {
      // const { animate } = options.hover;
      const defaultClass = options.className;
      const defaultStyle = {
        ...options.style,
        fontWeight: theme('fontWeight.bold'),
      };

      addComponents({
        [`.${defaultClass}`]: defaultStyle,
        [`.${defaultClass}-animate`]: {
          ...defaultStyle,
          zIndex: theme('zIndex.0'),
          overflow: 'hidden',

          '&:hover': {
            color: theme('colors.default.black'),
            'background-color': theme('colors.default.gray'),
          },
        },
        [`.${defaultClass}-before`]: {
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'inherit',
          height: '100%',
          transform: 'translateX(-100%)',
          zIndex: -theme('zIndex.10'),
          'border-radius': 'inherit',
          'background-color': theme('colors.btn.gray'),
        },
        [`.${defaultClass}-before-animate`]: {
          transition: 'transform 1s',
          transform: 'translate(0)',
        },
      });
    }
);

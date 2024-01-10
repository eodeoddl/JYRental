const buttonPlugin = require("tailwindcss/plugin");

type ButtonClass =
  | ".btn"
  | ".btn-animate"
  | ".btn-before"
  | ".btn-before-animate";

type Components_btn = {
  [K in ButtonClass]: object;
};

module.exports = buttonPlugin.withOptions(
  (
    options = {
      style: {
        width: "209px",
        height: "63px",
        padding: "18px 60px",
        "border-radius": "30px",
        "font-size": "20px",
      },
    },
  ) =>
    // I don't know what exactly types of destructuring properties
    ({ theme, addComponents }: any) => {
      const defaultStyle = {
        ...options.style,
        fontWeight: theme("fontWeight.bold"),
      };

      const btnClasses: Components_btn = {
        ".btn": defaultStyle,

        ".btn-animate": {
          ...defaultStyle,
          zIndex: theme("zIndex.0"),
          overflow: "hidden",
          position: "relative",

          "&:hover": {
            color: theme("colors.default.black"),
            "background-color": theme("colors.default.gray"),
          },
        },

        ".btn-before": {
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "inherit",
          height: "100%",
          transform: "translateX(-100%)",
          zIndex: -theme("zIndex.10"),
          "border-radius": "inherit",
        },

        ".btn-before-animate": {
          transition: "transform 1s",
          transform: "translate(0)",
        },
      };

      addComponents(btnClasses);
    },
);

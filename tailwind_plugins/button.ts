const buttonPlugin = require("tailwindcss/plugin");

type ButtonClass =
  | ".btn"
  | ".btn-animate"
  | ".btn-before"
  | ".btn-before-animate"
  | ".btn-burger";

type Components_btn = {
  [K in ButtonClass]: object;
};

module.exports = buttonPlugin.withOptions(
  (
    options = {
      style: {
        width: "fit-content",
        height: "40px",
        padding: "10px",
        "border-radius": "30px",
        "font-size": "16px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
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
            "background-color": theme("colors.btn.gray"),
          },
        },

        ".btn-before": {
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "translateX(-100%)",
          zIndex: -theme("zIndex.10"),
          "border-radius": "inherit",
        },

        ".btn-before-animate": {
          transition: "transform .3s",
          transform: "translate(0)",
        },

        ".btn-burger": {
          position: "relative",

          span: {
            position: "absolute",
            left: 0,
            width: "100%",
            height: "4px",
            "border-radius": "4px",
            "background-color": theme("colors.default.dark-gray"),
            transition: theme("transitionProperty.all"),
            "transition-duration": theme("transitionDuration.500"),
          },
        },
      };

      addComponents(btnClasses);
    },
);

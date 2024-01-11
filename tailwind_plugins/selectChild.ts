const selectChildPlugin = require("tailwindcss/plugin");

module.exports = selectChildPlugin.withOptions(
  () =>
    ({ matchVariant }: { matchVariant: any }) => {
      const values = Array(100).reduce((acc, _, index) => {
        const value = index + 1;
        acc[Number(value)] = value.toString();
        return acc;
      }, {});
      matchVariant("nth", (value: any) => `&:nth-child(${value})`, {
        values,
      });
    },
);

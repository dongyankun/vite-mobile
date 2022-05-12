module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport-8-plugin": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
      include: [/src/],
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 1338
    }
  }
};

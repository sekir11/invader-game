const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/js"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { modules: false }]],
            },
          },
        ],
      },
    ],
  },
};

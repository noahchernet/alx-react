const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
  },
  performance: {
    maxAssetSize: 999999999999,
    maxEntrypointSize: 999999999999,
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve("./dist"),
    },
    hot: true,
    port: 8564,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};

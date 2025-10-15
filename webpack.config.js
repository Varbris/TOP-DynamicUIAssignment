const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //common settings
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },

  //html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  //css module
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  //webserver dev
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
};

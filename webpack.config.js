const path = require("path");
const history = require("connect-history-api-fallback");
const convert = require("koa-connect");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  entry: [path.join(__dirname, "./src/index.tsx")],
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },
  serve: {
    port: 8000,
    hot: true,
    add: (app, middleware, options) => {
      const historyOptions = {};
      app.use(convert(history(historyOptions)));
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
      inject: "div"
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
};

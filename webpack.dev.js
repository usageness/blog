const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [new ForkTsCheckerWebpackPlugin()],
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    port: 3000,
    client: {
      logging: 'none',
    },
  },
});

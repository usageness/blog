const CompressionPlugin = require('compression-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
    ],
  },
});

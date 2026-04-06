const path = require('path');

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [64, 96, 128, 256, 384, 1080],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader',
          options: { sources: false },
        },
        {
          loader: path.resolve('./scripts/rewrite-img-src-loader.js'),
        },
        {
          loader: 'markdown-loader',
        },
      ],
    });
    return config;
  },
};

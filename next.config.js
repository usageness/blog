module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
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
          loader: 'markdown-loader',
        },
      ],
    });
    return config;
  },
};

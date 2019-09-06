const base = {
  hash: false,
  inject: true,
  title: 'React Webpack',
  template: './public/index.html',
  favicon: './src/assets/images/icon.png'
};

module.exports = {
  dev: base,
  prod: {
    ...base,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }
};

const base = {
  hash: true,
  inject: true,
  title: 'React Webpack',
  template: './src/index.html',
  favicon: './src/assets/images/icon.png'
};

module.exports = {
  dev: base,
  prod: {
    ...base,
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true
    }
  }
};

const autoprefixer = require('autoprefixer')
const fontMagician = require('postcss-font-magician')

module.exports = {
  plugins: [
    fontMagician({
      protocol: 'https:'
    }),
    autoprefixer
  ]
}

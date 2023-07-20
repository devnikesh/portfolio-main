const withNextra = require('nextra')(
  'nextra-theme-blog',
  './theme.config.js',
  './theme.js'
)
module.exports = withNextra()

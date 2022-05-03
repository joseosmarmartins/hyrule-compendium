const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    addWebpackAlias({
      '~assets': path.resolve(__dirname, './src/assets'),
      '~containers': path.resolve(__dirname, './src/containers'),
      '~routes': path.resolve(__dirname, './src/routes'),
    })
  ),
}

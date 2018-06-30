var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path')

module.exports = {

  configureWebpack: {

    // Merged into the final Webpack config
    plugins: [
       new CleanWebpackPlugin(['dist'])
     ]
  }
}

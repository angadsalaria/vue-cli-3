var path = require('path');
var webpack = require('./vue.webpack.config.js');


module.exports = {

  // Merged into the final Webpack config
  configureWebpack: webpack.config

}

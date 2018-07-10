var webpack = require('./vue.webpack.config.js')

module.exports = {
  // Merged into the final Webpack config
  configureWebpack: webpack.config,

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './static/index.html'
        return args
      })
  },

  pwa: {
    themeColor: '#63AED8'
  },

  devServer:{
    port: 8080,
    open: true
  }
}

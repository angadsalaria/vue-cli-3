var webpack = require('./vue.webpack.config.js')

module.exports = {

  // Merged into the final Webpack config
  configureWebpack: webpack.config,

  chainWebpack: config => {
    config
    .plugin('html-index')
    .tap(args => {

      console.log(args)

      /*if(args.length>0){
        args[0].template = './static/index.html'
      }*/

      return args
    })
  },

  pwa: {
    themeColor: '#63AED8'
  },

  devServer: {
    port: 8080,
    open: true
  },

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'static/index.html',
      filename: 'index.html'
    }
  }

}

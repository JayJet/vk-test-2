module.exports = {
  transpileDependencies: [
    'vuetify'
],

publicPath:'',

  productionSourceMap: false,

  css: {
      extract: {
          filename: 'capp.css',
          chunkFilename: 'capp.css',
      },
  },
  configureWebpack: {
      output: {
          filename: 'app.js'
      },
      optimization: {
          splitChunks: false
      },
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },

  filenameHashing: false,

}

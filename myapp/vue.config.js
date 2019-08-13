let path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-project' : '/',  
  outputDir: 'myassets', // 输出路径
  assetsDir: 'static', // 生成静态目录的文件夹
  runtimeCompiler: true, // 是否可以使用template模板
  parallel: require('os').cpus().length > 1, // 多于1核CPU时，使用并行压缩
  productionSourceMap: false, // 生成环境下 不使用sourceMap
  chainWebpack: config => {
    // 控制webpack内部配置
    config.resolve.alias.set('component', path.resolve(__dirname, 'src/components'))
  },
  configureWebpack: {
    // 新增插件
    plugins: []
  },
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        target: 'https://loacalhost:3000',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    https: false,
    host: 'localhost',
    port: 9999,
    proxy: {
      '/dev-api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  }
})

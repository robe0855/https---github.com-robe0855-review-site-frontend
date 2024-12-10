module.exports = {
  transpileDependencies: [
    // List any specific packages you need to transpile here, e.g., 'some-package-you-are-using'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  }
};

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

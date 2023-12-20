const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/common/reset.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    },
  }
}
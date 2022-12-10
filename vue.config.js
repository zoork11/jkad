const { defineConfig } = require('@vue/cli-service')
module.exports = {
pages: {
    home: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'home'
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}

module.exports = {
    outputDir: 'docs',

    publicPath: process.env.NODE_ENV === 'production'

        ? '/vue-app-2/'

        : '/'
}

module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

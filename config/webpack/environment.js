// RailsにWebpackerでVue.jsを入れたら行う設定
// https://qiita.com/kazutosato/items/c0e508f15b9a03f3dd6b
const { environment } = require('@rails/webpacker')

// bin/webpack-dev-serverビルド時にエラーが出る。
// vue-loader v15 から VueLoaderPlugin を読み込むようになったのでこの設定が必要になった。
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const vue =  require('./loaders/vue')
const aliasConfig = require('./alias')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

environment.config.merge(aliasConfig)
module.exports = environment

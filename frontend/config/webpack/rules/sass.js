const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => {
  return {
    test: /\.sass$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: env==="development" ? {hmr:true} : {}
      },
      {
        loader: 'css-loader',
        options: {
          url: false
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [require('autoprefixer')].concat(env==="production" ? [require('cssnano')] : [])
        }
      },
      'sass-loader'
    ]
  }
}
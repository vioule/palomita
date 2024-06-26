module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', {
          "targets": {
            "browsers": ["last 2 Chrome versions"] //ensure async await functionnality
          }
        }], 
        '@babel/preset-react']
    }
  }
}
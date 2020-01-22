const path                 = require('path');
const TerserPlugin         = require('terser-webpack-plugin');

module.exports = (env,argv) => {
  return {
    mode: env,
    devtool: env==='development' ? 'cheap-module-source-map' : '',
    optimization: env==='production' ? {minimizer: [new TerserPlugin()]} : {},
    context: path.resolve(__dirname, '../../src'),
    entry: require("./entry")(env, argv),
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../../public'),
      filename: 'js/[name].js'
    },
    plugins: require('./plugins')(env),
    module: require("./rules")(env)
  }
}
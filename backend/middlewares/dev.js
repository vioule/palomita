const webpack       = require("webpack");
module.exports = (app, argv) => {
  const webpackConfig = require(process.cwd()+"/webpack.config.js")(argv.env, argv);
  const compiler = webpack(webpackConfig);
  const devMiddleware = require('webpack-dev-middleware')(compiler,{publicPath: "/"});
  const hotMiddleware = require("webpack-hot-middleware")(compiler);
  app.use(devMiddleware);
  app.use(hotMiddleware);
}
module.exports = (env) => {
  return {
    index: [
      './js/react/web/components/app.js',
      './sass/main.sass'
    ].concat(
      env==='development' ? [
        'webpack-hot-middleware/client?reload=true',
        '../views/web/index.pug'
      ] : [] )
  }
};
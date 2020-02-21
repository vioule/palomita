module.exports = (env) => {
  return {
    index: (env==='development' ? [
        'webpack-hot-middleware/client?reload=true',
        '../views/web/index.pug'
    ] : []).concat([
      './js/react/web/index.js',
      './sass/main.sass'
    ])
  }
};
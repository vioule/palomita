module.exports = (env) => {
  return {
    backoffice: [
      './js/react/backoffice/index.js',
      './sass/backoffice.sass'
    ].concat(
      env==='development' ? [
        'webpack-hot-middleware/client?reload=true',
        '../views/backoffice/index.pug', 
      ] : [] )
  }
};
module.exports = (env) => {
  return {
    rules: [
      require('./js'),
      require('./sass')(env)
    ].concat(env==="development"?require('./pug'):[])
  }
}
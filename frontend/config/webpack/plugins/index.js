module.exports = (env) => {
  return [
    require('./css')
  ].concat(
    env==='development'?require('./hot'):require('./clean')
  )
}
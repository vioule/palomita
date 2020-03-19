module.exports = function(app) {
  app.use('/administration',require('./backoffice')),
  app.use('/api',require('./api')),
  app.use('/imgPS',require('./imgPS')),
  app.use(require('./web'))
}
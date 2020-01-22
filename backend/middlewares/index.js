module.exports = (app, argv, db) => {
  require('./init')(app, argv);
  require('./auth')(app, db);
  if(argv.env==="development") {
    require('./dev')(app, argv)
  };
}
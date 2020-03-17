module.exports = (app, argv, db) => {
  require('./init')(app, argv);
  require('./auth')(app, db, argv);
  if(argv.env==="development") {
    require('./dev')(app, argv)
  };
}
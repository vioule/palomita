module.exports = (env, argv) => {
  if(argv.module=="web") {
    return require('./web')(env)
  };
  if(argv.module=="backoffice") {
    return require('./backoffice')(env)
  };
  if(argv.module=="app") {
    return Object.assign(
      require('./web')(env), 
      require('./backoffice')(env)
    );
  }
}
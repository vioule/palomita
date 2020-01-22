const express = require('express');
module.exports = function(app, argv) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(process.cwd()+"/frontend/static"));
  if(argv.env==="production") {
    app.use(express.static(process.cwd()+"/frontend/assets")); //ensure hmr works fine in dev
  }
  app.set('views', process.cwd()+"/frontend/views");
  app.set('view engine', 'pug');
}
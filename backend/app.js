const express       = require("express");
const app           = express();
const argv          = require('minimist')(process.argv.slice(2));
const mongoose      = require("mongoose");
require('dotenv').config()

const uri = argv.env === 'production' ? process.env.DATABASE_URI_PROD : process.env.DATABASE_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, con)=>{
  if (err) { console.log("Impossible de se connecter à la base de donnée : " + err)}
  require('./middlewares')(app, argv, con.db);
  require('./routes')(app);
  app.listen(8080, ()=>console.log("L'application est en écoute sur le port 8080"));
});
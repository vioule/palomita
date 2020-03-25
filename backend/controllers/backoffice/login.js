exports.authenticationControl = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

exports.checkAuthentication = function(req, res) {
  res.send({
    user: req.user,
    isAuthenticated: req.isAuthenticated()
  });
};

exports.login = (req,res) => {
  res.status(200).send({user: req.user})
};

exports.logout = (req,res) => {
  req.logout();
  res.sendStatus(200);
};
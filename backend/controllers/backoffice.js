exports.index = (req,res) => {
  res.render('backoffice/index',
  {csrfToken: req.csrfToken()})
}

exports.checkAuthentication = function(req, res) {
  res.send({payload: req.isAuthenticated()});
};

exports.login = (req,res) => {
  res.status(200).send({user: req.user})
}

exports.logout = (req,res) => {
  req.logout();
  res.sendStatus(200);
}
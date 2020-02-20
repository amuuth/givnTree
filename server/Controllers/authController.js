// add cookie
const addCookie = (req, res, next) => {
  res.cookie('token', 'admin', {httpOnly: true})
  return next();
}

// verifying cookie
const verifyCookie = (req, res, next) => {
  if (req.cookies.token === 'admin'){
      return next();
  }
  return res.status(403).send('Invalid Deletion Request');
}

module.exports = {
  addCookie,
  verifyCookie
};
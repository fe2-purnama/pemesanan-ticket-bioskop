const ensureAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'ADMIN') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Admins only' });
  }
};

module.exports = ensureAdmin;

const bcrypt = require('bcrypt');
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('./auth.repository');
dotenv.config();
const secretKey = process.env.JWT_SECRET;

const authenticateUser = async (email, password) => {
    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error('User tidak ditemukan');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Password salah');
    }   

    const token = jwt.sign({ userId: user.user_id, email: user.email, role: user.role }, secretKey, { expiresIn: '2h' });

    return { token, user };
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    console.error("No Authorization header");
    return res.status(403).json({ message: 'Authorization header is required' });
  }

  const token = authHeader.split(' ')[1];
  console.log("Token received:", token);

  if (!token) {
    console.error("No token provided");
    return res.status(403).json({ message: 'Token is required' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("Invalid token:", err);
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    console.log("Token decoded:", decoded);
    next();
  });
};

const ensureAdmin = (req, res, next) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};

module.exports = {
    authenticateUser,
    verifyToken,
    ensureAdmin
};

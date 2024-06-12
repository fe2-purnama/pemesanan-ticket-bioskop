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

    const token = jwt.sign({ userId: user.user_id, email: user.email }, secretKey, { expiresIn: '2h' });

    return { token, user };
};

module.exports = {
    authenticateUser
};
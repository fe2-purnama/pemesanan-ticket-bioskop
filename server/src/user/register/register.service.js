const bcrypt = require('bcrypt');
const { findUserByEmail, createUser } = require('./register.repository');
const saltRounds = 10;

const registerUser = async (name, email, password, phone) => {
    if (password.length < 6) {
        throw new Error('Kata sandi minimal harus 6 karakter');
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error('Email sudah terdaftar');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await createUser({
        name: name,
        email: email,
        password: hashedPassword,
        phone: phone,
    });

    return newUser;
};

module.exports = {
    registerUser
};
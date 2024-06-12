// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Register Handle
router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.send('Passwords do not match');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    User.createUser(username, email, hashedPassword, (err, result) => {
        if (err) {
            return res.send('Error registering user');
        }
        res.redirect('/auth/login');
    });
});

// Login Handle
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findUserByEmail(email, async (err, user) => {
        if (err || !user || !await bcrypt.compare(password, user.password)) {
            return res.send('Invalid credentials');
        }
        req.session.userId = user.id;
        res.redirect(`/user/account/${user.id}`);
    });
});

// Register Page
router.get('/register', (req, res) => {
    res.render('register');
});

// Login Page
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;

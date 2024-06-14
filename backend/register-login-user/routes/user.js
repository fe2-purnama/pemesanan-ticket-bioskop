// routes/user.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Middleware to check if user is logged in
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/auth/login');
}

// User Account Page
router.get('/account/:id', isAuthenticated, (req, res) => {
    User.findUserById(req.params.id, (err, user) => {
        if (err || !user) {
            return res.send('User not found');
        }
        res.render('account', { user });
    });
});

// Update Account Details
router.post('/account/:id', isAuthenticated, async (req, res) => {
    const { password, paymentDetails } = req.body;
    const updates = {};
    if (password) {
        updates.password = await bcrypt.hash(password, 10);
    }
    if (paymentDetails) {
        updates.paymentDetails = paymentDetails;
    }
    User.updateUser(req.params.id, updates, (err, result) => {
        if (err) {
            return res.send('Error updating user');
        }
        res.redirect(`/user/account/${req.params.id}`);
    });
});

module.exports = router;

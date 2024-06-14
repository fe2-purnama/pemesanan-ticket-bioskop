const express = require("express");
const router = express.Router();
const { authenticateUser, verifyToken, ensureAdmin } = require('./auth.service');

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const { token, user } = await authenticateUser(email, password);
        res.json({ message: 'Login successful', token, user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/verify-admin", verifyToken, ensureAdmin, (req, res) => {
    res.status(200).json({ message: 'Authorized' });
});

module.exports = router;

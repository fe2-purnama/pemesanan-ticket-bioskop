const express = require("express");
const router = express.Router();
const { authenticateUser } = require('./auth.service');

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const { token, user } = await authenticateUser(email, password);
        res.json({ message: 'Login successful', token, user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
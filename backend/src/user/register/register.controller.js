const express = require("express");
const router = express.Router();
const { registerUser } = require('./register.service');

router.post("/", async (req, res) => {
    const { name, email, password, phone, confirmPassword } = req.body;

    try {
        const newUser = await registerUser(name, email, password, phone, confirmPassword);
        res.json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

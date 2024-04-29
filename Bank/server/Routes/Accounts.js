// routes/accounts.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Model/User');
const { Mongoose } = require('mongoose');
const ConnectDB = require('../DB');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        await ConnectDB("Register")
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            password: hashedPassword
        });
        const newUser = await user.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        await ConnectDB("Register")
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

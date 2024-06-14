// app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// Static files
app.use(express.static('public'));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the User Account App!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

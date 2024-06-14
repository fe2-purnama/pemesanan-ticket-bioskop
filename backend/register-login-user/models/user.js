
const db = require('../db');

exports.createUser = (username, email, password, callback) => {
    const sql = 'INSERT INTO User (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

exports.findUserByEmail = (email, callback) => {
    const sql = 'SELECT * FROM User WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0]);
    });
};

exports.findUserById = (id, callback) => {
    const sql = 'SELECT * FROM User WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0]);
    });
};

exports.updateUser = (id, updates, callback) => {
    const sql = 'UPDATE User SET ? WHERE id = ?';
    db.query(sql, [updates, id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

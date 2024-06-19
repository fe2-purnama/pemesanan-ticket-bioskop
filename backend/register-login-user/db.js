// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'educalab.id',
    user: 'Z4iC4YbFydrLLuhf',
    password: 'Yiralt1gifhO4DsI',
    database: 'dDtlDrYwcMJcymx9',
    port : 3307
});

db.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected to MySQL as id ' + db.threadId);
});

module.exports = db;

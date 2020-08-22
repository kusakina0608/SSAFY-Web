const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'hejin',
    password: 'hejinchang1!',
    database: "test_for_mysql2",
    waitConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = {pool}
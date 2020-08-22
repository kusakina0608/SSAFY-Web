const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
console.log("DB 아이디: ", process.env.ID);
console.log("DB 비밀번호 ", process.env.PASSWORD);
const pool = mysql.createPool({
    host: "localhost",
    user: process.env.ID,
    password: process.env.PASSWORD,
    database: "todo_list",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
module.exports = { pool }
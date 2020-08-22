const express = require("express");
const axios = require("axios");
const app = express();
const {pool} = require("./db");
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", async (req, res) => {
    const data = await pool.query("select * from user;");
    // const data = await pool.query("insert into user set ?", {name: "hello"})
    console.log(data);
    return res.json({hello: "get hello"});
});

app.post("/", async (req, res) => {
    try {
        const data = await pool.query("insert into user set ?", {name: "hello"})
    }catch(err){
        console.log(err);
    }
    return res.json({hello: "post hello"});
})

app.listen(8000, () => console.log("8000포트다냥"));
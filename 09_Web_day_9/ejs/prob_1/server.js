const express = require("express");
const { urlencoded } = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index", {arr: {data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}});
})
app.listen(8000, () => console.log("서버가 8000포트에서 실행 중"));
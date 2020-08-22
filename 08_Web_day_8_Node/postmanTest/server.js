const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

app.get("/:id", (req, res) => {
    console.log("query: \t", req.query);
    console.log("body: \t", req.body);
    console.log("param: \t", req.params);
    return res.json({hello: "get hello"});
})
app.post("/", (req, res) => {
    console.log("query: \t", req.query);
    console.log("body: \t", req.body);
    console.log("param: \t", req.params);
    return res.json({hello: "post hello"});
})
app.put("/", (req, res) => {
    console.log("query: \t", req.query);
    console.log("body: \t", req.body);
    console.log("param: \t", req.params);
    return res.json({hello: "put hello"});
})
app.patch("/", (req, res) => {
    console.log("query: \t", req.query);
    console.log("body: \t", req.body);
    console.log("param: \t", req.params);
    return res.json({hello: "patch hello"});
})
app.delete("/", (req, res) => {
    console.log("query: \t", req.query);
    console.log("body: \t", req.body);
    console.log("param: \t", req.param);
    return res.json({hello: "delete hello"});
})
app.listen(8000, () => console.log("8000 포트 서버 실행중"));
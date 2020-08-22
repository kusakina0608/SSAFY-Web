const express = require("express");
const app = express();

// 요청에 대한 정보를 콘솔에 기록
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extends: false}));

const a = 30;
const b = 15;

app.use((req, res, next) => {
    req.a = a;
    next();
});

const bMiddleware = (req, res, next) => {
    req.b = 15;
    next();
}

app.get("/", (req, res) => {
    console.log(process.env.NAME);
    console.log(__dirname);
    console.log(__filename);
    let val = Number(req.a);
    console.log(val);
    return res.json({a: val});
})

app.get("/add", (req, res) => {
    let val = Number(req.a);
    console.log(val + val);
    return res.json({a: val + val});
})

app.get("/sub", (req, res) => {
    let val = Number(req.a);
    console.log(val - 1);
    return res.json({a: val-1});
})

app.get("/multi", (req, res) => {
    let val = Number(req.a);
    console.log(val * val);
    return res.json({a: val*val});
})

app.get("/other", bMiddleware, (req, res) => {
    let val1 = Number(req.a);
    let val2 = Number(req.b);
    console.log(val1 + val2);
    return res.json({a: val1 + val2});
})

app.listen(80, () => console.log("80 포트 서버 실행중"));
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("동작합니다.");
    next();
});

const textMiddleware = (req, res, next) =>{
    console.log("특정 부분에서만 동작합니다.");
    req.abc = "abc입니다";
    next();
}

app.use(express.json()); // json 형식으로 데이터를 전달할 수 있음
app.use(express.urlencoded({extended: false})); // post, put 등 방식에서 데이터를 받기 위해 사용

app.get("/", (req, res) => {
    // return res.send("Hello express");
    return res.json({hello: "hello"});
});

app.get("/hello", textMiddleware, (req, res, next) => {
    console.log(req.abc);
    return res.json({hello: "hello1"});
})

app.listen(80, () => console.log("80 포트 서버 실행중"));
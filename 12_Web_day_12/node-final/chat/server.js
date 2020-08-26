const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/views`));

app.get("/", (req, res) => {
    res.render("chat");
});

// io.on("connection", (socket) => {
//     console.log("연결되었습니다");
//     socket.on("chat message", msg => {
//         console.log(msg);
//         io.emit("chat message", msg);
//     })
// });


// 금지어
const blackList = ["섹스", "스엑스", "스섹", "세엑스", "색스", "스액스", "sex", "seX", "sEx", "Sex", "sEX", "SeX", "SEx", "SEX"];
const firstName = [
    "가냘픈", "가엾은", "거친", "게으른", "고운", "귀여운", "기쁜", "깨끗한", "나쁜", "날카로운", "너그러운", "느린", "동그란", "딱한", "뜨거운", "멋진", "메마른", "못난", "못된", "못생긴", "무서운", "무거운", "미끈미끈한", "미운", "밝은", "반가운", "붉은", "비싼", "빠른", "빨간", "뽀얀", "새로운", "성가신", "센", "수다스러운", "수줍은", "슬픈", "쌀쌀맞은", "아름다운", "아픈", "안쓰러운", "약은", "어두운", "어린", " 언짢은", "예쁜", "외로운", "우스운", "작은", "잘난", "잘생긴", "재미있는", "젊은", "조그만", "즐거운", "지혜로운", "한결같은"
] // 57개
// namespace 활용
const chatRoom = io.of("/chat-room");
chatRoom.on('connection', (socket) => {
    console.log("연결되었습니다");
    socket.on("chat message", msg => {
        console.log(msg);
        if(blackList.includes(msg)){
            return;
        }
        let tmp = msg.split("|FIRST_NAME_IDX");
        let idx = Number(tmp[0]);
        tmp = tmp[1].split("|USER_NAME");
        let name = tmp[0];
        let message = tmp[1];
        chatRoom.emit("chat message", `[${firstName[idx]} ${name}]: ${message}`);
    })
})

// io.on("disconnect", () => console.log("연결이 해제되었습니다"));

http.listen(80, () => console.log("Connect at 9000"));
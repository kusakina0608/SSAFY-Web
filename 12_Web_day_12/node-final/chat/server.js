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

// namespace 활용
const chatRoom = io.of("/chat-room");
chatRoom.on('connection', (socket) => {
    console.log("연결되었습니다");
    socket.on("chat message", msg => {
        console.log(msg);
        if(blackList.includes(msg)){
            return;
        }
        chatRoom.emit("chat message", msg);
    })
})

// io.on("disconnect", () => console.log("연결이 해제되었습니다"));

http.listen(80, () => console.log("Connect at 9000"));
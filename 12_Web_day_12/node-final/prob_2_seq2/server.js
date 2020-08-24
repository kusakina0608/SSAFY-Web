const express = require("express");
const morgan = require("morgan");
const {sequelize, Member} = require("./models");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

sequelize.sync({force: false})
.then(() => console.log("db 접속 성공"))
.catch((err) => console.log(err));


app.get("/", (req, res) => {
    return res.render("index");
});

app.get("/edit", (req, res) => {
    console.log("여기는 정보수정페이지")
    return res.render("login");
})

app.get("/addMember", (req, res) => {
    console.log("여기는 회원가입페이지")
    return res.render("login");
})

// app.get("/", async (req, res, next) => {
//     try{
//         const data = await Member.findAll();
//         return res.json({data: data});
//     }catch(error){
//         console.log(error);
//     }
// });

app.post("/", async (req, res) => {
    try{ // 
        const createData = await Member.create({
            name: "이대진",
            email: "platina.kusakina@gmail.com",
            address: "인천광역시 부평구 길주남로 144",
            phone: "010-9700-5706",
            agree: true
        })
        return res.json({createData: createData});
    }catch(error){
        console.log(error);
    }
})

app.patch("/", async (req, res) => {
    try{
        const updateData = await Member.update({
            email: "cattleya9700@gmail.com"
        }, {
            where: {email: "platina.kusakina@gmail.com"}
        });
        return res.json({updateData: updateData});
    }catch(error){
        console.log(error);
    }
})

app.delete("/", async (req, res) => {
    try{
        const deleteData = await Member.destroy({
            where: {
                email: "cattleya9700@gmail.com"
            }
        });
        return res.json({deleteData: deleteData});
    }catch(error){
        console.log(error);
    }
})

app.listen(8000, () => console.log("서버 실행!!"));
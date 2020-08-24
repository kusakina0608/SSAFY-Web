const express = require("express");
const morgan = require("morgan");
const app = express();

const {sequelize, User} = require("./models");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

// true 일 때는 호출될 때마다 테이블이 새로 생성된다.
sequelize.sync({force: false})
.then(() => console.log("db 접속 성공"))
.catch((err) => console.log(err));

app.get("/", async (req, res, next) => {
    try{
        const data = await User.findAll({});
        return res.json({data: data});
    }catch(error){
        console.log(error);
    }
})

app.post("/", async (req, res) => {
    // 데이터를 넣어준다.
    const createData = await User.create({
        name: "유혜린",
        age: 26
    })
    return res.json({createData: createData});
})

app.patch("/", async (req, res) => {
    try{
        const updateData = await User.update({
            name: "찌냐미"
        }, {
            where: {name: "유혜린"}
        });
        // 성공시 1을 반환하고, 실패시 0을 반환한다.
        return res.json({updateData: updateData});
    }catch(error){
        console.log(error);
    }
})

app.delete("/", async (req, res) => {
    try{
        const deleteData = await User.destroy({
            where: {
                name: "찌냐미"
            }
        });
        // 성공시 1을 반환하고, 실패시 0을 반환한다.
        return res.json({deleteData: deleteData});
    }catch(error){
        console.log(error);
    }
})

app.listen(8000, () => console.log("8000 포트 운영중"));
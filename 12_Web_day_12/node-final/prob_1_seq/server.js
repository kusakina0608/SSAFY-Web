const express = require("express");
const morgan = require("morgan");
const { sequelize, OrderList } = require("./models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

// true 일 때는 호출될 때마다 테이블이 새로 생성된다.
sequelize.sync({force: false})
.then(() => console.log("db 접속 성공"))
.catch((err) => console.log(err));

app.get("/", async (req, res, next) => {
    try{
        const data = await OrderList.findAll({
            attributes:['name'], 
            order: [['name', 'DESC']],
            where: {name: "BBQ"}
        });
        // Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하), Op.ne(같지 않음)
        // Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열 요소가 모두 다름)
        return res.json({data: data});
    }catch(error){
        console.log(error);
    }
})

app.post("/", async (req, res) => {
    try{ // 데이터를 넣어준다.
        const createData = await OrderList.create({
            name: "BBQ2",
            type: "치킨"
        })
        return res.json({createData: createData});
    }catch(error){
        console.log(error);
    }
})

app.patch("/", async (req, res) => {
    try{
        const updateData = await OrderList.update({
            name: "MOMS",
            type: "유사치킨"
        }, {
            where: {name: "BBQ"}
        });
        // 성공시 1을 반환하고, 실패시 0을 반환한다.
        return res.json({updateData: updateData});
    }catch(error){
        console.log(error);
    }
})

app.delete("/", async (req, res) => {
    try{
        const deleteData = await OrderList.destroy({
            where: {
                name: "MOMS"
            }
        });
        // 성공시 1을 반환하고, 실패시 0을 반환한다.
        return res.json({deleteData: deleteData});
    }catch(error){
        console.log(error);
    }
})

app.listen(8000, () => console.log("서버 실행!!"));
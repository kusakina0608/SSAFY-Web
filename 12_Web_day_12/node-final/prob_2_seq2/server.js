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


app.get("/", async (req, res) => {
    try {
        const data = await Member.findAll();
        return res.render("index", {data: data});
    }catch(error){
        console.log(error);
    }
});

app.post("/addMember", async (req, res) => {
    try{
        const {name, email1, email2, address, phone1, phone2, phone3, info} = req.body;
        const createData = await Member.create({
            name: name,
            email: email1 + email2,
            address: address,
            phone: phone1 + '-' + phone2 + '-' + phone3,
            agree: info===''
        })
        return res.redirect("/");
    }catch(error){
        console.log(error);
    }
});

app.get("/edit/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const data = await Member.findOne({
            where: {id: id}
        });
        console.log("===========================================================");
        console.log(data);
        return res.render("edit", {data: data});
    }catch(error){
        console.log(error);
    }
});

app.post("/edit/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const {name, email1, email2, address, phone1, phone2, phone3, info} = req.body;
        const updateData = await Member.update({
            name: name,
            email: email1 + email2,
            address: address,
            phone: phone1 + '-' + phone2 + '-' + phone3,
            agree: info===''
        }, {
            where: {id: id}
        });
        return res.redirect("/");
    }catch(error){
        console.log(error);
    }
});

app.get("/delete/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const deleteData = await Member.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/");
    }catch(error){
        console.log(error);
    }
        
});

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
});

app.listen(80, () => console.log("서버 실행!!"));
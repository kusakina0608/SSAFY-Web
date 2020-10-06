const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 8000;
const {sequelize, User, Post} = require("./models");
const {hashPassword, comparePassword} = require("./utils/bcrypt.js");
const { response } = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
    cors({
        origin: true,
        credentials: true
    })
)
sequelize.sync({force: false})
.then(() => console.log("db 접속 성공"))
.catch(err => console.log(err));

const upload = multer({
    storage: multer.diskStorage({
        // 폴더 위치 지정
        destination: (req, file, done) =>{
            done(null, "uploads/");
        },
        // 파일 이름 지정
        filename: (req, file, done) => {
            const ext = path.extname(file.originalname);
            const fileName = path.basename(file.originalname, ext) + "&&" + Date.now() + ext;
            done(null, fileName);
            req.fileDir = fileName;
        }
    }),
    limits: {fileSize: 100*1024*1024},
});

app.get("/api/user", (req, res) => {

});

app.post("/api/user", async (req, res) => {
    // 회원가입 부분
    try{
        const {email, password, name} = req.body;
        if(email && password && name){
            const hashedPassword = await hashPassword(password);
            const data = await User.create({
                email: email,
                password: hashedPassword,
                name: name
            });
            console.log("[ 회원가입 성공 ] ", email);
            return res.json({signUp: true});
        }else{
            throw new Error();
        }
    }catch (error){
        console.log("[ 회원가입 실패 ]", error);
        return res.json({signUp: false});
    }
});

app.post("/api/login", async (req, res) => {
    try {
        // console.log(req.body)
        const {email, password} = req.body;
        const userData = await User.findOne({
            attributes: ["id", "password", "name"],
            where: {
                email: email
            }
        });
        console.log("[ 로그인 ] 사용자 조회 성공 - ", email);
        const hashedPassword = userData.dataValues.password;
        const passResult = await comparePassword(password, hashedPassword);
        if(passResult){
            console.log("[ 로그인 성공 ] ", email);
            return res.json({login:true, id: userData.dataValues.id, name: userData.dataValues.name});
        }else{
            throw new Error();
        }
    }catch(error){
        console.log("[ 로그인 실패 ] ", error);
        return res.json({login: false});
    }
});

// 게시글 리스트
app.get("/api/post", async (req, res) => {
    try{
        const postData = await Post.findAll({
            attributes: ["id", "title", "content", "file", "user_id", [sequelize.fn('date_format', sequelize.col('created_at'), '%Y-%m-%d %H:%i'), 'date_col_formed']],
        });
        console.log("[ 글 조회 ] ", postData);
        return res.json(postData);
    }catch(err){
        console.log(error);
    }
});

// 게시글 작성
app.post("/api/post", upload.single("file"), async (req, res) => {
    try{
        console.log(req.body);
        const {title, content, userId} = req.body;
        console.log("파일경로: ", req.fileDir);
        console.log(title, content, userId);
        const post = await Post.create({
            title: title,
            content: content,
            file: req.fileDir,
            user_id: userId
        });
        console.log(post);
        return res.json({upload: true});
    } catch(err){
        console.log(err);
        return res.json({upload: false});
    }
});

app.listen(PORT, () => console.log(`This server listening on ${PORT}`));
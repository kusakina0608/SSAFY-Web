const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) =>{
            done(null, "uploads/");
        },
        filename: (req, file, done) => {
            console.log(file);
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize: 15*1024*1024}
});

app.get("/", (req, res) => {
    return res.render("index");
});

app.get("/multi", (req, res) => {
    return res.render("multi");
});

app.get("/multi2", (req, res) => {
    return res.render("multi2");
});

app.post("/upload", upload.single("userfile"), (req, res) => {
    console.log("hi")
    console.log(req.file);
    return res.json({data: req.file});
});

app.post("/upload-multiple-fields", upload.fields([{name: "userfile1"}, {name: "userfile2"}, {name: "userfile3"}]),(req, res) => {
    console.log("hihi")
    console.log(req.files);
    return res.json({data: req.files});
});

app.post("/upload-multiple", upload.array("userfiles"), (req, res) => {
    console.log("hihihi")
    console.log(req.files);
    return res.json({data: req.files});
});

app.listen(80, () => console.log("서버 실행중"));
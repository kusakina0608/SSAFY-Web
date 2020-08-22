const express = require("express");
const axios = require("axios");
const { render } = require("ejs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/views`));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try{
        const page = Number(req.query.page);
        const {data} = await axios.get(
            "https://jsonplaceholder.typicode.com/albums", {
                params: {
                    _start: page?9*(page-1):0,
                    _limit: 9
                }
            }
        );
        res.render("albums", {data: data, page: page? page : 1});
    }catch(err){
        console.log(err);
        res.render("error");
    }
})

app.get("/photos/:id", async (req, res) => {
    try{
        const page = Number(req.query.page);
        const id = Number(req.params.id);
        const {data} = await axios.get(
            `https://jsonplaceholder.typicode.com/albums/${id}/photos`, {
                params: {
                    _start: page?8*(page-1):0,
                    _limit: 8
                }
            }
        );
        console.log(data);
        res.render("photos", {data: data, page: page? page : 1, albumId: id});
    }catch(err){
        console.log(err);
        res.render("error");
    }
})

// 에러 처리는 맨 마지막에 와야 한다.
app.get("*", (req, res) => {
    res.render("error");
});

app.listen(8000, () => console.log("난 서버야"));
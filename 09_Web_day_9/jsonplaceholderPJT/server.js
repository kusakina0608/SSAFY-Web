const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/views`));

app.get("/", async (req, res) => {
    try{
        const page = Number(req.query.page);
        console.log("page: ", page);
        const {data} = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",{
                params:{
                    _start: page?9*(page-1):0,
                    _limit: 9
                }
            }
        );
        res.render("index", {data: data, page: page? page : 1});
    }catch(err){
        console.log(err);
        res.render("error");
    }
});

app.get("/detail/:id", async (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const urls = [
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    ];
    // Promise.all
    // 배열을 대상으로 Promise.all을 사용하여 비동기 요청을 수행할 경우
    // 비구조화 할당을 아래처럼 수행한다.
    // 하지만 Promise.all은 한번에 요청을 보내기 때문에 응답의 순서가 보장되지 않는다.
    const [post, comments] = await Promise.all(
        urls.map(url => {
            return axios.get(url)
            .then(res => res.data)
            .catch(err => console.log(err));
        })
    );
    return res.render("detail", {
        post: post,
        comments: comments
    });
});


// 에러 처리는 맨 마지막에 와야 한다.
app.get("*", (req, res) => {
    res.render("error");
});

app.listen(PORT, () => console.log("이제 어디서 실행대는지 알지?"));

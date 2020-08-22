const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log("\n[", req.method, "]");
    console.log("URL: \t\t", req.url);
    console.log("query: \t\t", req.query);
    console.log("body: \t\t", req.body);
    console.log("params: \t", req.params);
    next();
})

// GET
app.get("/user/", (req, res) => res.json({getid: false}));
app.get("/user/:id", (req, res) => {
    if (req.params.id && req.query.name) {
        const {id} = req.params;
        const {name} = req.query;
        return res.json({
            getid: true,
            id: id,
            name: name
        });
    }
    return res.json({getid: false});
});

// POST
app.post("/user/", (req, res) => {
    if(req.body.id && req.body.password){
        const {id, password} = req.body;
        return res.json({
            signup: true,
            id: id,
            password: password
        });
    }
    return res.json({signup: false});
});

// PATCH
app.patch("/user/", (req, res) => res.json({update: false}));
app.patch("/user/:id", (req, res) => {
    if(req.params.id && req.body.name){
        const {id} = req.params;
        const {name} = req.body;
        return res.json({
            update: true,
            id: id,
            name: name
        });
    }
    return res.json({update: false});
});

// DELETE
app.delete("/user/", (req, res) => res.json({delete: false}));
app.delete("/user/:id", (req, res) => {
    if(req.params.id){
        const {id} = req.params;
        return res.json({
            delete: true,
            id: id
        });
    }
    return res.json({delete: false});
});
app.listen(8000, console.log("서버가 8000번 포트에서 실행 중"));
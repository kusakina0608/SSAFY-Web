const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
    try{
        console.log(req.method);
        console.log(req.url);
        if(req.method === "GET"){
            if(req.url === "/"){
                const data = await fs.readFile("index.html");
                res.end(data);
            }
            else if(req.url === "/a"){
                const data = await fs.readFile("a.html");
                res.end(data);
            }
            else if(req.url === "/b"){
                const data = await fs.readFile("b.html");
                res.end(data);
            }
        }
    }catch(err){
        console.log(err);
    }
});

server.listen(80, () => console.log("80포트 실행중"));
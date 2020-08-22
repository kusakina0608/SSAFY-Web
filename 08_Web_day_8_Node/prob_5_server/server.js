const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
    try{
        console.log("[" + req.method + "] " + req.url);
        
        if(req.method === "GET"){
            if(req.url === "/"){
                const data = await fs.readFile("./index.html");
                res.end(data);
            }
            else if(req.url === "/signin"){
                const data = await fs.readFile("./login.html");
                res.end(data);
            }
            else if(req.url === "/signup"){
                const data = await fs.readFile("./signup.html");
                res.end(data);
            }
        }
    }
    catch(err){
        console.log(err);
    }
})

server.listen(80, () => console.log("80번 포트는 내꺼야"));
const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async(req, res) =>{
    try {
        const data = await fs.readFile("index.html");
        res.end(data);
    }catch(err){
        console.log(error);
        res.end(error.message);
    }
});

server.listen(80, (req, res) => {
    console.log("이 서버는 80번 포트를 통해서 실행되고 있어용");
});
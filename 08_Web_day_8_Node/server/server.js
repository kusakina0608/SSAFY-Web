const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, "text/html: charset=utf-8");
    res.write("<h1>Hello World!!!</h1>");
    res.end("<p>Hello Server!</p>")
});
server.listen(80, () => {
    console.log("this server listening on 80");
})
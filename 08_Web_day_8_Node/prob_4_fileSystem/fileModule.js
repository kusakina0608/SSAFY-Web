const fs = require("fs").promises;
fs.readFile("./nameList.txt").then(data => {
    const nameList = data.toString();
    module.exports = {
        nameList: data.toString()
    };
}).catch(err => {
    console.log(err);
})

// const fs = require("fs");
// fs.readFile("./content.txt", (err, data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// });
const fs = require("fs").promises;
fs.readFile("./content.txt").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
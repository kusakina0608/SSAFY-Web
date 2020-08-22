const {nameList} = require("./fileModule");
nameList.then(data => {
    console.log(data);
    console.log(data.toString());
})
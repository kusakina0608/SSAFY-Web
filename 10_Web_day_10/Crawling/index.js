const parse = require("csv-parse/lib/sync");
const fs = require("fs");

// 딱 한번만 실행될 때 Sync를 사용한다.
// 여러번 호출되거나 하는 문제에서는 Sync를 사용하지 않고 기존의 비동기나 Promise를 활용한다.

// const csv = fs.readFileSync("./csv/data-movie.csv");
// const records = parse(csv.toString());
// console.log(records);

const csv = fs.readFileSync("./csv/FL_insurance_sample.csv");
const records = parse(csv.toString());

function getIndex(str){
    for(let i=0; i<records[0].length; i++){
        if(records[0][i].toUpperCase() === str.toUpperCase()){
            return i;
        }
    }
    return -1;
}

const countyIdx = getIndex("county");
const constructionIdx = getIndex("construction");
console.log(countyIdx);
console.log(constructionIdx);

const results = records.filter(li => 
    li[countyIdx].toUpperCase() === "MIAMI DADE COUNTY".toUpperCase() && 
    li[constructionIdx].toUpperCase() === "wood".toUpperCase());
console.log(results[1]);
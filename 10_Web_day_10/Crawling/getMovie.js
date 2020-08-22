const parse = require("csv-parse/lib/sync");
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const csv = fs.readFileSync(`${__dirname}/csv/data-movie.csv`);
const records = parse(csv.toString());
// console.log(records);

const crawler = () => {
    Promise.all(records.map(async ([title, link]) => {
        title = title.trim();
        link = link.trim();
        const response = await axios.get(link);
        if(response.status === 200){
            const html = response.data;
            const $ = cheerio.load(html);
            // 별점 가져오기
            // document.querySelectorAll(".score.score_left .star_score");
            let text = $(".score.score_left .star_score").text().trim();
            if(text === "") text = "없음";
            // 등급 가져오기
            // document.querySelectorAll(".info_spec dd:nth-of-type(4)");
            let age = $(".info_spec dd:nth-of-type(4) a:first-of-type").text().trim();;
            console.log(title)
            console.log(link)
            console.log(text);
            console.log(age);
            console.log();
        }
    }));
}

crawler();
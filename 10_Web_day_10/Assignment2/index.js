const parse = require("csv-parse/lib/sync");
const puppeteer  = require("puppeteer");
const fs = require("fs");

const crawler = async (link) => {
    // 브라우저 실행
    const browser = await puppeteer.launch({headless: true, args: ["--window-size=1920,1080"]});

    // csv 파일로부터 페이지 링크 불러오기
    const csv = fs.readFileSync("./csv/menu.csv");
    const menuList = parse(csv.toString());
    let names = [];
    let links = [];
    let pdfIdx = -1; // 교촌 반반 시리즈의 인덱스를 저장하기 위한 변수
    let idx = 0;
    menuList.forEach( ([category, link]) => {
        category = category.trim();
        link = link.trim();
        names.push(category);
        links.push(link);
        if(category === '교촌 반반 시리즈'){
            pdfIdx = idx;
        }
        idx++;
    });
    console.log(names);
    console.log(links);
    
    let pages = await Promise.all(links.map( async (li) => await browser.newPage()));
    idx = 0; await Promise.all(pages.map(async (page) => await page.goto(links[idx++], {waitUntil: "networkidle2"})));
    idx = 0; await Promise.all(pages.map((page) => page.screenshot({path: `${__dirname}/screenshot/kyochon${idx++}.jpg`, fullPage: true})));
    await pages[pdfIdx].pdf({path: `${__dirname}/pdf/kyochon${pdfIdx}.pdf`, format: "A4"});
    idx = 0; await Promise.all(pages.map(async (page) => await page.close()));
    await browser.close();
}
crawler();
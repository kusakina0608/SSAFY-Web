const puppeteer  = require("puppeteer");
const fs = require("fs");

const crawler = async () => {
    const browser = await puppeteer.launch({headless: true});
    const [page1, page2, page3] = await Promise.all([
        browser.newPage(),
        browser.newPage(),
        browser.newPage()
    ])

    await Promise.all([
        page1.goto("https://www.naver.com"),
        page2.goto("https://www.google.com", {waitUntil: "networkidle2"}),
        page3.goto("https://www.daum.net", {waitUntil: "networkidle2"}),
    ])

    await Promise.all([
        page1.screenshot({path: `${__dirname}/screenshot/test1.jpg`, fullPage: true}),
        page2.screenshot({path: `${__dirname}/screenshot/test2.jpg`, fullPage: true}),
        page3.screenshot({path: `${__dirname}/screenshot/test3.jpg`, fullPage: true})
    ])
    console.log("스크린샷 다 찍었당");

    await Promise.all([
        page1.pdf({path: `${__dirname}/pdf/test1.pdf`, format: "A4"}),
        page2.pdf({path: `${__dirname}/pdf/test2.pdf`, format: "A4"}),
        page3.pdf({path: `${__dirname}/pdf/test3.pdf`, format: "A4"})
    ])
    console.log("PDF 다 땄당");

    await page3.waitFor(6000);
    // 피싱 사이트 따오는법
    const html = await page3.content();
    fs.writeFileSync("example.html", html);
    
    await Promise.all([
        page1.waitFor(1000),
        page2.waitFor(1000),
        page3.waitFor(1000)
    ])

    console.log("정상 동작중");

    // 페이지 종료
    await Promise.all([
        page1.close(),
        page2.close(),
        page3.close()
    ])

    // 브라우저 종료
    await browser.close();
}
crawler();
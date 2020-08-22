const puppeteer = require("puppeteer");

const crawler = async() => {
    try{
        const browser = await puppeteer.launch({headless: false, args: ["--window-size=1920,1080"]});
        const page = await browser.newPage();
        await page.setViewport({width: 1920, height: 1080})
        await page.goto("https://www.naver.com", {waitUntil: "networkidle2"});
        await page.evaluate(() => {
            document.querySelector("#query").value = "냉면";
            document.querySelector("#search_btn").click();
        });
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        await page.evaluate(() => {
            const link = document.querySelector(".kindic .info_area .tit_box a").href;
            location.href = link;
        });
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        await page.screenshot({path: `${__dirname}/screenshot/favfood.jpg`, fullPage: true});
        await page.close()
        await browser.close();
    }catch(err){
        console.log(err);
    }
}
crawler();
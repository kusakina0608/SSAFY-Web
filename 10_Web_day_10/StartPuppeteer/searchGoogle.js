const puppeteer = require("puppeteer");

const crawler = async() => {
    try{
        const browser = await puppeteer.launch({
            headless: false,
            args: ["--window-size=1920,1080"]
        });
        const page = await browser.newPage();
        page.setViewport({
            width: 1920,
            height: 1080
        })
        await page.goto("https://www.google.com");
        await page.evaluate(() => {
            // 이 안에서는 document 사용 가능
            console.log("hello world");
            document.querySelector("input.gsfi").value = "제니";
        });
        await page.keyboard.press("Enter");
        await page.waitFor(2000); // 페이지 로드 대기
        await page.evaluate(() => {
            document.querySelector("#rso .rc .r>a").click();
        })
    }catch(err){
        console.log(err);
    }
}
crawler();
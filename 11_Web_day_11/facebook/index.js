const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
dotenv.config();
const crawler = async () => {
    try{
        const browser = await puppeteer.launch({headless: false, args:['--window-size=1920, 1080', '--disable-notifications']});
        const page = await browser.newPage();
        page.setViewport({
            width: 1080,
            height: 1920
        });
        await page.goto("https://facebook.com");
        await page.waitFor(1234);
        // #email, #pass
        await page.type("#email", process.env.EMAIL);
        await page.waitFor(1674);
        await page.type("#pass", process.env.PASSWORD);
        await page.waitFor(1312);
        // // page.evaluate를 사용한 로그인
        // const email = process.env.EMAIL;
        // const password = process.env.PASSWORD;
        // await page.evaluate((id, password) => {
        //     document.querySelector("#email").value = id;
        //     document.querySelector("#pass").value = password;
        // }, email, password);

        // document.querySelector("button[type=submit]").click();
        await page.click("button[type=submit]");
        // await page.waitForRequest((req) => {
        //     if(req.url().includes('login')){
        //         return req.url().includes('login');
        //     }
        // });
        // await page.keyboard.press("Escape");
    }catch(err){
        console.log(err);
    }
}
crawler();
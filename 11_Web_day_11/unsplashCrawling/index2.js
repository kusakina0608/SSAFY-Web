const puppeteer = require("puppeteer");

const crawler = async () => {
    try{
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto("https://unsplash.com");
        let result = [];
        while(result.length <= 30) {
            let srcs = await page.evaluate(() => {
                window.scrollTo(0, 0);
                let images = [];
                const imageElements = document.querySelectorAll(".nDTlD");
                // img._2zEKz
                console.log(imageElements);
                if(imageElements){
                    imageElements.forEach(el => {
                        const image = el.querySelector("img._2zEKz");
                        if(image && image.src){
                            images.push(image.src);
                        }
                        el.parentElement.removeChild(el);
                    });
                    window.scrollBy(0, 100);
                    setTimeout(() => {
                        window.scrollBy(0, 200);
                    }, 500);
                    return images
                }
            });
            result = result.concat(srcs);
            await page.waitForSelector(".nDTlD img");
        }
        console.log(result);
    }catch(err){

    }
}
crawler();
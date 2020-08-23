const puppeteer = require("puppeteer");
const crawler = async () => {
    try{
        const browser = await puppeteer.launch({headless : false});
        const page = await browser.newPage();
        await page.goto("https://unsplash.com");
        let result = await page.evaluate(() => {
            const imageElements = document.querySelectorAll(".nDTlD img._2zEKz");
            // img._2zEKz
            console.log(imageElements);
            if(imageElements){
                let images = [];
                // querySelectorAll은 map, reduce, filter를 사용할 수 없다.
                // Array.from(imageElements)를 해주어야 사용할 수 있음
                imageElements.forEach(image => {
                    if(image.src){
                        images.push(image.src);
                    }
                    image.parentElement.removeChild(image);
                });
                return images;
            }
        })
        console.log(result);
    }catch(err){
        console.log(error);
    }
}
crawler();
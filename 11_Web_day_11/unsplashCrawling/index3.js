const puppeteer = require("puppeteer");
const axios = require("axios");
const fs = require("fs");

fs.readdir('images', (err) => {
    if(err){
        console.error("images 폴더를 새로 생성합니다.");
        fs.mkdirSync("images");
    }
});

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
        result.forEach( async (src) => {
            // src.replace(/\?.*$/,'') === src.split("?")[0]
            const {data} = await axios.get(src.replace(/\?.*$/,''), {
                responseType: 'arraybuffer'
            });
            console.log(data);
            fs.writeFileSync(`images/${new Date().valueOf()}.jpeg`, data);
        });
        await page.close();
        await browser.close();
    }catch(err){
        console.log(err);
    }
}
crawler();
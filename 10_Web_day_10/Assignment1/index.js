const axios = require("axios");
const cheerio = require("cheerio");

const crawler = async () => {
    const response = await axios.get("https://www.shakeshack.com/food-and-drink");
    if(response.status === 200){
        const html = response.data;
        const $ = cheerio.load(html);
        const lists = $(".menu-list li").toArray();
        // console.log(lists);
        var foods = [];
        for(let i=0; i<lists.length; i++){
            try{
                if(lists[i].children[3].children[2].children[0]){
                    let data = {};
                    data.menu = lists[i].children[1].children[0].data;
                    let tmp_cal = lists[i].children[3].children[2].children[0].data;
                    tmp_cal = tmp_cal.split('cal')[0].trim();
                    if(tmp_cal.indexOf(' ') !== -1){
                        tmp_cal = tmp_cal.split(' ');
                        tmp_cal = tmp_cal[tmp_cal.length-1];
                    }
                    data.calorie = Number(tmp_cal);
                    foods.push(data);
                }
            }catch(err){}
        }
        foods.sort(function(a, b){
            return b.calorie - a.calorie;
        });
        console.log(foods);

    }
}
crawler();
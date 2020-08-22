function sleepPromise(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("HI"), ms);
    });
};
async function run(){
    let result;
    try{
        console.log("START");
        result = await sleepPromise(1000);
        console.log(result, 1);
        result = await sleepPromise(1000);
        console.log(result, 2);
        result = await sleepPromise(1000);
        console.log(result, 3);
        console.log("END");
    }catch(err){
        console.log(err);
    }
}

run();
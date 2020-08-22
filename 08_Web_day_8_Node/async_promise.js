function sleep(ms, callback){
    setTimeout(() => callback("HI"), ms);
}
//sleep(1000, e => console.log(e));
function sleepPromise(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("HI"), ms);
    });
};
// sleepPromise(1000).then(result => console.log(result));
sleepPromise(1000).then(result =>{
    console.log(result, 1);
    return sleepPromise(1000)
}).then(result => {
    console.log(result, 2);
    return sleepPromise(1000);
}).then((result) => {
    console.log(result, 3);
})
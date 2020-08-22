function sleep(ms, callback){
    setTimeout(() => callback("HI"), ms);
}

console.log("===Start===");
sleep(3000, e=>console.log(e));
console.log("====End====");
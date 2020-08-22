function sleep(ms, callback){
    setTimeout(() => callback("HI"), ms);
}

sleep(1000, e=>{
    console.log(e);
    sleep(1000, e=>{
        console.log(e);
        sleep(1000, e=>{
            console.log(e);
        })
    })
})
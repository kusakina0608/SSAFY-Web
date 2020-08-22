name = 500;
const kfc = {
    name: "Nice",
    size: 38,
    plate: ['GA', "TW", "VB", "AQ"],
    run(){
        console.log(name);
    },
    thisRun(){
        console.log(this.name);
    }
}
kfc.run();
kfc.thisRun();
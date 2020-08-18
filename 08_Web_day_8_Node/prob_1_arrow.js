const KFC = () => {
    console.log("KFC");
}

const MC = () => {
    console.log("MC");
}

const BK = () => {
    console.log("BK");
}

const arr = [KFC, MC, MC, BK, BK, KFC];

arr.forEach(element => {
    element();
})
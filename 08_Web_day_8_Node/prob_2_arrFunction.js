const kfc = {
    plate : ['BTS', 'OK', 'HAHAHA', 'TT'],
    run() {
        console.log(this.plate.map(li => li.length));
    }
}

kfc.run();

const bts = [
    {num: 1, weight: 50, name: 'bts'},
    {num: 2, weight: 40, name: 'kfc'},
    {num: 3, weight: 60, name: 'mc'}
];

console.log(bts.filter(li => li.name !== 'bts'));
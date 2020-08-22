console.log("\n1. map");
const arr1 = [1, 2, 3, 4, 5, 6];
let result1 = arr1.map(li => li*30);
console.log("원본 배열: ", arr1);
console.log("결과 배열: ", result1);

console.log("\n2. filter");
const arr2 = [4, 5, 6, 7, 8, 9];
let result2 = arr2.filter(li => li%2 == 0);
console.log("원본 배열: ", arr2);
console.log("결과 배열: ", result2);

console.log("\n3. reduce");
const arr3 = [5, 2, 6, 4, 7];
let result3 = arr3.reduce((acc, now) => acc * now, 1);
console.log("원본 배열: ", arr3);
console.log("결과 값: ", result3);
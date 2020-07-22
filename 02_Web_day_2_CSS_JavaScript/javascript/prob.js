// javascript practice 1
let a = Number(prompt("a를 입력하세요."));
let b = Number(prompt("b를 입력하세요."));
let inc = 1;
if(b<a) inc = -1;
for(let i=a; i<=b; i+=inc){
    console.log(i);
}

// javascript practice 2
let str = prompt("문자열을 입력하세요");
if(str==="BBQ"){
    let sum = 0;
    for(let a=1; a<31; a++){
        sum += a;
    }
    console.log(sum);
}
else if(str==="KFC"){
    for(let a=1; a<31; a+=2){
        console.log(a);
    }
}
else{
    console.log("MOMS")
}

// javascript practice 3
let a = Number(prompt("a를 입력하세요."));
let b = Number(prompt("b를 입력하세요."));
let c = Number(prompt("c를 입력하세요."));
if(a>c && a>b){
    console.log(a);
}
if(b>a && b>c){
    console.log(b);
}
if(c>a && c>b){
    console.log(c);
}

// javascript practice 4
let arr = [1,2,3,1,2,3,1,2,3];
let cnt = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===1) cnt++;
}
console.log(cnt);

// javascript practice 5
let arr = ['A','E','W','Q','A'];
let result = false;
for(let i=0; i<arr.length; i++){
    if(arr[i]==='A'){
        result = true;
        break;
    }
}
if(result){
    console.log('O');
}
else{
    console.log('X');
}

// javascript practice 6 - function
let go = function() { alert("#"); };
go();
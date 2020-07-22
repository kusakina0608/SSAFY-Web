let a_arr = document.querySelector(".sect-movie-chart").querySelectorAll(".box-image > a");
let thumb_arr = document.querySelector(".sect-movie-chart").querySelectorAll(".thumb-image");

for(let i=0; i<a_arr.length; i++){
    a_arr[i].setAttribute("href", "javascript:void(0)");
    thumb_arr[i].addEventListener("click", function(e){
        alert(String(e.target.alt).split("포스터")[0]);
    })
}

a_arr = document.querySelector(".sect-movie-chart").querySelectorAll(".box-contents > a");
let title_arr = document.querySelector(".sect-movie-chart").querySelectorAll(".title");
for(let i=0; i<a_arr.length; i++){
    a_arr[i].setAttribute("href", "javascript:void(0)");
    title_arr[i].addEventListener("click", function(e){
        e.target.textContent = "********"
        console.log(e.target.textContent);
    })
}

let ad_container = document.querySelector(".chart-ad");
ad_container.innerHTML = "";
document.querySelector(".adFloat").innerHTML = "";

let btn = document.createElement("button");
btn.textContent = "오늘의 영화!!";
btn.setAttribute("onclick","random_movie()");
btn.setAttribute("class","today-movie");
function random_movie(){
    let selected = Math.ceil((Math.random()*7));
    console.log(selected);
    alert(title_arr[selected].textContent);
}
console.log("test");
ad_container.append(btn);
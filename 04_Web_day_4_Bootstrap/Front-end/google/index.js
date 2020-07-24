let toggleButton = document.querySelector(".toggle-button");
let bodyBackground = document.querySelector("#body-background");
let headerNav = document.querySelector(".header-nav-list-wrapper");
let bookmarkWrapper = document.querySelector(".bookmark-wrapper");
let searchInput = document.querySelector("#search-input");
let bookmarkPlus = document.querySelector("#bookmark-plus");

toggleButton.addEventListener("click", function(){
    let imgIconWrappers = document.querySelectorAll(".mg-icon-wrapper");
    let bookmarkTexts = document.querySelectorAll(".bookmark-text");
    toggleButton.textContent = "다크모드";
    toggleButton.classList.toggle("toggle-button-darkmode");
    bodyBackground.classList.toggle("body-background-darkmode");
    headerNav.classList.toggle("text-darkmode");
    for(imgIconWrapper of imgIconWrappers){
        imgIconWrapper.classList.toggle("img-icon-wrapper-darkmode");
    }
    for(bookmarkText of bookmarkTexts){
        bookmarkText.classList.toggle("text-darkmode");
    }
    if(toggleButton.classList.contains("toggle-button-darkmode")){
        toggleButton.textContent = "일반모드";
    }
})

searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        // location.href=`https://www.google.com/search?q=${e.target.value}`;
        window.open(`https://www.google.com/search?q=${e.target.value}`, "_blank");
    }
})

bookmarkPlus.addEventListener("click", function(e){
    const bookmarkItems = document.querySelectorAll(".bookmark-item");
    const bookmarkItem = bookmarkItems[bookmarkItems.length - 1];
    console.log(bookmarkItem);
    // cloneNode false: 외형만 복사
    // cloneNode true : 내부 html 태그들까지 전부 복사
    const clone = bookmarkItem.cloneNode(true);

    //before after
    bookmarkItem.after(clone);
})
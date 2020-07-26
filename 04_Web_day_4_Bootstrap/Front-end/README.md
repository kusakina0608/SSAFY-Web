## Front-end Project
* 회원가입 Form 만들기
  아이디, 비밀번호 공백체크
  비밀번호와 비밀번호 확인 체크(keyup) 이벤트 활용

## ClassList

#### classList.add(String)
class의 속성 값을 추가한다. 만약 이미 추가 된 속성값이라면 이를 무시한다.

#### classList.remove(String)
class의 속성 값을 제거한다.

#### classList.toggle(String)
class의 속성 값이 있다면 제거해주고, 없다면 추가해준다.

#### classList.contains(String)
특정 class 명이 추가 되어있는지 확인한다. 반환 값은 true/false 이다.

#### classList.replace(String, String)
특정 class를 다른 class로 교체한다.

## Chrome 새 탭 만들기

#### box-sizing
content-box: 기본 width, height 값에 border나 padding이 포함되어 있음
border-box: 기본 width, height 값에 border나 padding이 포함되어 있음

#### javascript를 사용한 페이지 이동
1. location.href
a tag를 사용한 것과 같이 이동하는 역할을 한다.
```javascript
searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        location.href=`https://www.google.com/search?q=${e.target.value}`;
    }
})
```

1. window.open()
새 창에서 페이지를 띄워 준다.

```javascript
searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        window.open(`https://www.google.com/search?q=${e.target.value}`, "_blank");
    }
})
```

#### 북마크 추가 기능 구현
cloneNode false: 외형만 복사
cloneNode true: 내부 html 태그들까지 전부 복사
prepend / append 이외에도 before / after method도 존재한다.
```javascript
bookmarkPlus.addEventListener("click", function(e){
    const bookmarkItems = document.querySelectorAll(".bookmark-item");
    const bookmarkItem = bookmarkItems[bookmarkItems.length - 1];
    console.log(bookmarkItem);
    const clone = bookmarkItem.cloneNode(true);
    bookmarkItem.after(clone);
})
```
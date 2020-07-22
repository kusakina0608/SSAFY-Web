## HTML

#### a tag

다른 웹 사이트로 이동할 때 사용한다.

```html
<a href="https://www.naver.com" target="_self">네이버</a>
<a href="https://www.naver.com" target="_blank">네이버(새 탭)</a>
```



#### hN tag

텍스트를 강조할 때 사용한다. N이 작아질 수록 크기가 커진다.

``` html
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
```



#### ul, ol, li tag

리스트를 작성할 때 사용한다. ul은 unordered list, ol은 ordered list, li는 list를 의미한다. 

_ul tag_

```html
<ul>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
    <li>list4</li>
</ul>
```

_ol tag_

```html
<ol>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
    <li>list4</li>
</ol>
```



#### p tag

단락을 구분할 때 사용한다.

```html
<p>이것은 p 태그 입니다.</p>
```



#### img tag

문서에 이미지를 삽입할 때 사용한다.

```html
<img src="img/cat-2536662.jpg" alt="고양이 사진" width="500/"/>
```



#### strong tag

강조하고 싶은 내용을 표시할 때 사용한다.

```html
<strong>강하다</strong>
```



#### input tag

사용자의 입력을 받을 때 사용한다.

```html
<input type="text" placeholder="id를 입력하세요" value="aaa"/>
```



#### input tag Attribute

* type: 입력의 종류를 지정할 수 있는 속성으로, 기본 값은 text이다.
  * text: input 태그 type 속성의 기본 값이다. 짧은 텍스트를 입력할 수 있다.
  * checkbox: 다중선택이 가능한 체크박스이다. checked 속성이 부여된 항목은 기본 값이 되어 페이지가 로드 될 때부터 선택되어 있다.
  * radio: 하나만 선택할 수 있는 라디오 버튼이다. checked 속성이 부여된 항목은 기본 값이 되어 페이지가 로드 될 때부터 선택되어 있다.
  * date: 날짜를 입력받을 때 사용할 수 있다.
  * range: 음량 조절 같이 범위를 선택하는 곳에 사용할 수 있다. 
  * color: 색상을 선택할 수 있다.
  * file: 파일을 첨부할 때 사용한다.
  * button: 클릭할 수 있는 버튼이다.
  * password: 비밀번호를 입력할 수 있다. 입력된 비밀번호는 화면에 표시되지 않는다.
  * submit: form을 제출할 때 사용한다.
* value: 사용자 입력의 기본 값을 지정할 수 있는 속성이다.
* placeholder: 사용자 입력 부분에 흐린 색으로 나타나는 안내 메시지를 표시할 때 사용한다.



#### textarea tag

장문의 텍스트를 입력할 수 있는 영역이 필요할 때 사용한다. 드래그하여 textarea를 확장할 수 있다.

```html
<textarea>테스트입니다.</textarea><br/>
```



#### form tag

다른 페이지에 값을 전달할 때 사용한다. 보통 input 태그와 함께 사용한다.

```html
<form>
    <input type="text" placeholder="ID를 입력하세요"/><br/>
    <input type="password" placeholder="비밀번호를 입력하세요"/><br/>
    <input type="submit" value="날 제출해줘"><br/>
</form>
```



#### select tag

드롭다운을 생성할 때 사용하는 태그이다. 미리 정의된 여러 요소들 중에서 하나를 선택할 수 있다.

```html
<select name="주스">
    <option>오렌지 주스</option>
    <option>토마토 주스</option>
    <option selected>포도 주스</option>
</select>
```

selected 속성이 지정된 option은 기본 값이 되어 페이지가 로드 될 때부터 선택되어 있다.



#### span tag

별 의미는 없지만 CSS 등을 적용할 때 나누는 구분이 되는 태그이다.

```html
<span> 별 의미가 없지만 CSS 등을 적용할 때 나누는 구분이 되는 태그</span>
```



#### div tag

요소들을 묶어줄 때 사용할 수 있는 태그이다.

```html
<div>
    묶어주기
    <span>묶어주는 곳에 들어갑니다.</span>
</div>
```



#### iframe tag

다른 페이지의 요소를 가져올 때 사용하는 태그이다.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/spUNpyF58BY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```



## CSS

### CSS 사용방법

CSS를 사용하는 방법은 크게 3가지로 나뉜다.

* External CSS
* Internal CSS
* Inline CSS



#### External CSS

규모가 큰 프로젝트에서 사용하기 적합한 방식이다.

_styles.css_

```css
h3{
    color: darkolivegreen;
}
```

_.html_

```html
<link rel="stylesheet" href="styles.css"/>
<h3>3. 별도의 css 파일을 통한 CSS의 적용</h3> 
```



#### Internal CSS

```html
<style>
h2{
    color:royalblue;
}
</style>
<h2>2. style tag를 사용한 CSS의 적용</h2>
```



#### Inline CSS

추후 유지보수가 어려워지는 단점이 있다.

```html
<h1 style="color: pink">1. style 속성값을 통한 CSS의 적용</h1>
```



### CSS의 주요 속성

#### color

요소의 색상을 지정할 때 사용하는 속성이다. RGB 값 또는 미리 정의된 키워드를 사용하여 지정할 수 있다.

```css
.test1 {
    color: blue;
}
```



#### font-size

글씨의 크기를 지정할 때 사용하는 속성이다.

```css
.test1 {
    font-size: 27px;
}
```



#### font-weight

폰트의 두께를 지정할 때 사용하는 속성이다. bold, normal 등 키워드를 사용하거나 숫자 값을 통해 지정할 수 있다.

```css
.test1 {
    font-weight: bold;
}
```



#### font-family

요소의 폰트를 지정할 수 있다. 외부 폰트를 사용할 경우 link와 함께 사용한다.

```html
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap" rel="stylesheet">
<style>
    *{
        font-family: 'Nanum Myeongjo', serif;
    }
</style>
```



#### background-color

요소의 배경 색상을 지정할 때 사용한다.

``` css
.test2 {
    background-color: red;
}
```



#### width and height

요소의 너비와 높이를 지정할 때 사용한다. 픽셀 값 또는 %값으로 지정할 수 있다.

``` css
.test2 {
    width: 200px;
    height: 200px;
}
```

```css
.test2 {
    width: 50%;
    height: 50%;
}
```



#### text-align

요소의 텍스트를 정렬할 때 사용한다.

```html
.test2 {
    text-align: center;
}
```



#### background-image

repeat-x, repeat-y, no-repeat을 지정할 수 있다. 각각 x축으로 반복, y 축으로 반복, 반복 없음을 의미한다.

```css
.test3 {
    background-image: url("../img/home.png");
    width: 1920px;
    height: 1080px;
    background-repeat: no-repeat;
}
```



#### background-size

배경 이미지가 어떻게 채워질지를 결정해 주는 속성이다.

contain은 이미지를 채우되 비율에 맞게 채우고, cover는 이미지를 채우되 비율을 신경쓰지 않고 채운다.

```css
.test3 {
    background-image: url("../img/home.png");
    width: 1920px;
    height: 1080px;
    background-repeat: no-repeat;
    background-size: auto;
    /* contain은 이미지를 채우되 비율에 맞게 채운다 */
    background-size: contain;
    /* cover는 이미지를 채우되 비율을 신경쓰지 않고 채운다 */
    /* background-size: cover; */
}
```



#### background-position

배경 이미지의 위치를 지정해주는 속성이다.

```css
.test3 {
    background-image: url("../img/home.png");
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center center;
    /* background-position: left center; */
    /* background-position: bottom center; */
}
```



#### margin

요소에 margin을 주기 위해서 margin-top, margin-bottom 등의 속성을 사용할 수 있다. 또한 margin 속성을 사용하여 한번에 위, 오른쪽, 아래쪽, 왼쪽의 margin을 한번에 지정할 수도 있다.

```css
.margin-aa {
    margin-top: 100px;
    margin-bottom: 10px;
}
.margin-bb {
    margin-top: 30px;
    margin: 30px 30px 30px 30px; /* 위, 오른쪽, 아래, 왼쪽 */
    margin: 30px 10px; /* 상하, 좌우 */
}
```

마진 병합현상은 서로의 margin 값이 겹칠 때 더 큰 부분만 나타나고 낮은 부분은 정상적으로 표시되지 않는 현상을 말한다.



#### border

border-top, border-right, border-bottom, border-left 속성을 통해 테두리를 지정할 수 있다. 테두리 두께, 형태, 색상 순으로 지정한다.

```css
.border-aa {
    margin: 30px 30px 30px 30px;
    /* solid는 그냥 직선, dotted는 점선 */
    border-top: 10px solid black;
    border-right: 5px dotted blue;
    border-bottom: 8px double red;
    border-left: 16px solid green;
}
```



#### border-radius

border-radius를 사용하여 테두리를 둥글게 변경할 수 있다.

```css
.circle{
    background-color: blue;
    border-radius: 100%;
    width: 100px;
    height: 100px;
}
```

위 css를 적용하면 html 문서에서 원을 그릴 수 있다.

```html
<div class="circle"></div>
```



#### padding

padding 값을 통해 영역 내부의 여백을 지정할 수 있다.

```css
h1 {
    text-align: center;
    color: white;
    background-color: gray;
    border: 5px solid black;
    padding: 20px 10px;
}
```



#### CSS 공통 속성 정의

공통적으로 적용해야 하는 스타일은 따로 빼내어 하나의 클래스로 만들면 손쉽게 공통 속성을 정의할 수 있다.

개별적으로 적용해야 하는 스타일은 별도로 정의한 뒤, 요소에 정의한 클래스를 할당하여 적용할 수 있다.

```css
.common{
    width: 140px;
    height: 140px;
    border: 1px solid black;
}
.aa{
    margin-left: auto;
}
.bb{
    margin-left: auto;
    margin-right: auto;
    /* margin: 0 auto; */
}
```



```html
<div class="common aa">이것은 aa 입니다.</div>
<div class="common bb">이것은 bb 입니다.</div>
<div class="common cc">이것은 cc 입니다.</div>
```



#### CSS Display 활용하기

* display: none
* display: block
* display: inline
* display: inline-block
* flex

#### display: none

display 속성을 none으로 지정할 경우 화면에 표시되지 않는다.

```html
<style>
    h3 {
        display: none;
    }
</style>
<h3>보이지 않아</h3>
```



#### block 요소

대표적인 block 요소로는 div tag가 있다.

```html
<div>aa</div>
```



#### inline 요소

대표적인 inline 요소로는 span tag가 있다.

```html
<span>bb</span>
```



inline 요소는, width, height값이 제대로 적용되지 않는다는 특징이 있다.

```css
div{
    display: inline;
    border: 1px solid black;
    width: 200px;
    height: 200px;
}
```



#### inline-block 요소

inline 요소는 width, height값이 적용되지 않지만, inline-block 요소는 width, height값이 제대로 적용되면서 inline으로 적용된다.

```css
.inline-block-span {
            width: 200px;
            height: 200px;
            display: inline-block;
            background-color: coral;
        }
```

```html
<div>inline 요소는 width, height값이 적용되지 않지만, <span class="inline-block-span">inline-block 요소는</span> width, height값이 제대로 적용되면서 <span class="inline-block-span">inline으로 적용된다.</span></div>
```



#### flex 요소

**horizontal alignment**

```css
.a-wrapper {
    border: 1px solid black;
    display: flex;
    justify-content: center; /* 중앙 정렬 */
    justify-content: start; /* 왼쪽 정렬 */
    justify-content: flex-end; /* 맨 끝 정렬 */
    justify-content: space-between; /* 각 요소를 비율에 맞춰 각각 배치 */
    justify-content: space-around; /* margin을 포함하여 배치 */
    background-color: cornsilk;
}
.box {
    width: 80px;
    height: 80px;
    border: 1px solid blue;
    background-color: red;
}
```

```html
<div class="a-wrapper">
    <div class="box">a</div>
    <div class="box">b</div>
    <div class="box">c</div>
</div>
```



**vertical alignment**

```css
.a-wrapper {
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center; /* 세로 중앙 정렬 */
    background-color: cornsilk;
}
```



#### flex direction

flex의 내부 요소가 정렬되는 방향을 지정한다. 기본 값은 row이다.

flex-direction column 일 때는 align-items가 세로가 아닌 가로 정렬.

justify-content는 가로 정렬이 아닌 세로 정렬로 축이 뒤집힌다.

```css
.c-wrapper {
    background-color: skyblue;
    border: 5px solid green;
    margin: 70px;
    display: flex;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```



#### flex wrap

flex-wrap: wrap일 경우 내부 요소들이 wrapper의 크기를 넘어갈 경우 다음 줄로 출력한다.

```css

.d-wrapper {
    display: flex;
    height: 400px;
    flex-wrap: nowrap;
    flex-wrap: wrap;
}
```


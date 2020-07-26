>  # JavaScript와 CSS 실습
> 2020-07-21

## Holy Grail Layout 만들기 실습
#### 부모 자식 선택자
```css
선택자1 선택자2 { 속성1:속성값; 속성2:속성값; }
```
그이름 사이에 공백을 넣은 선택자는 부모 태그 하위에 있는 태그에 스타일을 적용한다.

```css
ul > li{
	list-style: none
}
```
`>` 특수문자를 사용한 선택자도 있다. 이는 공백을 넣은 것과 비슷하지만, 두 태그 사이에 다른 태그가 없는, 순수 부모-자식 태그간의 관계만 적용된다.

## CSS Layout 활용 - Position
#### static

#### relative
요소의 원래 위치를 원점으로 하여 top, left 등의 속성을 통해 요소를 이동한다. 위치를 계산할 때 static인 상태에서의 원래 위치부터 계산한다.
``` css
.top {
    position: relative;
    top: 5px;
    left: 10px;
}
......
```

```html

    <span class="top bg-span">top</span>
    <span class="right bg-span">right</span>
    <span class="bottom bg-span">bottom</span>
    <span class="left bg-span">left</span>
```

#### fixed
상단에 고정되어 스크롤을 내려도 사라지지 않는 네비게이션 바 등을 만들 때 사용한다. 원래 위치와 상관없이 위치를 지정할 수 있다.
```css
.fixed-class {
    position: fixed;
}
```

```html
<div class="fixed-class">고정되었습니다.</div>
```

#### absolute
position이 absolute로 지정된 요소는 상위 태그에 대해 위치가 고정된다. top, right, bottom, left의 속성을 사용하여 위치를 지정할 수 있다. 알림창 등을 만들 때 사용한다. 원래 위치와 상관없이 위치를 지정할 수 있지만, 가까운 상위 요소를 기준으로 위치가 결정된다.
```css
.absolute {
    position: absolute;
    background-color: aliceblue;
    right: 0;
    bottom: 0;
}
```

```html
<div class="absolute">absolute</div>
```

## z-index
z-index는 3차원 요소인 absolute, relative, fixed 등의 position에서만 동작한다.
```css
.box {
    width: 120px;
    height: 120px;
    position: absolute;
}
.box:hover {
    z-index: 50;
}
.box1 {
    background-color: navajowhite;
    top: 20px;
    left: 200px;
}
.box2 {
    background-color: aliceblue;
    top: 50px;
    left: 260px;
}
.box3 {
    background-color: pink;
    top: 80px;
    left: 230px;
}
```

```html
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
```

## NAVER 로그인 화면 만들기
먼저 요소들을 담을 컨테이너를 하나 만든다.
```css
.container {
    max-width: 800px;
    min-width: 400px;
    border: 3px solid black;
    margin: 0 auto;
}
```
`margin: 0 auto;`로 지정할 경우 값이 유동적으로 지정된다. margin의 두번째 속성값은 수평 방향 margin을 의미하므로, 가운데 정렬 효과를 얻을 수 있다.

## 원하는 대로 CSS로 표현하기
#### flex-wrap
```
nowrap
```
기본 설정값으로, `flex-container` 부모요소 영역을 벗어나더라도 `flex-item` 요소들을 **한 줄**에 배치한다. 시작점은 [`flex-direction`](https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction) 에 의해 결정된 방향으로 적용된다.

```
wrap
```
`flex-item` 요소들이 내부 로직에 의해 분할되어 여러 행에 걸쳐서 배치된다. `nowrap` 속성과 마찬가지로 요소가 배치되는 시작점은 [`flex-direction`](https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction) 에 의해 결정된다. 일반적으로 위에서 아래로 쌓이는 순서이다.

```
wrap-reverse
```
`wrap` 속성값과 동일하지만, 요소가 나열되는 시작점과 끝점의 기준이 반대로 배치된다.
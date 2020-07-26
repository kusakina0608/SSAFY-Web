## HTML 태그
### 제목(Heading)
HTML은 제목을 표현할 수 있는 다양한 크기의 `<h>`태그를 제공한다.

#### h1 ~ h6 tag
텍스트를 강조하거나 제목을 나타낼 때 사용한다. 숫자가 작아질 수록 크기가 커진다.
``` html
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
```

---

### 단락(Paragraph)
단락이란 내용상 끊어서 구분할 수 있는 하나하나의 부분을 의미하며, 문단이라고도 부른다.

#### p tag
단락(paragraph)을 구분할 때 사용한다.
```html
<p>이것은 p 태그 입니다.</p>
```

#### pre tag
HTML 코드에서 작성한 텍스트 서식을 그대로 표현할 때 사용한다. 
```html
<pre>
줄을 나누고 싶어서
이렇게 줄을 나눠봤습니다.

과연     그대로     출력이     될까요?
</pre>
```
> `<pre>`태그 내에 작성된 텍스트의 글꼴(font)은 고정폭 글꼴(fixed-width font)로 자동변환된다.

#### hr tag
단락을 나눌 때나 내용상의 구분을 표현하고자 할 때 수평 가로 구분선을 사용한다.
```html
<p>저는 하나의 단락입니다.</p>
<hr>
<p>저는 하나의 단락입니다.</p>
<hr>
<p>저는 하나의 단락입니다.</p>
```

---

### 서식(Formatting)
HTML은 텍스트(text)에 다양한 효과를 주는 여러 태그(tag)를 제공한다.

#### b tag, strong tag - 굵게
b 태그는 단순히 화면의 텍스트를 굵게 표현할 때 사용한다.
strong 태그는 텍스트를 굵게 표현해줄 뿐만 아니라 그 내용이 중요하다는 의미도 함께 포함한다.
```html
<p><b>"이 부분"</b>은 단순히 글씨가 굵은 부분이에요!</p>
<p><strong>"이 부분"</strong>은 중요한 부분이라서 굵게 표현됐어요!</p>
```

#### i tag, em tag - 이탤릭체
i 태그는 단순히 화면의 텍스트를 이탤릭체로 표현한다.
em 태그는 텍스트를 이탤릭체로 변환해줄 뿐만 아니라 그 내용이 중요하다는 의미도 함께 포함한다.
```html
<p><i>"이 부분"</i>은 단순히 글씨가 이탤릭체인 부분이에요!</p>
<p><em>"이 부분"</em>은 중요한 부분이라서 이탤릭체로 표현됐어요!</p>
```

#### mark tag - 하이라이팅
mark 태그는 텍스트에 하이라이팅(highlighting) 효과를 적용한다.
```html
<p><mark>"이 부분"</mark>만 하이라이팅하고 싶어요.</p>
```

#### del tag - 취소선
del 태그(delete)는 텍스트 중앙에 가로줄을 만들어 마치 텍스트를 지운 것과 같은 효과를 적용한다.
```html
<p><del>"이 부분"</del>을 지운 것처럼 하고 싶어요.</p>
```

#### ins tag - 밑줄
ins 태그(insert)는 텍스트 밑에 가로줄을 만들어 마치 빈칸에 텍스트를 삽입한 것과 같은 효과를 적용한다.
``` html
<p><ins>"밑줄 친 부분"</ins>에 들어갈 알맞은 말을 고르세요.</p>
```

#### sup tag, sub tag - 위첨자와 아래첨자
위첨자는 `<sup>`태그(superscript)를 사용하여, 아래첨자는 `<sub>`태그(subscript)를 사용하여 표현한다.
```html
<p>X<sup>2</sup> + Y<sup>3</sup> = Z</p>
<p>물을 나타내는 화학식은 H<sub>2</sub>O 입니다.</p>
```

---

### 인용구(Quotation)
HTML에서 인용구를 표현하는 방법은 다음과 같이 두 가지로 나뉜다.
1. 짧은 인용구 - q tag
2. 블록 인용구 - blockquote tag

#### q tag
짧은 인용구는 `<q>`태그(quotation)를 사용하여 표현할 수 있으며, 자동으로 앞뒤에 큰따옴표가 붙는다.
```html
<p>
  HTML의 정의는 <q>웹 페이지를 만들기 위한 하이퍼텍스트 마크업 언어</q>입니다.
</p>
```

#### blockquote tag
길이가 긴 인용문은 `<blockquote>`태그(block quatation)를 사용하여 표현할 수 있다.
`<blockquote>`태그는 이러한 인용 부분을 별도의 단락으로 구분하여 나타낸다.
```html
<p>HTML의 정의</p>
<blockquote>
  인터넷 서비스의 하나인 월드 와이드 웹을 통해 볼 수 있는 문서를 만들 때 사용하는 프로그래밍 언어의 한 종류이다.
</blockquote>
```

#### abbr tag
용어의 축약형을 표현하기 위해서는 `<abbr>`태그(abbreviation)를 사용한다.
`<abbr>`태그 위에 마우스를 위치시키면 title 속성에 명시한 용어의 원형이 나타난다.
```html
<p>
  <strong>
    <abbr title="HyperText Markup Language 5">HTML5</abbr>
  </strong>
  란 웹 문서를 제작하는 데 쓰이는 프로그래밍 언어인 HTML의 최신규격입니다.
</p>
```

#### address tag
HTML에서 주소를 표현하려면 `<address>` 태그를 사용한다.
주소는 이탤릭체로 표현되며, 위아래로 약간의 공백이 자동으로 삽입된다.
```html
<address>
  서울특별시<br>
  강남구 테헤란로
</address>
```

---

### 주석(Comment)
개발자는 작성한 해당 코드에 대한 이해를 돕는 설명이나 디버깅을 위해 주석을 작성한다.
주석은 다른 HTML 코드와는 달리 웹 브라우저에 의해 표현되지 않는다.
HTML에서 주석을 표현하는 방법은 다음과 같습니다.
```html
<!-- 주석내용 -->
```
> HTML 주석은 웹 페이지에 나타나지 않는다.
> HTML 코드에 삽입된 주석을 읽고 싶다면, 웹 브라우저의 페이지 소스 보기 등을 통해서 확인할 수 있다.
> HTML 주석은 HTML 코드의 어느 부분에서라도 사용할 수 있지만, HTML 주석 안에 또 다른 주석을 작성할 수는 없다.

---

### 엔티티(Entity)

HTML에는 미리 예약된 몇몇 문자가 있으며, 이러한 문자를 HTML 예약어(reserved characters)라고 부른다.
이러한 HTML 예약어를 HTML 코드에서 사용하면, 웹 브라우저는 그것을 평소와는 다른 의미로 해석한다.
따라서 HTML 예약어를 기존에 사용하던 의미 그대로 사용하기 위해 별도로 만든 문자셋을 엔티티(entity)라고 한다.

엔티티의 형태는 다음과 같다.

```html
&엔티티이름;
&#엔티티숫자;
```

HTML에서 제공하는 대표적인 엔티티(entity)는 다음과 같다.

| 엔티티 문자 | 엔티티 이름 | 16진수 엔티티 숫자 |       설명        |
| :---------: | :---------: | :----------------: | :---------------: |
|             |   \&nbsp;   |      \&#160;       | 줄 바꿈 없는 공백 |
|      <      |    \&lt;    |       \&#60;       |     보다 작은     |
|      >      |    \&gt;    |       \&#62;       |      보다 큰      |
|      &      |   \&amp;    |       \&#38;       |     AND 기호      |
|      "      |   \&quot;   |       \&#34;       |     큰따옴표      |
|      '      |   \&apos;   |       \&#39;       |    작은따옴표     |

HTML에서 사용할 수 있는 모든 엔티티에 대한 더 자세한 정보를 원한다면, W3C 공식 사이트를 방문하여 확인할 수 있다.

[Character entity references in HTML =>](https://www.w3.org/TR/html4/sgml/entities.html)

---

### 하이퍼링크(Hyperlink)

다른 페이지나 다른 사이트로 연결되는 하이퍼링크(hyperlink)는 `<a>` 태그를 사용하여 표현할 수 있다.


#### a tag

다른 웹 사이트로 이동할 때 사용한다.
`<a>`태그의 href 속성은 링크를 클릭하면 연결할 페이지나 사이트의 URL 주소를 명시한다.

```html
<a href="https://www.naver.com" target="_self">네이버</a>
<a href="https://www.naver.com" target="_blank">네이버(새 탭)</a>
```

##### target 속성: target 속성은 링크로 연결된 문서를 어디에서 열지를 명시한다.

> *_blank*: 링크로 연결된 문서를 새 창이나 새 탭에서 염.
> *_self*: 링크로 연결된 문서를 현재 프레임(frame)에서 염. (기본설정)
> *_parent*: 링크로 연결된 문서를 부모 프레임(frame)에서 염.
> *_top*: 링크로 연결된 문서를 현재 창의 가장 상위 프레임(frame)에서 염.
> *프레임(frame) 이름*: 링크로 연결된 문서를 지정된 프레임(frame)에서 염.
>
> ```html
> <h2><a href="/html/intro" target="_blank">blank</a></h2>
> <h2><a href="/html/intro" target="_self">self</a></h2>
> <h2><a href="/html/intro" target="_parent">parent</a></h2>
> <h2><a href="/html/intro" target="_top">top</a></h2>
> <h2><a href="/html/intro" target="myframe">myframe</a></h2>
> <iframe name="myframe" style="width:50%; height: 330px"></iframe>
> ```

##### 링크의 상태(state)

> 웹 브라우저에서 링크가 연결되어 있는 텍스트의 색상은 다음과 같다.
> 기본적으로 링크가 걸린 텍스트는 밑줄에, 텍스트 색상이 파란색으로 변경된다.
> visited 상태의 링크는 밑줄에, 텍스트 색상이 보라색으로 변경된다.
> active 상태의 링크는 밑줄에, 텍스트 색상이 빨간색으로 변경된다.
> 
> | 링크의 상태 |                     설명                      |
> | :---------: | :-------------------------------------------: |
> |    link     | 아직 한 번도 방문한 적이 없는 상태 (기본설정) |
> |   visited   |       한 번이라도 방문한 적이 있는 상태       |
> |    hover    |       링크 위에 마우스를 올려놓은 상태        |
> |   active    |       링크를 마우스로 누르고 있는 상태        |

##### 페이지 책갈피

> `<a>`태그의 name 속성을 이용하면 간단한 책갈피를 만들 수 있다
> 우선 책갈피를 통해 가고 싶은 위치에 `<a>`태그를 만들고 name 속성을 작성한다.
> 그다음에 작성한 name 속성값을 이용하여 다른 `<a>`태그에서 링크를 걸면 된다.

---

### 이미지(Image)

문서에 이미지를 삽입할 때 사용한다.

#### img tag

`<img>`태그는 종료 태그가 없는 빈 태그(empty tag)이며, 다음과 같은 문법으로 사용한다.

```html
<img src="이미지주소" alt="대체문자열">
```

src 속성은 이미지가 저장된 주소의 URL 주소를 명시한다.
alt 속성으로 이미지가 로딩될 수 없는 상황에서 이미지 대신 나타날 문자열을 설정할 수 있다.

---

### 리스트(List)

리스트(list)란 여러 요소들을 일렬로 나열한 목록이나 명단을 의미한다.
HTML에서는 이러한 리스트를 표현하기 위해 다음과 같은 리스트를 제공한다.

1. 순서가 없는 리스트(unordered list)

2. 순서가 있는 리스트(ordered list)

3. 정의 리스트(definition list)

#### ul tag - Unordered List

순서가 없는 리스트는 `<ul>`태그로 시작하며, 여기에 포함되는 각각의 리스트 요소는 `<li>`태그로 시작한다.
본 마커(marker)로 검정색의 작은 원(bullet)을 사용한다.

```html
<ul>
  <li>사과</li>
  <li>멜론</li>
  <li>바나나</li>
</ul>
```

#### ol tag - Ordered List

순서가 있는 리스트는 `<ol>`태그로 시작하며, 여기에 포함되는 각각의 리스트 요소는 `<li>`태그로 시작한다.
기본 마커로 아라비아 숫자를 사용한다.

```html
<ol>
  <li>사과</li>
  <li>멜론</li>
  <li>바나나</li>
</ol>
```

#### dl tag - Definition List

정의 리스트(description list)는 용어와 그에 대한 정의를 모아놓은 리스트로 `<dl>`태그로 시작합니다.
`<dt>`태그에는 용어의 이름이 들어가고, `<dd>`태그에는 해당 용어에 대한 정의가 들어갑니다.

```html
<dl>
  <dt>호박</dt>
  <dd>- 박과의 한해살이 덩굴성 채소</dd>
  <dt>상추</dt>
  <dd>- 국화과의 한해살이 또는 두해살이풀</dd>
</dl>
```

---

















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
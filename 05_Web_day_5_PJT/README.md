## 관통 PJT

## MOOKUP - Kakao Oven 사용

## Navigation 및 Visual 영역 제작
Visual 영역 제작에는 부트스트랩을 최대한 활용하여 CSS 사용을 최소화한다.
```html
<nav class="navbar navbar-dark bg-dark w-100 position-fixed pl-5 pr-5">
```
내비게이션 바의 요소들도 마찬가지로 부트스트랩을 활용한다.
```html
<nav class="navbar navbar-dark bg-dark w-100 position-fixed pl-5 pr-5" style="z-index: 99;">
    <a class="navbar-brand">이대진</a>
    <ul class="nav justify-content-end">
        <li class="nav-item"><a class="nav-link text-white">Main</a></li>
        <li class="nav-item"><a class="nav-link text-white">Skill</a></li>
        <li class="nav-item"><a class="nav-link text-white">Stack</a></li>
        <li class="nav-item"><a class="nav-link text-white">Closing</a></li>
    </ul>
</nav>
```
여기까지 진행하면 내비게이션 바의 기본 틀 작성은 끝난다.

## 메인 파트 제작
Kakao Oven에서 제작한 프로토타입에서는 본문 부분이 여러 개의 파트로 나뉜다.
이를 구현하기 위해 section을 사용한다.

#### 이미지 슬라이드 제작
```html
<section id="main-part">
    <div id="carouselExampleIndicators" class="carousel slide w-100 m-auto" data-ride="carousel">
        <ol class="carousel-indecators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
    </div>
</section>
```

#### Carousel
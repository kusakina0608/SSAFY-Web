### 1. 포트폴리오 페이지

`index.html`은 포트폴리오 페이지이며

'Portfolio' 메뉴의 6번째 항목으로 날씨 확인 사이트 링크를 걸어두었습니다.



* 공통

Kakao Developers -> 플랫폼 -> 허용된 도메인에

`http://localhost:5500` 와 `http://127.0.0.1:5500` 를 추가해놨습니다.

해당 도메인에서 실행하지 않으면 라이브러리 로드가 되지 않아 페이지가 로드 되지 않을 수 있습니다.

(라이브 서버를 실행하지 않고 html파일을 실행할 경우 지도가 로드 되지 않습니다)



### 2. 날씨 조회 페이지(기본 기능)

`weather.html` 파일은 현재 위치 또는 지도상에서 선택한 지역의 날씨를 조회할 수 있는 페이지입니다.

웹 사이트를 실행한 사용자가 위치 정보 제공에 동의할 경우 현재 위치를 기준으로 날씨를 조회하여 정보를 화면에 보여줍니다.

위치 정보 제공에 동의하지 않을 경우 미리 지정해 둔 위치를 기준으로 날씨를 조회하여 정보를 화면에 보여줍니다.



다른 지역의 날씨를 조회하는 기능은 카카오 지도 상의 마커를 통하여 수행할 수 있습니다.

지도에는 `http://bulk.openweathermap.org/sample/` 에서 다운로드 받은 city.list.json.gz 파일에 있는 국내 지역 정보를 바탕으로 마커가 추가됩니다.



마커에는 `mouseover`/`mouseout`/`click` 이벤트 리스너를 지정하여 마우스를 마커 위에 위치시킬 경우 지명이 표시되고,

마커를 클릭 할 경우 해당 지역의 날씨 정보를 API에 요청하여 페이지 상단의 날씨 정보가 갱신됩니다.



### 3. One Call API

`weatherdetail.html` 파일은 현재 위치를 기준으로 상세 날씨 정보를 제공해 주는 페이지입니다.

만약 위치 정보 제공에 동의하지 않을 경우 미리 지정해 둔 위치를 기준으로 상세 날씨 정보를 제공합니다.



날씨 정보는 현재 시각을 기준으로 48시간 이후까지 1시간 단위로 제공됩니다.

제공되는 정보는 기압, 습도, 바람 등 One Call API에서 제공하는 정보를 그대로 쓰거나 가공하여 사용하였습니다.
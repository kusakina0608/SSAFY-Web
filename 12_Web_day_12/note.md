### 파일 업로드
파일 업로드는 두가지 방법으로 할 수 있다.
1. 페이지 이동과 동시에 파일을 넘겨주는 방식
2. axios(ajax)를 통한 파일 업로드 방식

#### 데이터 전송 시 인코딩 방법

Form의 Enctype

1. application/x-www-form-urlencoded
2. multipart/form-data
3. text/plain

보통 1번 또는 2번을 사용한다.

#### Multer Library

파일 업로드를 위한 Node.js의 미들웨어 라이브러리
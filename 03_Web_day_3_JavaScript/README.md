#### Eventhandler
```javascript
const id_input = document.querySelector(".id-input");
const id_result = document.querySelector(".id-result");
id_input.addEventListener("change",function(e){
    id_result.textContent = e.target.value + "ლ(´ڡ`ლ)";
})
```
이벤트 핸들러를 정의할 때 e를 인자로 받으면 이벤트 정보가 함께 전달된다.
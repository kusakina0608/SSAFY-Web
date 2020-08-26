> ## Vue.js
>
> 웹페이지 기능이 많아지면서 Front-end Framework의 필요성이 증대되었다.

빠른 DOM 제어와 Component 기반 웹 개발을 위해 Front-end Framework의 필요성이 대두되었다.

* Vue에는 Component 단위로 조립식으로 웹페이지 UI를 개발한다.

* Virtual DOM: Vue는 JQuery의 비효율적 DOM 제어를 개선하여 웹페이지의 성능을 향상시켰다.

현대 Front-end 개발자의 필수 지식이 되었다.

---

### About Vue.js

#### Progressive JavaScript Framework

JavaScript 프로젝트에서 점진적으로 수정해 나가면서 Vue.js를 적용시킬 수 있다.
(Vue.js를 적용하기 위해 완전히 뒤엎는 것이 아닌, 수정하는 방식으로 적용하는 프레임워크)



### 단방향 Data Binding

##### Vue 설치

CDN 방식으로 간단하게 Vue를 설치할 수 있다.

[Vue 설치하기](https://vuejs.org/v2/guide/)

_Vue 개발 버전_

```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

_Vue 배포 버전_

```html
<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```



##### HelloWorld PJT

_helloworld.html_

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        {{msg}}
    </div>
    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data(){ // 우리가 사용할 데이터가 들어 있다.
                return{
                    msg: "Hello World!"
                }
            }
        })
    </script>
</body>
</html>
```

Vue.js의 스크립트에서는

```javascript
const app = new Vue({
    el: "#app",
    data(){ // 우리가 사용할 데이터가 들어 있다.
        return{
            msg: "Hello World!"
        }
    }
})
```

위처럼 각 컴포넌트에 접근할 수 있다.



vue.js는 함수를 사용할 때 인라인 방식을 사용한다.

```html
<button v-on:click="bbq">Hey</button>
...
<script>
    const app = new Vue({
            el: "#app",
            // data: {
            //     msg: "Hello World"
            // },
            data(){
                return {
                    msg: "Hello World",
                    nextMsg: "why so serious?"
                }
            },
            methods: {
                bbq(){
                    // console.log(msg);
                    console.log(this.msg);
                    console.log(this);
                    this.msg = this.nextMsg;
                }
            }
        })
</script>
```

위 스크립트의 bbq() 내에서 vue 객체를 접근하기 위해서는 this를 사용해야 한다.

bbq의 `this.msg = this.nextMsg;` 처럼 Vue instance의 값을 수정하면 바로 DOM Object에 값이 반영되는 것을 단방향 바인딩이라고 한다.



#### Vue.js의 바인딩

`{{msg}}`

`v-on:click="func"`

`v-bind:value="msg"`

`v-bind:class="myclass"`



#### 양방향 바인딩

`v-model



---

### 조건문과 반복문

#### 조건문

`v-if="condition"`

`v-if="cond1 || cond2"`

`v-if="cond1 && cond2"`

#### 반복문

`v-for="element in list"`

---

### 디자인 패턴

_뷰의 동작 알아보기_

```javascript
const h1 = document.createElement("h1");
document.body.appendChild(h1);
const viewModel = {};
let model = "";
Object.defineProperty(viewModel, 'model', {
    get() {return model;},
    set(value){
        model = value;
        h1.innerHTML = model;
    }
});
viewModel.model = "hello world";
viewModel.model = "hello vue";
```



#### MVVM

Model: 

View: 

ViewModel: 



기존 수업에서는 ViewModel 없이, Model(JavaScript)로 View(DOM)를 직접 제어했지만, 현재 수업에서는 Vue.js를 통해서, View(DOM)을 제어



### LifeCycle

```javascript
// Component가 DOM에 추가되기 전, 가장 먼저 실행되는 라이프사이클
// 데이터에 접근이 불가능하다.
beforeCreate(){
    console.log("hello1");
    console.log(this.msg);
},
// 데이터, computed, method에 접근이 가능하나, DOM에는 추가되지 않는다.
created(){
    console.log("hello2");
    console.log(this.msg)
},
// 가상 DOM은 생성되었지만 실제 DOM에는 없는 상태
beforeMount(){
    console.log("beforMount");
},
// 가장 많이 사용된다. 가상 DOM이 실제 DOM에 부착되고 난 후에 실행된다.
// axios 호출 등에 많이 사용된다.
mounted(){
    console.log("mounted");
},
// 데이터가 변해서 DOM에 그 변화를 적용시킬 때 변화 직전에 호출된다.
beforeUpdate(){
    console.log("beforeUpdate");
},
// 데이터가 변경이 완료되어 DOM에 적용된 상태
// 변경된 값들을 이용해 DOM에 접근할 때 주로 사용
// 이곳에서 data를 변경하면 무한루프가 일어날 수 있다.
updated(){
    console.log("updated");
},
// 인스턴스가 해체되기 직전에 호출하기 때문에 
// 이 단계에서 이벤트 리스너를 해제하는 등 인스턴스가 사라지기 전에 해야 할 일들을 한다.
beforeDestroy(){
    console.log("beforeDestroy");
},
// 해체가 끝난 이후기 때문에 인스턴스의 속성에 접근할 수 없다.
destroy(){
    console.log("destroy");
}
```


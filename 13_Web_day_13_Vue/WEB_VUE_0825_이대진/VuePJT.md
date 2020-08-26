> ## Vue의 구조



### Vue CLI

Vue-CLI는 Vue에서 공식적으로 지원하는 애플리케이션 개발 환경 설정 도구이다.

Vue CLI를 사용하여 Vue 프로젝트를 생성하면 복잡한 웹팩 세팅을 간단하게 진행할 수 있도록 도와주며, 개발 과정에서 발생하는 변동사항을 페이지에 실시간으로 업데이트해 주어서 개발자가 개발에만 집중할 수 있도록 해준다.



#### 컴포넌트 구조

SPA에서 사용되는 여러 컴포넌트들은 각각의 파일로 나뉘어져 있다. 각각의 컴포넌트 파일은 단일 파일 컴포넌트(SFC: Single File Components)라고 한다. SFC는 각각 세가지 요소들(\<tenplate>, \<script>, \<style>)로 구성되어 있다.

* **\<template>**: 템플릿을 정의할 수 있다. SFC 환경에서는 한 컴포넌트 당 하나의 template만 선언할 수 있다.
* **\<script>**: DOM을 제어하는 JavaScript 코드를 작성하고, 해당 컴포넌트가 자신을 export하거나 다른 컴포넌트를 import할 수 있는 요소이다. 한 컴포넌트당 하나의 script만 선언할 수 있다.
* **\<style>**: 기존 HTML에서 사용하는 \<style> 태그와 동일하다. 다른 요소들과는 다르게 하나의 컴포넌트에서 여러 개의 \<style>요소를 선언할 수 있다. \<style> 태그는 두가지 종류가 있다.
  * 전역에 적용되는 \<style>요소
  * 해당 \<style>문이 작성된 컴포넌트에만 적용시킬 수 있는 scoped style

### 프로젝트 구조

Vue CLI를 사용하여 프로젝트를 생성하면 아래와 같이 구성된다.

```bash
.
├─ README.md
├─ package-lock.json
├─ package.json
├─ babel.config.js
├─ .gitignore
├─ .browserslistrc
└─ src
   ├─ main.js
   ├─ App.vue
   ├─ views
   ├─ store
   ├─ router
   ├─ components
   └─ assets
```



* **_main.js_**: 가장 먼저 실행되는 JavaScript 파일로 Vue 인스턴스를 생성해주는 역할을 한다.
* **_App.vue_**: 최상위 컴포넌트이다.
* **_views/_**: router에서 보여주는 컴포넌트 파일들을 모아두는 폴더이다.
* **_store/_**: 애플리케이션의 상태를 보관하는 폴더이다.
* **_router/_**: 해당 폴더 안의 JavaScript 파일들을 통해 라우트가 컴포넌트와 매핑된다.
* **_components/_**: 컴포넌트 파일들을 모아두는 폴더이다.
* **_assets/_**: 프로젝트에 필요한 자원들을 모아두는 폴더이다.


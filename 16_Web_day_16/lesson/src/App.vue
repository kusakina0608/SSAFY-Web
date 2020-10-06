<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/main">Main</router-link> |
      <router-link to="/intro">Intro</router-link> |
      <router-link to="/testforemit">Test4Emit</router-link> |
      <router-link to="/vuexex">VuexEx</router-link> |
      <a href="https://www.google.co.kr/">Google</a>
      <button @click="moveRouter">이동</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods:{
    moveRouter(){
      console.log(this.$route);
      console.log(this.$router);
      this.$router.push("/test");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

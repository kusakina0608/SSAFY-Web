<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand @click="main" style="cursor: pointer">이대진</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item @click="main">Main</b-nav-item>
            <b-nav-item @click="about">About</b-nav-item>
            <b-nav-item @click="skill">Skill</b-nav-item>
            <b-nav-item @click="stack">Stack</b-nav-item>
            <b-nav-item @click="portfolio">Portfolio</b-nav-item>
            <b-nav-item @click="closing">Closing</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="h-100">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    main(){
      this.$router.push("/");
    },
    about(){
      this.$router.push("/about");
    },
    skill(){
      this.$router.push("/skill");
    },
    stack(){
      this.$router.push("/stack");
    },
    portfolio(){
      this.$router.push("/portfolio");
    },
    closing(){
      this.$router.push("/closing");
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

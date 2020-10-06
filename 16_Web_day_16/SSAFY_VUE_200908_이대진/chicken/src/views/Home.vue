<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/fried_chicken.png">
    </div>
    <div>
      <h1>{{this.$store.state.salt}}</h1>
    </div>
    <div>
      <h1>{{this.$store.state.message}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>
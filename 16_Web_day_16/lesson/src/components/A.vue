<template>
  <div>
      A입니다.
      {{ message }}
      <B text="안냥"></B>
  </div>
</template>

<script>
import B from "./B";
export default {
  components:{
    B
  },
  props:{
    text:String
  }
}
</script>

<style>

</style>
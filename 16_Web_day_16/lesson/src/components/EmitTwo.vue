<template>
  <div>
      <button @click="toEmit">클릭하면 Emit으로 갑니다(2단계)</button>
  </div>
</template>

<script>
export default {
    methods:{
        toEmit(){
            this.$emit("update", 10);
        }
    }
}
</script>

<style>

</style>
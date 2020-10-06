<template>
  <div>
      순살
      <button @click="getSalt">염지</button>
      <button @click="chicken">날 눌러줘</button>
  </div>
</template>

<script>
export default {
    props:{
        salt:Number
    },
    methods:{
        getSalt(){
            alert(this.salt);
        },
        chicken(){
            this.$emit("chicken", "치킨은 맛있다");
        }
    }
}
</script>

<style>

</style>
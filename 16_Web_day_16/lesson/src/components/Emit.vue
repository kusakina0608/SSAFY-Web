<template>
  <div>
      Emit
      <button @click="serveToParent">부모로 이벤트를 전달하기</button>
      <EmitTwo @update="serveToTestForEmit"></EmitTwo>
  </div>
</template>

<script>
import EmitTwo from "../components/EmitTwo";
export default {
    components:{
        EmitTwo
    },
    methods:{
        serveToParent(){
            this.$emit("check", 5);
        },
        serveToTestForEmit(num){
            alert("EmitTwo로부터 전달완료");
            alert(num);
            this.$emit("updateTwo", num);
        }
    }
}
</script>

<style>

</style>
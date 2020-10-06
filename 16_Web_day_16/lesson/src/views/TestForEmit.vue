<template>
  <div>
      test for Emit
      <Emit @check="showAlert" @updateTwo="showFinalAlert"></Emit>
  </div>
</template>

<script>
import Emit from "../components/Emit";
export default {
    components: {
        Emit
    },
    methods:{
        showAlert(num){
            alert("$emit 도착 완료");
            alert(num);
        },
        showFinalAlert(num){
            alert(num);
            alert("$emit 2단계를 거쳐서 최종 도착 완료");
        }
    }
}
</script>

<style>

</style>
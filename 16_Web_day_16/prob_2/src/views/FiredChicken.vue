<template>
  <div>
    후라이드 치킨
    <Fry :salt=salt @chicken2="hi"></Fry>
  </div>
</template>

<script>
import Fry from "../components/Fry";
export default {
    data(){
        return{
            salt: 30
        }
    },
    components: {
        Fry
    },
    methods:{
      hi(message){
        alert(message);
      }
    }
}
</script>

<style>

</style>
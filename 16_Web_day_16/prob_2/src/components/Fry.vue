<template>
  <div>
      튀김 {{salt}}
      <Chicken :salt=salt @chicken="fried"></Chicken>
  </div>
</template>

<script>
import Chicken from "../components/Chicken";
export default {
    props:['salt'],
    components:{
        Chicken
    },
    methods:{
        fried(message){
            this.$emit("chicken2", message);
        }
    }
}
</script>

<style>

</style>
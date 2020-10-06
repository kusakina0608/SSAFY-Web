<template>
  <div>
      child
      {{name}}
      <!-- {{$store.state.name}}<br> -->
      <button @click="changeData">클릭</button><br>
      <input v-model="inputData"/><br>
      <button @click="CHANGE_NAME('혜린')">혜린이로 변경</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
    data(){
        return {
            inputData: ""
        }
    },
    computed: {
        ...mapState(["name"])
    },
    methods:{
        ...mapMutations(["CHANGE_NAME"]),
        changeData(){
            this.$store.commit("CHANGE_NAME", this.inputData);
        }
    }
}
</script>

<style>

</style>
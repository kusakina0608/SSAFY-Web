<template>
  <div class="about">
    <div v-bind:key="data.id" v-for="data in hello">{{data.id}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default{
  data(){
    return {
      hello:""
    }
  },
  methods:{
    async getData(){
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.hello = data;
    }
  },
  mounted(){
    this.getData();
  }
}
</script>

<style>

</style>
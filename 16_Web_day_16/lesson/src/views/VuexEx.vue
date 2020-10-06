<template>
  <div>
      vuex
      {{$store.state.name}}
      <Child></Child>
  </div>
</template>

<script>
import Child from '../components/Child';
export default {
    components:{
        Child
    }
}
</script>

<style>

</style>
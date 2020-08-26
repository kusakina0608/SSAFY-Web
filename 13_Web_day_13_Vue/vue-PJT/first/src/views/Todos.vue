<template>
    <div class="todos">
        <b-card header="Korean JSON의 할 일 목록!!" style="max-width: 40rem; margin: auto; margin-top: 10vh;" class="mb-2" border-variant="info" align="left">
            <b-list-group>
                <b-list-group-item v-bind:key="todo.id" v-for="todo in todos">
                    <b-form-checkbox v-model="todo.completed">
                        {{todo.title}}
                    </b-form-checkbox>
                </b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>
<script>
import axios from "axios";

export default{
  data(){
    return {
      todos: ""
    }
  },
  methods:{
    async getData(){
      const {data} = await axios.get("https://koreanjson.com/todos");
      this.todos = data;
    }
  },
  mounted(){
    this.getData();
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="edit">
      {{$store.state.salt}}
      {{$store.state.message}}
      <br>
      {{salt}}
      {{message}}
    <b-form-group>
      <b-form-input v-model="salt" placeholder="소금양을 입력하세요" :type="'number'" class="w-25 ml-auto mr-auto mb-3"></b-form-input>
      <b-form-input v-model="message" placeholder="메시지를 입력하세요" class="w-25 ml-auto mr-auto mb-3"></b-form-input>
      <b-button @click.prevent="updateStore" variant="success" class="ml-auto mr-5">적용하기</b-button>
      <b-button variant="danger" class="mr-auto">취소하기</b-button>
    </b-form-group>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  data(){
    return {
      salt: "",
      message: ""
    }
  },
  created(){
    this.salt = this.$store.salt;
    this.message = this.$store.salt;
  },
  methods:{
    ...mapMutations(["SET_SALT", "SET_MSG"]),
    updateStore(){
      this.SET_SALT(this.salt);
      this.SET_MSG(this.message);
    }
  }
}
</script>
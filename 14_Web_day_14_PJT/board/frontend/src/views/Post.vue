<template>
  <div>
    <b-form class="m-5 text-left" @submit.prevent="onPost" @reset="onReset">
      <b-form-group id="input-group-1" label="제목" label-for="input-title" description="글 작성시 타인에 대한 배려와 책임을 담아주세요.">
        <b-form-input id="input-title" name="title" v-model="form.title" type="text" required placeholder="제목을 입력해 주세요" class="mb-4"></b-form-input>
        <b-form-input id="input-content" name="content" v-model="form.content" required placeholder="내용을 입력해 주세요"></b-form-input>
      </b-form-group>
      <b-form-file v-model="form.file" name="file" :state="Boolean(form.file)" placeholder="파일을 선택하거나 여기에 드롭하세요!" drop-placeholder="지금 놓으세용!!!" class="mb-4"></b-form-file>
      <div class="mb-4">Selected file: {{ form.file ? form.file.name : '' }}</div>
      <div class="d-flex justify-content-center">
        <b-button type="submit" variant="primary" class="mr-5">작성하기</b-button>
        <b-button type="reset" variant="danger" class="ml-5">취소하기</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
import { BASE_URL } from "@/components/common/BaseURL.vue";
import axios from "axios";
  export default {
    data() {
      return {
        form: {
          title: '',
          content: '',
          file: null,
          userId: sessionStorage.getItem('id')
        }
      }
    },
    methods: {
      async onPost(evt) {
        const {title, content, file, userId} = this.form;
        if(!title){
          alert("글 제목을 입력해주세요");
        }else if(!content){
          alert("글 내용을 입력해주세요");
        }else if(!file){
          alert("파일을 선택해주세요");
        }else{
          try {
            const formdata = new FormData();
            formdata.append('title', title);
            formdata.append('content', content);
            formdata.append('file', file);
            formdata.append('userId', userId);
            const {data} = await axios.post(`${BASE_URL}/api/post`, formdata, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            if(data.upload){
              alert("글 작성이 완료되었습니다.");
              this.$router.push("/");
            }
          } catch(error){
            alert("글 작성이 실패하였습니다.");
          }
        }
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.title = ''
        this.form.content = ''
        this.form.file = null
      }
    }
  }
</script>

<style>

</style>
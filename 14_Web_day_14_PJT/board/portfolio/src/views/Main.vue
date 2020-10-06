<template>
  <div>
  <b-carousel
    id="carousel-1"
    style="text-shadow: 0px 0px 2px #000"
    v-model="slide"
    :interval="2000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      caption="저는 SSAFY C반 출신 개발자 이대진 입니다."
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="저는 최고가 되기 위해 최선을 다합니다."
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="사회에 공헌하는 개발자가 되고 싶습니다."
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.carousel-caption {
}
</style>
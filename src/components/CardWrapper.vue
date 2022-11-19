<template>
  <div class="target">
    <h1 class="h1movie">FILM ORIGINALI NETFLIX</h1>
    <div class="container">
      <CardComp v-for="(el, i) in movie" :key="i" :movieCard="el" />
    </div>
  </div>
</template>

<script>
import CardComp from "./CardComp";
import state from "../store";
export default {
  name: "CardWrapper",
  components: {
    CardComp,
  },
  computed: {
    movie: function () {
      return state.movie;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
div {
  @include sliderWrapper;
  .h1movie {
    font-size: 4vw;
    color: rgb(229, 9, 20);
    padding-bottom: 15px !important;
    align-self: center;
  }
}
</style>
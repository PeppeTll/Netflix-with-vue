<template>
  <div>
    <div class="container">
      <CardComp
        v-for="(el, i) in movie"
        :key="i"
        :movieCard="el"
        v-show="i >= min && i < max"
      />
      <div id="prev" @click="prev">
        <font-awesome-icon icon="fa-solid fa-backward-step" />
      </div>
      <div id="next" @click="next">
        <font-awesome-icon icon="fa-solid fa-forward-step" />
      </div>
    </div>
  </div>
</template>

<script>
import CardComp from "./CardComp";
import state from "../store";
import { nextSlideMovie } from "../store";
import { prevSlideMovie } from "../store";

export default {
  name: "CardWrapper",
  components: {
    CardComp,
  },
  methods: {
    next: function () {
      return nextSlideMovie(this.movie);
    },
    prev: function () {
      return prevSlideMovie()
    },
  },
  computed: {
    movie: function () {
      return state.movie;
    },
    min: function() {
      return state.minIndexMovie
    },
    max: function() {
      return state.maxIndexMovie
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';
div {
  @include sliderWrapper
}
</style>
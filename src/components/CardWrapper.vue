<template>
  <div>
    <div class="container">
      <CardComp
        v-for="(el, i) in movie"
        :key="i"
        :movieCard="el"
        v-show="i >= min && i < max"
      />
      <div class="wrapperPrev" >
        <font-awesome-icon icon="fa-solid fa-backward-step" id="prev" @click="prev" />
      </div>
      <div class="wrapperNext">
        <font-awesome-icon icon="fa-solid fa-forward-step" id="next" @click="next" />
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
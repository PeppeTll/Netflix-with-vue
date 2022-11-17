<template>
  <section>
    <Landing />
    <h1>FILM ORIGINALI NETFLIX</h1>
    <CardWrapper v-show="filter.length >= 1" class="child" />
    <h1>SERIE ORIGINALI NETFLIX</h1>
    <SeriesCardWrapper v-show="filter.length >= 1" class="child" />
  </section>
</template>

<script>
import CardWrapper from "./CardWrapper";
import SeriesCardWrapper from "./SeriesCardWrapper.vue";
import Landing from "./LandingPage";
import state from "../store";

export default {
  name: "MainComp",
  components: {
    CardWrapper,
    Landing,
    SeriesCardWrapper,
  },
  computed: {
    filter: function () {
      return state.filter;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';
section {
  .child {
    @include container;
    display: block;
    max-width: 100%
  }
  h1 {
    @include container;
    margin: 0;
    color: white;
  }
}
</style>
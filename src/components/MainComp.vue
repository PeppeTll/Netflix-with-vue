<template>
  <section>
    <Landing class="landing" />
    <CardWrapper class="child movie" id="movies"/>
    <SeriesCardWrapper  class="child" id="series"/>
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
@import "../assets/scss/mixins";
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .child {
    padding: 10px 30px !important;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    
  }
  h1 {
    padding: 10px 30px !important;
    margin: 0;
    color: white;
  }
}
</style>
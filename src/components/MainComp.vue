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
@import "../assets/scss/mixins";
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .child {
    padding: 10px 30px !important;
    display: flex;
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
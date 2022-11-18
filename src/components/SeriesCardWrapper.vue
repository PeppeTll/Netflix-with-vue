<template>
  <div>
    <h1 class="h1series">SERIE ORIGINALI NETFLIX</h1>
    <div class="container">
      <SeriesCard 
        v-for="(el, i) in seriesList" 
        :key="i" 
        :seriesCard="el"
      />
    </div>
  </div>
</template>

<script>
import SeriesCard from "./SeriesCardComp.vue";
import state from "../store";
export default {
  name: "SeriesCardWrapper",
  components: {
    SeriesCard,
  },
  data() {
    return {
    };
  },
  computed: {
    seriesList: function () {
      return state.series;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';
div {
  @include sliderWrapper;
  .h1series{
    font-size: 4vw;
    color: rgb(229,9,20);
    padding-bottom: 15px !important;
    align-self: center;
  }
}
</style>



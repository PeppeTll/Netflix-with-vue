<template>
  <div>
    <div class="container">
      <SeriesCard 
        v-for="(el, i) in seriesList" 
        :key="i" 
        :seriesCard="el" 
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
import SeriesCard from "./SeriesCardComp.vue";
import state from "../store";
import { nextSlideSeries } from "../store";
import { prevSlideSeries } from "../store";
export default {
  name: "SeriesCardWrapper",
  components: {
    SeriesCard,
  },
  data() {
    return {
    };
  },
  methods: {
    next: function () {
      return nextSlideSeries(this.seriesList);
    },
    prev: function () {
      return prevSlideSeries()
    },
  },
  computed: {
    seriesList: function () {
      return state.series;
    },
    
    min: function() {
      return state.minIndexSeries
    },
    max: function() {
      return state.maxIndexSeries
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



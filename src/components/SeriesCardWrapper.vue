<template>
  <div>
    <div class="container">
      <SeriesCard 
        v-for="(el, i) in seriesList" 
        :key="i" 
        :seriesCard="el" 
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
      return prevSlideSeries(this.seriesList)
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



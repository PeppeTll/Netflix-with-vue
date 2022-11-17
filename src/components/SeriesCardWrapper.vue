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
export default {
  name: "SeriesCardWrapper",
  components: {
    SeriesCard,
  },
  data() {
    return {
      min: 0,
      max: 7,
    };
  },
  methods: {
    next: function() {
      this.min += 7
      this.max += 7
      if (this.max > this.seriesList.length) {
        this.max = this.seriesList.length
        this.min = this.seriesList.length - 7
      }
    },
    prev: function() {
      this.min -= 7
      this.max -= 7
      if (this.min <= 0) {
        this.max = 7
        this.min = 0
      }
    }
  },
  computed: {
    seriesList: function () {
      return state.series;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  .container {
    display: flex;
    width: 99%;
    height: 515px;
    // border: 2px solid white;
    column-gap: 10px;
    overflow: hidden;
    padding: 10px;
    position: relative;

    #prev {
      position: absolute;
      font-size: 60px;
      color: white;
      left: 0;
      top: 45%;
      cursor: pointer;
    }

    #next {
      position: absolute;
      font-size: 60px;
      color: white;
      right: 0;
      top: 45%;
      cursor: pointer;
    }
  }
}
</style>



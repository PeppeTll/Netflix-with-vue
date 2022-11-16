<template>
  <div>
    <SeriesCard v-for="(el, i) in seriesList" :key="i" :seriesCard=el />
  </div>
</template>

<script>
import SeriesCard from './SeriesCardComp.vue';
import state from '../store';
  export default {
    name: 'SeriesCardWrapper',
    components: {
      SeriesCard
    },
  computed: {
    seriesList: function() {
      return state.series
    }
  },
  }
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 15px;
  padding: 10px 30px;
  // background: rgba(0, 0, 0, 0.073);
  // backdrop-filter: blur(6px);
}
</style>
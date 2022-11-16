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

export default {
  name: "CardWrapper",
  components: {
    CardComp,
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
      if (this.max > this.movie.length) {
        this.max = this.movie.length
        this.min = this.movie.length - 7
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
    movie: function () {
      return state.movie;
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
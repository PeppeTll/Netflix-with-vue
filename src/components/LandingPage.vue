<template>
  <div class="landingWrapper">
    <figure>
      <img
        :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
        alt=""
      />
      <div class="info">
        <h1>{{ movie.original_title }}</h1>
        <p>{{ movie.title }}</p>
      </div>
    </figure>
  </div>
</template>

<script>
import state from "../store";
import { fetchMovie } from "../store";

export default {
  name: "LandingPage",
  computed: {
    movie: function() {
      return state.singleMovieObject
    }
  },
  beforeCreate() {
    fetchMovie();
  },
};
</script>

<style lang="scss" scoped>
.landingWrapper {
  position: relative;
  max-width: 100vw;
  height: 50vw;
  margin: 0;
  overflow: hidden;

  figure {
    margin: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }

  .info {
    color: rgb(229, 9, 20);
    font-size: 50px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgb(34, 41, 195);
    background: linear-gradient(
      180deg,
      rgb(34 41 195 / 0%) 0%, hsl(0deg 0% 0% / 62%) 86%);
  }
}
</style>
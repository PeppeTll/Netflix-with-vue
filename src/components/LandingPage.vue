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
    movie: function () {
      return state.singleMovieObject;
    },
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
  height: 40vw;
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
    color: rgb(254, 254, 254);
    position: absolute;
    font-size: 3vw;
    bottom: 0;
    left: 0%;
    background: rgba(0, 0, 0, 0.414);
    backdrop-filter: blur(8px);
    h1, p {
      padding: 15px !important;
    }
  }
}
</style>
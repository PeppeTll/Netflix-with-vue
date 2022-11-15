<template>
  <div class="landingWrapper">
    <figure>
      <img
        :src="`https://image.tmdb.org/t/p/original${movieCard.backdrop_path}`"
        alt=""
      />
      <div class="info">
        <h1>{{ movieCard.original_title }}</h1>
        <p>{{ movieCard.title }}</p>
      </div>
    </figure>
  </div>
</template>

<script>
import state from "../store";
import axios from "axios";

export default {
  name: "LandingPage",
  data() {
    return {
      movieCard: {},
    };
  },
  methods: {
    randomID: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    fetchMovie: function () {
      return axios
        .get(
          `${state.urlBase}${state.singleMovie}${this.randomID(200, 90000)}`,
          {
            params: {
              api_key: state.apiKey,
            },
          }
        )
        .then((res) => {
          console.log(res.status, res.data, res);
          if (res.data.backdrop_path === null) {
            return this.fetchMovie();
          }
          this.movieCard = res.data;
          console.log(this.movieCard);
        })
        .catch((error) => {
          if (error.data === undefined) {
            return this.fetchMovie();
          }
          console.warn(error.data);
        });
    },
  },
  created() {
    this.fetchMovie();
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.info {
  color: white;
  font-size: 50px;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
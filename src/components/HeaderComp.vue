<template>
  <section>
    <div class="navLogo">
      <figure>
        <img :src="require(`../assets/${imgLogo}`)" alt="" />
      </figure>
      <nav>
        <ul>
          <li v-for="(el, i) in navList" :key="i">
            <a href="#">{{ el }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="search">
      <input
        type="text"
        v-model="filter"
        v-show="searchIcon"
        @keyup.enter="apiCall"
        @change="showApiCall"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        @click="searchIcon = !searchIcon"
      />
      <font-awesome-icon icon="fa-solid fa-bell" />
    </div>
  </section>
</template>

<script>
import state from "../store.js";
import axios from 'axios'

export default {
  data() {
    return {
      imgLogo: "img/logo.png",
      navList: [
        "Home",
        "SerieTV",
        "Film",
        "Nuovi e Popolari",
        "La mia lista",
        "Sfoglia per lingua",
      ],
      filter: "",
      searchIcon: false,
    };
  },
  methods: {
    apiCall: function () {
      return axios
        .get(`${state.urlBase}${state.searchMovie}`, {
          params: {
            api_key: state.apiKey,
            lenguage: "it-IT",
            query: this.filter,
          },
        })
        .then((res) => {
          // console.log(res.data);
          state.movie = res.data.results;
          // console.log(state.movie);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  computed: {
    showApiCall: function () {
      return this.apiCall()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

section {
  @include container;
  background-color: rgb(10, 10, 10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: fixed;
  // right: 0;
  // left: 0;

  .navLogo {
    display: flex;
    flex-wrap: wrap;

    figure {
      width: 130px;
      padding: 0;
      margin: 0;

      img {
        width: 100%;
      }
    }

    nav {
      color: white;
      display: flex;
      align-items: center;

      ul {
        list-style: none;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin: 0;
        flex-wrap: wrap;

        a {
          text-decoration: none;
          color: currentColor;
        }
      }
    }
  }

  #search {
    color: white;
    display: flex;
    gap: 15px;
    font-size: 20px;

    svg {
      cursor: pointer;
    }
  }
}
</style>
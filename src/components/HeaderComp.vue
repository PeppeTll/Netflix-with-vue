<template>
  <section>
    <div class="navLogo">
      <figure>
        <img :src="require(`../assets/${imgLogo}`)" alt="" />
      </figure>
      <nav>
        <ul>
          <li v-for="(el, i) in navList" :key="i">
            <a :href="el.href">{{ el.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="search">
      <input type="text" v-model="filter" v-show="searchIcon" />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        @click="searchIcon = !searchIcon"
      />
      <font-awesome-icon icon="fa-solid fa-bell" />
    </div>
  </section>
</template>

<script>
import { apiCall } from "../store";
import { seriesCall } from "../store";
import { popularMovies } from "../store";
import { popularSeries } from "../store";
import state from "../store";

export default {
  data() {
    return {
      imgLogo: "img/logo.png",
      navList: [
        {
          name: "Home",
          href: "../components/HeaderComp.vue",
        },
        {
          name: "SerieTV",
          href: "#series",
        },
        {
          name: "Film",
          href: "#movies",
        },
        {
          name: "Nuovi e Popolari",
          href: "#",
        },
        {
          name: "La mia lista",
          href: "#",
        },
        {
          name: "Sfoglia per lingua",
          href: "#",
        },
      ],
      filter: "",
      searchIcon: false,
    };
  },
  watch: {
    filter: function (newValue) {
      state.filter = newValue;
      apiCall();
      seriesCall();
      if (state.filter === "") {
        popularMovies();
        popularSeries();
      }
    },
  },
  beforeCreate() {
    popularMovies();
    popularSeries();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

section {
  @include container;
  padding: 20px;
  background-color: rgb(10, 10, 10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  left: 0;
  flex-wrap: wrap;
  z-index: 1;

  .navLogo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

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
        gap: 15px;
        justify-content: center;
        align-items: center;
        padding: 0;
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
    gap: 30px;
    font-size: 20px;

    svg {
      cursor: pointer;
    }
  }
}
</style>
<template>
  <section>
    <div class="wrapperCard">
      <div id="card">
        <img :src="getImageFunc()" alt="" />
      </div>
      <div class="CardInfo">
        <h1>
          {{ seriesCard.original_name }}
        </h1>
        <h3>
          {{ seriesCard.name }}
          <img
            class="flags"
            :src="getFlag(seriesCard.original_language)"
            alt=""
          />
        </h3>
        <h2>
          <font-awesome-icon
            icon="fa-solid fa-star"
            v-for="(el, i) in starsList"
            :key="i"
            :class="el <= stars() ? 'goldStar' : 'whiteStar'"
          />
        </h2>
        <p>
          {{ seriesCard.overview }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { getImage } from "../store";
export default {
  name: "SeriesCard",
  props: {
    seriesCard: {
      type: Object,
    },
  },
  data() {
    return {
      flag: {
        en: require("../assets/img/en.png"),
        it: require("../assets/img/it.png"),
        fr: require("../assets/img/fr.png"),
        es: require("../assets/img/es.png"),
      },
      starsList: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    getFlag: function (unicode) {
      if (this.flag[unicode]) {
        return this.flag[unicode];
      } else {
        return this.flag["en"];
      }
    },
    getImageFunc: function () {
      return getImage(this.seriesCard);
    },
    stars: function () {
      return Math.ceil(this.seriesCard.vote_average / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  .wrapperCard {
    display: flex;
    width: 342px;
    flex-grow: 1;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    position: relative;
    transition: all 1.5s ease-in-out;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.419);
    #card {
      /* aggiungere un bordo alle card */
      border-radius: 20px;
      width: 100%;
      // overflow: hidden;
      transition: all 1.5s ease-in-out;
      img {
        max-width: 100%;
        border-radius: 20px;
      }
    }
    .CardInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      color: white;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 100%;
      padding: 20px !important;
      opacity: 0;
      transition: all 0.8s ease-in-out;
      backdrop-filter: blur(8px);
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      h1 {
        font-size: 60px;
        margin: 0;
        color: rgb(229, 9, 20);
      }
      h3 {
        display: flex;
        align-items: center;
        column-gap: 10px;
      }
      .goldStar {
        color: gold;
      }
      .whiteStar {
        color: white;
      }
      .flags {
        width: 20px;
        height: 20px;
      }
    }
    &:hover {
      border: 2px solid rgb(229, 9, 20);
      padding: 5px;
      transition-delay: 0.3s;
      #card {
        -webkit-box-shadow: 12px 2px 15px 5px rgb(229, 9, 20);
        box-shadow: 12px 2px 15px 5px rgb(229, 9, 20);
      }
      .CardInfo {
        opacity: 1;
        top: 0;
        background-color: rgba(0, 0, 0, 0.507);
        transition-delay: 0.2s;
      }
    }
  }
}
</style>
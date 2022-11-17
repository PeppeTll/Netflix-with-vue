<template>
  <section>
    <div class="wrapperCard">
      <div id="card">
        <img :src="getImageFunc()" alt="" />
      </div>
      <div class="CardInfo">
        <h1>
          {{ seriesCard.original_name}}
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
            v-for="(el, i) in starsList" :key="i" 
            :class="(el <= stars()) ? 'goldStar': 'whiteStar'"
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
      starsList: [
        1,
        2,
        3,
        4,
        5
      ]
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
    stars: function() {
      return Math.ceil(this.seriesCard.vote_average / 2)
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  .wrapperCard {
    display: flex;
    width: 342px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    position: relative;
    transition: all 1.5s ease-in-out;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.047);
    #card {
      /* aggiungere un bordo alle card */
      border-radius: 20px;
      max-width: 342px;
      max-height: 470px;
      overflow: hidden;
      transition: all 1.5s ease-in-out;
      img {
        max-width: 100%;
      }
    }
    .CardInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      color: white;
      position: absolute;
      height: 100%;
      left: 345px;
      padding: 20px !important;
      opacity: 0;
      transition: all 0.2s ease-in-out;
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
      width: 900px;
      transition-delay: 0.3s;
      #card {
        -webkit-box-shadow: 12px 2px 15px 5px rgb(229, 9, 20);
        box-shadow: 12px 2px 15px 5px rgb(229, 9, 20);
      }
      .CardInfo {
        opacity: 1;
        transition-delay: 1.6s;
      }
    }
  }
}
</style>
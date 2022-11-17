<template>
  <section>
    <div class="wrapperCard">
      <div id="card">
        <img :src="getImageFunc()" alt="" />
      </div>
    </div>
    <!-- <div class="CardInfo">
      <h4>
        {{ movieCard.original_title }}
      </h4>
      <p>
        {{ movieCard.title }} | <img class="icon" :src="getFlag(movieCard.original_language)" alt="">
      </p> -->
    <!-- </div> -->
  </section>
</template>

<script>
/* getUnicodeFlagIcon is not optimizated for windows 11 */
// import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { getImage } from "../store";

export default {
  props: {
    movieCard: {
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
      return getImage(this.movieCard);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  .wrapperCard {
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    #card {
      /* aggiungere un bordo alle card */
      border-radius: 20px;
      max-width: 342px;
      max-height: 470px;
      overflow: hidden;

      img {
        max-width: 100%;
      }
    }

    &:hover {
      border: 2px solid rgb(229, 9, 20);
      padding: 5px;
      transition: all 500ms ease-in-out;
      #card {
        max-width: 335px;
        max-height: 465px;
        transition: all 500ms ease-in-out;
      }
    }
  }
}

// .CardInfo {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-content: center;

//   h4,
//   p {
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     gap: 5px;
//     margin: 0;

//     .icon {
//       width: 20px;
//       height: 20px;
//     }
//   };
// }
</style>
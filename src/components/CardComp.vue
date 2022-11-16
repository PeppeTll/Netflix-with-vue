<template>
  <section>
    <div id="card">
        <img
          :src="`https://image.tmdb.org/t/p/w342${movieCard.poster_path}`"
          alt=""
        />
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
    getFlag: function(unicode) {
      if (this.flag[unicode]) {
        return this.flag[unicode]
      } else {
        return this.flag['en']
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section {

      img {
        width: 100%;
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
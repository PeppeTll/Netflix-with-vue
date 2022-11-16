<template>
  <section>
    <div id="card">
      <figure>
        <img
          :src="`https://image.tmdb.org/t/p/w342${seriesCard.poster_path}`"
          alt=""
        />
      </figure>
    </div>
    <div class="CardInfo">
      <h4>
        {{ seriesCard.original_name }}
      </h4>
      <p>
        {{ seriesCard.name }} |
        <img class="icon" :src="getFlag(seriesCard.original_language)" alt="" />
      </p>
    </div>
  </section>
</template>

<script>
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
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 430px;
  color: white;

  #card {
    width: 250px;
    height: 360px;
    position: relative;
    overflow: hidden;

    figure {
      z-index: -1;
      margin: 0;

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
      }
    }
  }

  .CardInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;

    h4,
    p {
      display: flex;
      justify-content: center;
      align-content: center;
      gap: 5px;
      margin: 0;

      .icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
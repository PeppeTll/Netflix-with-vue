<template>
  <div>
    <CardComp v-for="(el, i) in movie" :key="i" :movieCard="el"/>
  </div>
</template>

<script>
import CardComp from "./CardComp";
import state from "../store";

export default {
  name: "CardWrapper",
  components: {
    CardComp,
  },
  computed: {
    movie: function () {
      return state.movie;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 15px;
  padding: 10px 30px;
}
</style>
<template>
  <div
    class="loading"
    v-motion
    :initial="{
      x: -150,
      opacity: 0,
    }"
    :enter="{
      x: 0,
      opacity: 1,
      transition: {
        x: {
          duration: 2600,
        },
        opacity: {
          duration: 2600,
        },
      },
    }"
  >
    <figure>
      <img :src="require('../assets/img/netflix.png')" alt="" />
    </figure>
  </div>
</template>

<script>
// import { Transform } from 'stream';
// import { filter } from 'vue/types/umd';

export default {
  name: "LoadingPage",
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  figure {
    aspect-ratio: 1/1;
    width: 35vw;
    img {
      width: 100%;
    }
  }
}
</style>
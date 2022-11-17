<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue';
import Main from './components/MainComp.vue';

export default {
  name: 'App',
  components: {
  Header,
  Main,
  }
}
</script>

<style lang="scss">
@import './assets/scss/mixins';

body {
  @include reset;
  background-color: rgb(20,20,20);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include reset;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>

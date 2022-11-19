<template>
  <div id="app" >
    <Header v-show="loading === true" />
    <Main v-show="loading === true" />
    <LoadingPage v-show="loading === false"/>
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue';
import Main from './components/MainComp.vue';
import LoadingPage from './components/LoadingComp.vue';
import state from './store';

export default {
  name: 'App',
  components: {
  Header,
  Main,
  LoadingPage
  },
  computed: {
    loading: function() {
      return state.loadingPage
    }
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

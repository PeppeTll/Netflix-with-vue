<template>
  <section>
    <Landing />
    <h1> ORIGINALI NETFLIX </h1>
    <CardWrapper />
  </section>
</template>

<script>
  import CardWrapper from './CardWrapper';
  import Landing from './LandingPage'

  export default {
    name: "MainComp",
    components: {
      CardWrapper,
      Landing,
    }
  }
</script>

<style lang="scss" scoped>
section {
  h1 {
    padding: 15px 30px;
    margin: 0;
    color: white
  }
}


</style>
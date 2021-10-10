<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Homepage from './components/Homepage'


export default {
  name: 'App',
  components: {
    Homepage
  },
}
</script>

<style lang="scss">
@import "./assets/all";
</style>

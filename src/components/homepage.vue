<template>
  <div id="homepage">
    <Header/>
    <router-view/>
    <Info/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Info from '@/components/info'
import Footer from '@/components/footer'
export default {
  name: 'Homepage',
  components: {
    Header,
    Info,
    Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

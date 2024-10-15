<template>
  <div id="app">
    <SiteHeader />
    <NavMenu />
    <router-view></router-view>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import NavMenu from './components/NavMenu.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  // cargar 
  components: {
    SiteHeader,
    NavMenu,
    SiteFooter
  }
}
</script>

<style>
#app {
	font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5efe8;
}
</style>
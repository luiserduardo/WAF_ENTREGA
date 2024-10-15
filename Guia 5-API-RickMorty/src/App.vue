<template>
  <div id="app">
    <!-- Tener cuidado con las convesiones, es necesario mas de una palabra en el nombre -->
    <CabeceraSitio />
    <CharacterList />
    <br>
    <FooterSitio />

  </div>
</template>

<script>
import CharacterList from './components/CharacterList.vue';
import CabeceraSitio from './components/CabeceraSitio.vue';
import FooterSitio from './components/FooterSitio.vue'


export default {
  name: 'App',
  components: {
    CabeceraSitio,
    CharacterList,
    FooterSitio
  },
};
</script>

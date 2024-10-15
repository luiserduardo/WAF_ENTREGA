<!-- Template es una plantilla reutilizable de vue -->
<template>
  <!-- Se tiene un div que contiene todos los elementos -->
  <div>

    <!-- Componente de filtrado -->
    <!-- Valores por los que permite filtrar, nombre, estado -->
    <!-- y una función que lo que hace "escuchar" para filtrar -->

    <!-- Se hace uso del componente de filtrado mandando los datos de nombre -->
    <CharacterFilters :initialName="filters.name" :initialStatus="filters.status" @update-filters="updateFilters" />

    <!-- div con los botones -->
    <div class="paginacion" v-if="characters.length > 0">
      <button @click="fetchCharacters(prevPage)" :disabled="!prevPage" class="boton-paginacion">
        PrevPage
      </button>

      <button @click="fetchCharacters(nextPage)" :disabled="!nextPage" class="boton-paginacion">
        NextPage
      </button>
    </div>
    <br>

    <!-- div con mensaje de carga -->
    <div v-if="loading">
      Cargando elementos.....
    </div>

    <!-- Si no hay personajes y no se está cargando, muestra el mensaje -->
    <div v-else-if="characters.length === 0 && !loading">
      No se encontraron personajes.
    </div>

    <!-- Grid contenedor con los personajes -->
    <div class="grid-personajes" v-else>
      <!-- Se hace uso de un ciclo for que por cada personaje se crea una tarjeta con el id y se le asigna una clase -->
      <div v-for="character in characters" :key="character.id" class="tarjeta-personaje">

        <!-- Se agrega la imagen y se le asigna el nombre correspondiente -->
        <img :src="character.image" :alt="character.name" />

        <!-- div con la información del personaje -->
        <div class="info-personaje">
          <!-- Párrafos de información -->
          <p><strong>{{ character.name }}</strong></p>
          <p><strong>Estado:</strong> {{ character.status }}</p>
          <p><strong>Especie:</strong> {{ character.species }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./CharacterList.js"></script>
<style src="../css/style.css"></style>

<template>

  <!-- Encabezado -->
  <h1 class="titulo">Personajes de "Rick y Morty"</h1>

  <!-- Campo de búsqueda que se hace uso en Character -->
  <div class="filtros">
    <input type="text" v-model="searchName" @input="onSearchChange" placeholder="Buscar por personaje..."
      class="entrada-busqueda" />

    <select v-model="selectedStatus" @change="onStatusChange" class="seleccion-estado">
      <option value="">Todos los estados</option>
      <option value="alive">Vivo</option>
      <option value="dead">Muerto</option>
      <option value="unknown">Desconocido</option>
    </select>
  </div>

</template>

<script src="./FiltersOpciones.js"></script>

<style src="../css/style.css"></style>

<template>
 <!-- Este apartado nos permite filtrar -->
  <div class="advanced-filters">
    <h3>Filtros</h3>

    <div class="filter-group">
      <label>Búsqueda:</label>
      <input type="text" v-model="filters.search" @input="emitFilters" placeholder="Buscar por nombre...">
    </div>
    
    <div class="filter-group">
      <label>Categoría:</label>
      <select v-model="filters.category" @change="emitFilters">
        <option value="">Todos</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>Ordenar por precio:</label>
      <select v-model="filters.sortByPrice" @change="emitFilters">
        <option value="desc">Mayor a menor</option>
        <option value="asc">Menor a mayor</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>Ordenar por popularidad:</label>
      <select v-model="filters.sortByPopularity" @change="emitFilters">
        <option value="desc">Mayor a menor</option>
        <option value="asc">Menor a mayor</option>
      </select>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'AdvancedFilters',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filters: {
        category: '',
        sortByPrice: 'desc',
        sortByPopularity: 'desc',
        search: ''
      }
    }
  },
  methods: {
    emitFilters() {
      this.$emit('filters-changed', this.filters)
    }
  }
}
</script>

<style scoped>
.advanced-filters {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 15px;
  border-radius: 0.5rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

.filter-group {
  margin-bottom: 1.5rem; 
}

.filter-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

select, input[type="text"] {
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: none;
  color: #141414; 
  width: 90%;
  font-weight: bold;

  border: 1px solid #ccc;
}
.filter-group input::placeholder {
    color: rgba(255, 255, 255, 0.7); 
}
</style>
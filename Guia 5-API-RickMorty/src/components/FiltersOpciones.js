export default {
  name: 'CharacterFilters',
  props: {
    // Valores iniciales para los filtros
    // Primero indicar tipo
    // despues valor inicial
    initialName: {
      type: String,
      default: '',
    },
    initialStatus: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchName: this.initialName,
      selectedStatus: this.initialStatus,
    };
  },
  methods: {
    // Representand metd de cambi de estasdo
    onSearchChange() {
      // console.log('estamos buscando:', this.searchName);
      this.$emit('update-filters', {
        name: this.searchName,
        status: this.selectedStatus,
      });
    },

    onStatusChange() {
      this.$emit('update-filters', {
        name: this.searchName,
        status: this.selectedStatus,
      });
    },
  },
};



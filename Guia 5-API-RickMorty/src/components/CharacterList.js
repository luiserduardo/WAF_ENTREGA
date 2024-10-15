// <!-- Apartado del script  -->
// Importancio de axios para realizar  peticiones HTTP
import axios from 'axios';
import CharacterFilters from './FiltersOpciones.vue';

// Se exporta un objeto
export default {
    // El nombre del componente y el componente
    name: 'CharacterList',
    components: {
        CharacterFilters,
    },
    //   Se define data que son los datos que se van a devolver
    data() {
        // se van a retornar un arrar con los personajes, dos variables
        // que represetnan la pagina anterior y sigueinte
        // los datos filtrados vacios y el estado de carga
        return {
            characters: [],
            nextPage: null,
            prevPage: null,
            filters: {
                name: '',
                status: '',
            },
            loading: false,
        };
    },
    //   mounted es un hook que gestiona ciclos de vida
    mounted() {
        // recupera el la primera pagina al montar el componentes
        this.fetchCharacters();
    },
    /**  Metodos que pueden utilizar el componente 
    similar a repository en spring boot
   */
    methods: {
        /**  Metodo que actualiza al filtrar
     */
        updateFilters(newFilters) {
            console.log('Nuevos filtros recibidos en CharacterList:', newFilters);
            this.filters = { ...newFilters };
            console.log('Filtros actualizados:', this.filters);
            this.fetchCharacters();
        },

        // Fucniona asincrona valor url null
        async fetchCharacters(url = null) {
            // se cambia el estado de carga a verdadero porque se esta cargando
            this.loading = true;
            // try and catch para manejar error
            try {

                // constante de variable

                let apiUrl = 'https://rickandmortyapi.com/api/character';

                // Si existe la url se usa 
                if (url) {
                    apiUrl = url;
                } else {
                    // // Objeto con los parametros ingresados
                    const params = new URLSearchParams();
                    // nombre y estastus se agregan al filtro
                    if (this.filters.name) {
                        params.append('name', this.filters.name);
                    }
                    if (this.filters.status) {
                        params.append('status', this.filters.status);
                    }
                    // Se contruye la url con las palabras para especifcar lo que se quiere filtrar
                    apiUrl = `${apiUrl}?${params.toString()}`;
                }

                console.log('URL de la API:', apiUrl);

                // Solicituesd
                const response = await axios.get(apiUrl);
                // Personajes
                this.characters = response.data.results;
                // Siguiente pagina
                this.nextPage = response.data.info.next;
                //   Pagina anterior
                this.prevPage = response.data.info.prev;
            } catch (error) {
                console.error('Error al obtener personajes:', error);
                this.characters = [];
                this.nextPage = null;
                this.prevPage = null;
            } finally {
                // Una vez filtrado se cambia el estado a falso para que deje de cargar 
                this.loading = false;
            }
        },
    },

}
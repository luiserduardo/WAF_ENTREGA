<template>
  <main>
    <h2>Catálogo deportivo</h2>
    
    <AdvancedFilters :categories="categories" @filters-changed="applyFilters" />

    <div class="product-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
      >
        <img :src="getImageUrl(product.id)" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p class="category">Categoría: {{ product.category }}</p>
        <p>{{ product.description }}</p>
        <p class="price">Precio: ${{ product.price.toFixed(2) }}</p>
        <p class="popularity">Popularidad: {{ product.popularity }}/5</p>
      </div>
    </div>
  </main>
</template>

<script>
import AdvancedFilters from './AdvancedFilters.vue'

export default {
  name: 'MainContent',
  components: {
    AdvancedFilters
  },
  data() {
    return {
      activeFilters: {
        category: '',
        sortByPrice: 'desc',
        sortByPopularity: 'desc',
        search: ''
      },
      products: [
       
      { id: 1, name: 'Camiseta Running Nike Dri-Fit', category: 'Ropa deportiva', price: 29.99, description: 'Camiseta ligera y transpirable para correr', popularity: 4 },
  { id: 2, name: 'Pantalones Adidas Climalite', category: 'Ropa deportiva', price: 49.99, description: 'Pantalones deportivos con tecnología de absorción de sudor', popularity: 4.5 },
  { id: 3, name: 'Chaqueta North Face Impermeable', category: 'Ropa deportiva', price: 99.99, description: 'Chaqueta resistente al agua para actividades al aire libre', popularity: 5 },
  { id: 4, name: 'Ropa térmica Under Armour', category: 'Ropa deportiva', price: 59.99, description: 'Conjunto de ropa térmica para mantener el calor en climas fríos', popularity: 4 },

  { id: 5, name: 'Mancuernas ajustables Bowflex', category: 'Equipo deportivo', price: 299.99, description: 'Juego de mancuernas ajustables de alta calidad', popularity: 5 },
  { id: 6, name: 'Esterilla de yoga Liforme', category: 'Equipo deportivo', price: 79.99, description: 'Esterilla antideslizante con alineación corporal', popularity: 4.8 },
  { id: 7, name: 'Bicicleta estática Schwinn', category: 'Equipo deportivo', price: 499.99, description: 'Bicicleta estática con resistencia ajustable y pantalla LCD', popularity: 4.7 },
  { id: 8, name: 'Cinta de correr NordicTrack', category: 'Equipo deportivo', price: 899.99, description: 'Cinta de correr con programas de entrenamiento interactivos', popularity: 4.9 },

  { id: 9, name: 'Zapatillas de running Asics Gel-Nimbus', category: 'Calzado', price: 149.99, description: 'Zapatillas de running con excelente amortiguación y soporte', popularity: 5 },
  { id: 10, name: 'Botas de montaña Salomon X Ultra 3', category: 'Calzado', price: 179.99, description: 'Botas de senderismo impermeables y duraderas', popularity: 4.6 },
  { id: 11, name: 'Zapatillas de fútbol Nike Mercurial', category: 'Calzado', price: 199.99, description: 'Zapatillas para fútbol de alto rendimiento en césped', popularity: 4.9 },
  { id: 12, name: 'Zapatillas de baloncesto Air Jordan', category: 'Calzado', price: 249.99, description: 'Zapatillas icónicas para jugar al baloncesto con estilo y soporte', popularity: 5 },

      ]
    }
  },
  computed: {
    categories() {
      return [...new Set(this.products.map(product => product.category))];
    },
    filteredProducts() {
      return this.products
        .filter(product => 
          (!this.activeFilters.category || product.category === this.activeFilters.category) &&
          (this.activeFilters.search === '' || product.name.toLowerCase().includes(this.activeFilters.search.toLowerCase()))
        )
        .sort((a, b) => {
          if (this.activeFilters.sortByPrice !== '') {
            return this.activeFilters.sortByPrice === 'desc' ? b.price - a.price : a.price - b.price;
          }
          if (this.activeFilters.sortByPopularity !== '') {
            return this.activeFilters.sortByPopularity === 'desc' ? b.popularity - a.popularity : a.popularity - b.popularity;
          }
          return 0;
        });
    }
  },
  methods: {
    applyFilters(filters) {
      this.activeFilters = filters;
    },
    getImageUrl(productId) {
      const imageUrls = {
        1: 'https://www.sportline.com.sv/media/catalog/product/n/e/nessc651_100.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
        2: 'https://www.sportline.com.sv/media/catalog/product/d/j/dj1088-010-phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
        3: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a4d76a44-68aa-45a5-aae2-59d551a22165/CHI+MNK+DNA+WVN+JKT+CTS+GX.png',
        4: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d46a266f-c60f-40b5-8a0e-faa7c6df3359/M+J+ESS+STMT+ECO+PUFFER.png',
        5: 'https://eu.nikestrength.com/cdn/shop/files/DRDK-1020-STANDING_1200x.jpg?v=1725655932',
        6: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibXW4werdMgjIAZON6MfPyaDlmGClsqdz-w&s',
        7: 'https://i.btcdn.co/r/czozNzAwLGc6MTAwMHg/eebb76ea/741481-1061950-1.jpg',
        8: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HZSmOtPbM2gCC6EVw89ooko90nw9h_SMEw&s',
        10: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgzBj9aXCQNPXrl3rumIY5MXP-0xQ_U_B-w&s',
        9: 'https://hips.hearstapps.com/hmg-prod/images/zapatilla-running-nike-air-zoom-alphafly-next-1639046034.jpeg',
        11: 'https://http2.mlstatic.com/D_NQ_NP_884325-MLC53617942043_022023-O.webp',
        12: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFhUWGBoXGBYWFxgbFxsWGBUYFhUYFxgdHiggHyElGxcYITIiJTUrLi8uGB81OjMsNygtLisBCgoKDg0OFxAQGi0fHR0tLS0wLTYtLS0tLS0tLSstLS0tLS0tLS0tLS0vLi0tLS0tLS0tKy0tKy0tLS0rLS03L//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUIAgH/xABIEAABAwIDBAcDCgQDBgcAAAABAAIDBBESITEFBkFRBxMiYXGBkTJCoRQjUnKCkrHB0fAzQ2LhorLxFSREU5PCCBYlY3OD0v/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgYFBP/EACIRAQEBAAICAgEFAAAAAAAAAAABEQIhAzEEEkEFEyKRwf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFBd8ulCloJDBhfPM32mssGsJFwHvPG1sgCedl3989uihopqk2xMYcAPvSHKNv3iPK68qyOfK4vddxcS5z3aucTdxPiSfNSrIurZfS5U1NzFs+MNBtifUkC/K/Va/BasPTmWvLJ6AtwktdgmBcCCQ4YXMAyI5qvNm7xGCNsQhaQ0ZnrCCSTcm2E81xdqy9bJJMLDE7EW3va/fbP8Afel9JN269P7qb7Ue0GudBIQ5gu+OQYZGjmRexHe0kd67FLtGORoc12TgCL5ZHReXejqMurmEOLWsZK55BI7HVlhB5guc0W4qyotrSx6HIaDkOASLi4gV+rk7rueadj5MnP7VuQPs+osfNdZVBQDfTpTp6CV1O2N88zR2g0hrGki+Fzzc3tY5A6qfryVvVJ1lbVu1BqJiDf8A919uBUqxaVD0t19Td1Ps6MtHF09hfkHENBK5j+nSqY4tkoogWkhzTI8EEGxBuCoVQ70SQxsiYyMBosLk3J1JNuJNyuRtmp+UTGVwDHEAHCbglotfPuAHki5F3bt9NlNM9rKqF1MXG3WYscQPDEbB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'
     
      };
      return imageUrls[productId] || 'https://example.com/default-image.jpg'; 
    }
  }
}
</script>

<style scoped>

main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  text-align: left;
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.product-card .category {
  font-style: italic;
  color: #666;
}

.product-card .price {
  font-weight: bold;
  color: #007bff;
}

.product-card .popularity {
  color: #28a745;
}
</style>


<template>
  <div class="upcoming-releases container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Próximos Lanzamientos</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <h2 class="card-title">{{ product.name }}</h2>
        <div class="image-container">
          <img :src="product.image" :alt="product.name" />
        </div>
        <p class="description">{{ product.description }}</p>
        <a :href="product.link" class="more-info">Más información</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpcomingReleasesPage',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Nike Revolution 7',
          description: 'Zapatillas deportivas ideales para correr y entrenar.',
          image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ca929f7e-f433-46b7-8d83-1a6171c172ce/NIKE+REVOLUTION+7+EASYON.png',
          link: '#'
        },
        {
          id: 2,
          name: 'Zapatilla de Fútbol Phantom GX Club',
          description: 'Zapatillas de fútbol para hombres, perfectas para el juego en césped sintético.',
          image: 'https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDCDE4WTFC0H/1500x1500/655E8CF398290-Zapatilla-Futbol-Hombre-Phantom-Gx-Club-Tf.webp',
          link: '#'
        },
        {
          id: 3,
          name: 'Zapatillas de Triatlón',
          description: 'Diseñadas para el rendimiento en triatlones y entrenamientos intensos.',
          image: 'https://triathlonperu.vtexassets.com/arquivos/ids/324366/DA1334-146_1.jpg?v=638367045019000000',
          link: '#'
        },
        {
          id: 4,
          name: 'Guía de Zapatillas de Fútbol',
          description: 'Conoce las mejores opciones de zapatillas de fútbol.',
          image: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_375,c_limit/22123d88-990b-4216-a7fd-518a154f46ed/gu%C3%ADa-de-zapatillas-de-f%C3%BAtbol.jpg',
          link: '#'
        },
        {
          id: 5,
          name: 'Chaqueta Nike UV Repel',
          description: 'Chaqueta ligera y resistente al agua, perfecta para entrenamientos al aire libre.',
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20d039cf-317d-46ea-9ee0-1c6bcb8d496f/M+NK+UV+REPEL+APS+LT+WT+JKT.png',
          link: '#'
        },
        {
          id: 6,
          name: 'Chaqueta Nike',
          description: 'Chaqueta deportiva cómoda y elegante.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHGcEsrYgFULKA8sCLNVGkWzkMEil_S-9JQ&s',
          link: '#'
        }
      ]
    
    }
  }
}
</script>

<style scoped>
.upcoming-releases {
  background-color: #f9f9f9;
  padding: 20px; /* Añadido para un mejor espaciado */
}

.product-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 580px;
  margin: auto; 
  margin-bottom: 50px
  
}

.card-title {
  background-color: #f0f0f0;
  color: #0066cc;
  font-size: 28px; 
  padding: 12px;
  margin: 0;
  text-align: center;
}

.image-container {
  width: 100%;
  height: 0;
  padding-bottom: 75%; 
  position: relative;
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  padding: 12px;
  font-size: 20px; 
  line-height: 1.4;
  color: #333333;
  flex-grow: 1;
}

.more-info {
  display: block;
  text-align: center;
  padding: 10px 14px; 
  background-color: #0066cc;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.more-info:hover {
  background-color: #0052a3;
}




</style>
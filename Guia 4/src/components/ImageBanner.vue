<template>
  <div class="banner">
    <img v-for="(image, index) in images" :key="index" :src="image" :class="{ active: index === currentImageIndex }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
  
      images: [
        'https://cdn.25gramos.com/wp-content/uploads/sites/2/2022/06/nike-mercurial-25-gramos-lenders-4-scaled.jpg',
        'https://zshopp.com/wp-content/uploads/2022/04/amarillo-1-600x600.jpg',
        'https://img.freepik.com/fotos-premium/fondo-pesas-gimnasio-equipos-deportivos-flor-entrenamiento_968517-74492.jpg'
      ],
      currentImageIndex: 0
    }
  },
  mounted() {
    setInterval(this.nextImage, 5000)
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.banner img.active {
  opacity: 1;
}
</style>
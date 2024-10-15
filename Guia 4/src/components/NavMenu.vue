<template>
  <nav>
    <ul>
      <!-- Manejar rutas -->
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/about">Acerca</router-link></li>
      <li><router-link to="/lanzamientos">Lanzamientos</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #c7a17a;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}

nav ul li a:hover {
  background-color: #333;
  color: #fff; 
  transform: scale(1.05); 
}

nav ul li.active a {
  background-color: #4CAF50;
  color: white;
}
</style>
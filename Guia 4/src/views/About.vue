<template>
  <div class="about">

    
    <h1>Acerca de Nosotros</h1>
    
    <div class="about-image">
      <img src="https://static.vecteezy.com/system/resources/previews/008/577/973/non_2x/cool-old-man-doing-sit-up-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg" alt="Nuestra tienda" />
    </div>
    
    <div class="about-text">
      <p>
        <strong>Bienvenidos a Orante's Sport</strong>, tu tienda de confianza para ropa, calzado y equipo deportivo de alta calidad. Desde nuestros inicios, nos hemos dedicado a ofrecer a nuestros clientes no solo los mejores productos deportivos, sino también un servicio personalizado que garantice su total satisfacción.
      </p>
      
      <p>
        En Orante's Sport, entendemos que el deporte es esencial para un estilo de vida saludable y activo. Por eso, ofrecemos una amplia gama de productos, desde ropa deportiva de última generación y calzado especializado, hasta equipo para diversas disciplinas deportivas.
      </p>
      
      <h3>Nuestra Misión</h3>
      <p>
        Proveer productos deportivos de alta calidad a precios competitivos, ayudando a nuestros clientes a alcanzar sus metas y disfrutar de una vida activa.
      </p>
      
      <h3>Nuestra Visión</h3>
      <p>
        Ser líderes en el mercado deportivo, reconocidos por nuestra innovación, atención al cliente y compromiso con el bienestar de nuestros clientes.
      </p>
      
      <h3>Nuestros Valores</h3>
      <ul>
        <li><strong>Pasión:</strong> Nos apasiona el deporte y queremos transmitir esa pasión a nuestros clientes.</li>
        <li><strong>Calidad:</strong> Trabajamos solo con marcas líderes para garantizar que nuestros productos cumplan con los más altos estándares de calidad.</li>
        <li><strong>Compromiso:</strong> Estamos aquí para apoyar a nuestros clientes en cada paso de su viaje deportivo.</li>
        <li><strong>Sostenibilidad:</strong> Nos preocupamos por el medio ambiente, promoviendo soluciones y productos eco-amigables en el mundo del deporte.</li>
      </ul>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.about-text {
  text-align: justify;
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  max-width: 600px;
  margin-bottom: 40px;
}

.about-image {
  margin-top: 20px;
  text-align: center;
}

.about-image img {
  max-width: 50%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-top: 30px;
  color: #333;
}

ul {
  list-style-type: disc;
  text-align: left;
  margin-left: 40px;
  color: #555;
}

ul li {
  margin: 10px 0;
}

</style>

<template>
        <div className='banner'>
            <div className='content-banner'>
                <h1>Contactos</h1>
                <h2>¡Estamos aquí para ayudarte!</h2>
             
                <p><strong>Teléfono:</strong> 123-456-7890</p>
                <p><strong>Correo electrónico:</strong> info@orantesport.com</p>
                <p><strong>Dirección:</strong> Calle Principal #123, San Salvador</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://img.freepik.com/foto-gratis/vista-frontal-estadio-deportivo-fondo-luces_1409-4750.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-banner {
  text-align: center;
  color: #fff;
}

.content-banner h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.content-banner h2 {
  font-size: 2rem;
  font-weight: 500;
}

</style>


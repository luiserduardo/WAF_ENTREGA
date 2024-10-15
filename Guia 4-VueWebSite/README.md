# Nombre del Proyecto: Creación de una página web deportiva con Vue

## Descripción
Este proyecto consiste en una aplicación web deportiva que carga distintos componenetes para que el usuario pueda visualizar una plataforma de tienda deportiva donde puede ver los productos puede aplicar un filtrado avanzado para buscar, nuevo lanzamiento y contactarse con la tienda. Lo anteriormente mencionado funciona con vue para cargar contenido y las distintas rutas se guardan y configuran para poder acceder a ella. "Inicio", "Acerca de", "Lanzamientos", "Contacto".

Este proyecto consiste en

- **HeaderSite**: Es una cabecera con el nombre de la tienda y el logo
- **CharacterList**: Componente en el cual se muestran los elementos recuperados por medio de axios de la API
- **MainContent**: Elemento que permite cargar los distintos productos yel apartado para filtrar
- **FooterSite**: Es una footer con el nombre del autor y derechos de autor

## Tecnologías Utilizadas
- **Vue**.js: Un framework de JavaScript que se utiliza para construir interfaces. Permite la creación de componentes reutilizables que encapsulan HTML, CSS y JavaScript.En este caso utilizado para los personajes
- **Docker**: Una plataforma que permite crear, desplegar y ejecutar aplicaciones en contenedores. En este caso  para empaquetar la aplicación Vue.js y desplegarla de manera eficiente.
- **Nginx**: Un servidor web que se utilizará en el contexto de Docker para servir la aplicación Vue.js.


# Requisitos
- Tener instalado Node.js (versión 20 en adelante). Si no lo tienes, puedes consultar esta guía para la instalación: [Guía de instalación de Node.js](https://www.youtube.com/watch?v=29mihvA_zEA).
- Tener Docker instalado. Si no lo tienes, puedes consultar esta guía para la instalación: [Guía de instalación de Docker](https://www.youtube.com/watch?v=cWuirzMOwwg).
- Tener Nginx instalado. Si no lo tienes, puedes consultar esta guía https://techexpert.tips/es/nginx-es/nginx-instalacion-de-docker/

  # Instalación 

## Instalación y Uso con Dockerfile

1. **Clonar el Repositorio**:
   Presiona en "Code" y copia el enlace del repositorio. Luego, utilizando Git Bash, pega el enlace y ejecuta el comando.

   ![imagen](https://github.com/user-attachments/assets/fecff3a1-f94b-4d08-a4d0-e13d70018271)

   Una vez clonado o descomprimido, se mostrará de la siguiente forma:

   ![imagen](https://github.com/user-attachments/assets/2b7bf150-5bc9-4b16-a5b5-fe0ac3349228)

 ![imagen](https://github.com/user-attachments/assets/8e76ea12-eebc-483d-981c-c86ef290b409)


 2. **Instalar Dependencias**:
   Utilizando un editor de código, navega hasta la carpeta "Guia 4-VueWebSite" y ejecuta "npm install"

![imagen](https://github.com/user-attachments/assets/81898bc4-331b-4aa0-91df-c4ce1fe1336a)


![imagen](https://github.com/user-attachments/assets/4383b453-3b52-4ee0-82da-da2205aca892)


 3. **Probar funcionamiento**:
   Una vez instaladas las dependencias, ejecuta el comando `npm run serve`. Debes obtener la siguiente respuesta:

![imagen](https://github.com/user-attachments/assets/bf67bd3e-3d47-4ed7-bee3-a462e4d938e5)

 
 Verificamos que se esta corriendo e ingresamos a [http://localhost:8080/](http://localhost:8080/).


![imagen](https://github.com/user-attachments/assets/aeef9ff6-8ebb-4099-9e02-22c8959646f3)

 Con ello ya podremos visualizar los distintos apartados y hacer uso de las opciones de filtrado.


![imagen](https://github.com/user-attachments/assets/7f45437b-a453-4c1e-b7c7-c38b33efc33e)


![imagen](https://github.com/user-attachments/assets/1eb840b9-d299-4b20-ae15-699e04c24ddc)

![imagen](https://github.com/user-attachments/assets/2408793a-4a59-483a-95e9-873347cc71de)

![imagen](https://github.com/user-attachments/assets/12c329f3-9323-463f-9ec7-bd45475f1189)



   






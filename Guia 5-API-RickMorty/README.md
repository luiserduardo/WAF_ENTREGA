# Nombre del Proyecto: Consumo de API de Rick and Morty

## Descripción
Este proyecto consiste en una interfaz visual que consume un API publica de Rick and Morty, haaciendo uso de "axios", cargando los componentes en distintas tarjetas donde se puede visualizar la infomración, se tiene un apartao de busqueda y filtro de los persoajes. El proyecto está conformado por cuatro componentes

- **HeaderSite**: Es una cabecera con el nombre del estudiante
- **CharacterList**: Componente en el cual se muestran los elementos recuperados por medio de axios de la API
- **FilterOpciones**: Elemento que permite filtrar por distintos parametros como nombre o estado
- **FooterSite**: Es una footer con el nombre del estudiante

## Tecnologías Utilizadas
- **Vue**.js: Un framework de JavaScript que se utiliza para construir interfaces. Permite la creación de componentes reutilizables que encapsulan HTML, CSS y JavaScript.En este caso utilizado para los personajes
- **Axios**: Una biblioteca de JavaScript que se utiliza para realizar solicitudes HTTP y manejar respuestas de APIs. En tu caso, se usará para interactuar con la API pública de Rick y Morty y obtener datos sobre los personajes.
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

   ![imagen](https://github.com/user-attachments/assets/10771452-859d-41a9-8bc7-1a6eef414bb3)

 2. **Instalar Dependencias**:
   Utilizando un editor de código, navega hasta la carpeta "Guia 5-API-RickMorty" y ejecuta "npm install"

![imagen](https://github.com/user-attachments/assets/fb6a158d-cb48-4dc7-b5eb-90974dbdc8c7)


![imagen](https://github.com/user-attachments/assets/4383b453-3b52-4ee0-82da-da2205aca892)


 3. **Probar funcionamiento**:


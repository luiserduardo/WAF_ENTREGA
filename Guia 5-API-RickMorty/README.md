# Nombre del Proyecto: Consumo de API de Rick and Morty

## Descripción
Este proyecto consiste en una interfaz visual que consume un API publica de Rick and Morty, haaciendo uso de "axios", cargando los componentes en distintas tarjetas donde se puede visualizar la información, se tiene un apartado de búsqueda y filtro de los persoajes. El proyecto está conformado por cuatro componentes

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
   Una vez instaladas las dependencias, ejecuta el comando `npm run serve`. Debes obtener la siguiente respuesta:

![imagen](https://github.com/user-attachments/assets/1687ce6e-c0f2-45eb-9e79-c8cdf972a323)

![imagen](https://github.com/user-attachments/assets/553af993-1b0c-48da-b031-d48274c3b1bb)
 
 Verificamos que se esta corriendo e ingresamos a [http://localhost:8080/](http://localhost:8080/).


 ![imagen](https://github.com/user-attachments/assets/75a745c6-e535-44b1-a5a8-5236dd5e014b)

 Con ello ya podremos visualizar los personajes y hacer uso de las opciones de filtrado.
![imagen](https://github.com/user-attachments/assets/96e0b3b6-9104-403d-80d1-a20f974524ec)

## **Contenización**:

4. **Abrir Docker Desktop e iniciar sesión**
Abre Docker Desktop e inicia sesión con tu usuario. Si aún no tienes Docker Desktop instalado, puedes seguir esta guía: [Guía de instalación](https://www.youtube.com/watch?v=jiJFDwmWrWk).

5. **Crear imagenes**
Accede a la terminal en la carpeta del proyecto y ejecuta el comando `docker login`. Deberías ver un mensaje de confirmación que indica que has iniciado sesión correctamente.

![imagen](https://github.com/user-attachments/assets/af5eb11d-2cf4-4797-a58b-9c7999ee4976)

Dado que se cuenta con un dockerfile, únicamente será necesario ejecutar el siguiente comando "docker build -t rickmorty:latest . "

![imagen](https://github.com/user-attachments/assets/4eaac6da-78ec-4731-9c24-e3dc58817352)

Una vez finalizada la creación de las imágenes y el contenedor, debe aparecer la siguiente pantalla:
![imagen](https://github.com/user-attachments/assets/4bf14166-e5c9-4a61-a9d7-f5008df0f9b5)


6. ** Desplegar imagenes**:
   Nos desplazamos a Docker Desktop y nos dirigiemos a contendores, verificamos que se esta corriendo e ingresamos a [http://localhost:8080/](http://localhost:8080/).
   
   ![imagen](https://github.com/user-attachments/assets/9da65199-ae62-40cd-83b7-e10253834955)

7. ** Subir Imagen a Docker Hub**:
Con la imagen etiquetada se ejecuta el siguiente comando para subirla "docker push eduaro12/guia5:latest ". Una vez finalizada podremos hacer uso y depleglar el proyecto
![imagen](https://github.com/user-attachments/assets/8c699147-0747-45b8-ab4f-6f1f227a8c9f)

Link:  https://hub.docker.com/r/eduaro12/guia5/tags 

https://hub.docker.com/r/eduaro12/guia5/tags

   **ACTIVIDAD COMPLEMENTARIA**:
   
-Estilización de Tarjetas de Personajes: Mejorar la presentación de las tarjetas aplicando:Sombra con box-shadow.Bordes redondeados con border-radius.Efecto de hover para agrandar la imagen al pasar el cursor.

-Paginación de Personajes: Implementar un sistema de paginación para navegar entre personajes:Botones para avanzar y retroceder páginas.

-Usar propiedades next y prev de la API para cargar las páginas correspondientes.

-Campo de Búsqueda:Permitir filtrar personajes por nombre y estado (vivo/muerto/desconocido).Incluir un campo de texto para buscar por nombre y un menú desplegable para filtrar por estado.

-Responsive Design: Asegurar que la aplicación funcione correctamente en dispositivos móviles y diferentes tamaños de pantalla

-Subir la imagen a Docker-Hub: https://hub.docker.com/r/eduaro12/guia5/tags 

![imagen](https://github.com/user-attachments/assets/24226ed6-c3a0-4384-8c6d-28c438a53807)






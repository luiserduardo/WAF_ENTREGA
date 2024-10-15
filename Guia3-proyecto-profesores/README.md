# Nombre del Proyecto: Aplicación Web de Gestión de Docentes

## Descripción
Este proyecto es una aplicación fullstack que utiliza React para el frontend, MySQL como sistema de gestión de bases de datos y Docker para la contenedorización. Consta de tres componentes: 

- **Backend**: Utiliza Express para establecer la conexión con la base de datos llamada "profesores_db". 
- **Frontend**: Desarrollado en React, permite a los usuarios visualizar el listado de docentes almacenados en la base de datos y ofrece la opción de agregar nuevos usuarios, recargando la lista existente.
- **Docker**: Tanto en el frontend como en el backend se incluye un Dockerfile que proporciona las instrucciones necesarias para construir las imágenes. Para gestionar la base de datos, se emplean volúmenes, y para levantar los servicios de manera coordinada, se utiliza un archivo `docker-compose.yml` que facilita la construcción y ejecución conjunta de los componentes.

## Tecnologías Utilizadas
- **Frontend**: Desarrollado con React, permite a los usuarios visualizar el listado de docentes y agregar nuevos registros.
- **Backend**: Facilita la conexión con la base de datos a través de Express.
- **Base de Datos**: Incluye una tabla para registrar a los docentes, con campos para el ID y el nombre.

## Funciones
- Agregar docentes.
- Visualizar la lista de docentes.
- Persistencia de datos utilizando MySQL.

# Requisitos
- Tener instalado Node.js (versión 20 en adelante). Si no lo tienes, puedes consultar esta guía para la instalación: [Guía de instalación de Node.js](https://www.youtube.com/watch?v=29mihvA_zEA).
- Tener Docker instalado. Si no lo tienes, puedes consultar esta guía para la instalación: [Guía de instalación de Docker](https://www.youtube.com/watch?v=cWuirzMOwwg).
- Contar con un gestor de bases de datos, en este caso XAMP. Si no lo tienes, puedes instalarlo en .

# Instalación 

## Instalación y Uso con Dockerfile

1. **Clonar el Repositorio**:
   Presiona en "Code" y copia el enlace del repositorio. Luego, utilizando Git Bash, pega el enlace y ejecuta el comando.

   ![imagen](https://github.com/user-attachments/assets/fecff3a1-f94b-4d08-a4d0-e13d70018271)

   Una vez clonado o descomprimido, se mostrará de la siguiente forma:

   ![imagen](https://github.com/user-attachments/assets/2b7bf150-5bc9-4b16-a5b5-fe0ac3349228)

   ![imagen](https://github.com/user-attachments/assets/10771452-859d-41a9-8bc7-1a6eef414bb3)

2. **Importar la Base de Datos**:
   Abre tu gestor de base de datos (en este caso, XAMPP) e importa el archivo "profesores_db.sql".

   ![imagen](https://github.com/user-attachments/assets/dd60524f-a2f7-43bf-8b99-0f5a23f98964)

3. **Instalar Dependencias**:
   Utilizando un editor de código, navega hasta la carpeta "Guia3-Proyecto-Profesores".

   ![imagen](https://github.com/user-attachments/assets/ebf8c3c8-562f-4390-bd8a-1f735f89ffac)

   Luego, escribe `cd Frontend` y ejecuta el comando `npm install` para instalar las dependencias necesarias.

   ![imagen](https://github.com/user-attachments/assets/b9dd11ab-aec2-4154-aaff-49210db45b47)

   Una vez instaladas las dependencias, ejecuta el comando `npm start`. Debes obtener la siguiente respuesta:

   ![imagen](https://github.com/user-attachments/assets/d15e2ce1-9aca-4ff1-bd24-9280b0582195)

   De igual forma, escribe `cd Backend` y ejecuta `npm install` para instalar las dependencias necesarias.

   ![imagen](https://github.com/user-attachments/assets/a797fc61-6271-4de9-bd69-ec9ff317e578)

   Una vez instaladas las dependencias, ejecuta el comando `npm start`. Debes obtener la siguiente respuesta:

   ![imagen](https://github.com/user-attachments/assets/2f0fe33d-df1e-443c-b899-3cc8e016d96d)

Para visualizar la aplicación web, asegúrate de que todo esté funcionando correctamente y accede a [http://localhost:3000/](http://localhost:3000/). 

Con esto, podrás utilizar la aplicación para gestionar a los docentes.

![imagen](https://github.com/user-attachments/assets/80a80580-e4e1-40fd-8d75-62cf52f87c95)


## **Contenización**:

4. **Abrir Docker Desktop e iniciar sesión**
Abre Docker Desktop e inicia sesión con tu usuario. Si aún no tienes Docker Desktop instalado, puedes seguir esta guía: [Guía de instalación](https://www.youtube.com/watch?v=jiJFDwmWrWk).


5. **Crear imagenes**
Accede a la terminal en la carpeta del proyecto y ejecuta el comando `docker login`. Deberías ver un mensaje de confirmación que indica que has iniciado sesión correctamente.

![imagen](https://github.com/user-attachments/assets/af5eb11d-2cf4-4797-a58b-9c7999ee4976)

Dado que se cuenta con tres archivos para realizar la contenerización que corresponde a los Dockerfiles de Frontend y Backend, los cuales se conectan por medio de `docker-compose`, que a su vez permite la persistencia y uso de la base de datos por medio de volúmenes. Solo debes ejecutar el comando `docker compose down` seguido de `docker compose up`.

![imagen](https://github.com/user-attachments/assets/b66617c5-aee6-41a8-812d-8cb769e5ef43)


Una vez finalizada la creación de las imágenes y el contenedor, debe aparecer la siguiente pantalla:

![imagen](https://github.com/user-attachments/assets/e7e7befe-38d0-4cff-ac4c-4dcbceabd044)


6. ** Desplegar imagenes**:
   Nos desplazamos a Docker Desktop y nos dirigiemos a contendores, verificamos que se esta corriendo e ingresamos a [http://localhost:3000/](http://localhost:3000/).

![imagen](https://github.com/user-attachments/assets/3fd986e9-8be5-4885-8b66-700e954ec716)


   ![imagen](https://github.com/user-attachments/assets/a458f975-fe79-4be2-a77a-2fb13018e7db)


   ## Actividad complementaria:
-Modifica el proyecto para agregar profesores a la tabla: En la parte centrarl se agrego un campo para agregar nuevos 

-Agregar un estilo a la vista de la tabla: se centro el componente que permite agrega y se mejoro.

![imagen](https://github.com/user-attachments/assets/cd35adf9-1442-4112-bd9f-9e1842116a08)





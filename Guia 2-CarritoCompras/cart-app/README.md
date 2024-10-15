## Nombre del Proyecto: Aplicación web con Carrito de Compras integrado

## Descripción 

Haciendo uso de Reac con diversos componenets, se simula la función de carrito de compras de una tienda en línea. El proyecto consta de cuatro elementos:

- **ProductItems.jsx**:: Componente que representa un producto individual.
- **CartItem.jsx**:: Componente que representa un artículo específico dentro del carrito.
- **Cart.jsx**:: Contiene el código relacionado con el carrito de compras.
ProductList.jsx**:: Incluye el código para mostrar la lista de productos.

# Tecnologías utlizadas
- **React.js:** Se hace uso para la creación de los componentes de la página principal y del carrito de compras 

- **Node.js**: Un entorno de ejecución de JavaScript que permite ejecutar código en el servidor. Facilita la creación de aplicaciones web escalables y en tiempo real, y se utiliza aquí para gestionar la lógica del backend.

- **Vite**: Una herramienta de construcción que proporciona un servidor de desarrollo con recarga en caliente y optimización de rendimiento. Se utiliza para mejorar la experiencia de desarrollo al ofrecer tiempos de carga más rápidos y una configuración simplificada.

- **Boostrap**: Framework que brinda estilos dinámicos para los elementos de la página web


# Funciones
 Agregar al carrito los productos
 
 Visualizar productos
 
 Eliminar productos del carrito

# Requisitos
- Tener instalado Node.js (versión 20 en adelante). Si no lo tienes, puedes consultar esta guía para la instalación: [Guía de instalación de Node.js](https://www.youtube.com/watch?v=29mihvA_zEA).
- Tener Node instalado. Si no lo tienes, puedes consultar esta guía para la instalación: [Guía de instalación de Node](https://www.youtube.com/watch?app=desktop&v=06X51c6WHsQ).
- Tener Vite instalado. Si no lo tienes, puedes consultar esta guía para la instalación: [Guía de instalación de Vite](https://www.youtube.com/watch?app=desktop&v=LxMCo8HZ6kM).


# Instalación:

Antes de empezar es necesario instalar lo siguiente:

**Node**
Para instalar node ingresamos a la págia oficial [nodejs.org](https://nodejs.org/en/) y descargamos la versión para nuestro sistema operativo

Comprobamos la instalación
node --version

![imagen](https://github.com/user-attachments/assets/d6b9f356-de8f-40e3-8ad0-5bd9d73b3639)

**Vite**
Instalamos Vite de manera global. Ejecutar en la terminal ejecuta el siguiente comando
npm install -g create-vite
![imagen](https://github.com/user-attachments/assets/15ca05fa-441f-419a-8a0f-d1166188b8a9)

Con esto, ahora sí podemos empezar

1. **Clonar el Repositorio**:
   Presiona en "Code" y copia el enlace del repositorio. Luego, utilizando Git Bash, pega el enlace y ejecuta el comando.

   ![imagen](https://github.com/user-attachments/assets/fecff3a1-f94b-4d08-a4d0-e13d70018271)

   Una vez clonado o descomprimido, se mostrará de la siguiente forma:

   ![imagen](https://github.com/user-attachments/assets/2b7bf150-5bc9-4b16-a5b5-fe0ac3349228)

   ![imagen](https://github.com/user-attachments/assets/10771452-859d-41a9-8bc7-1a6eef414bb3)

  2. **Instalar Dependencias**:
   Utilizando un editor de código, navega hasta la carpeta "Guia 2-CarritoCompras/Cart-App" y ejecuta "npm install"

![imagen](https://github.com/user-attachments/assets/fe3eb68f-d8a8-4039-9469-fbad9f1f1728)

![imagen](https://github.com/user-attachments/assets/943e3995-1e3e-4636-b685-19d905df6deb)


 3. **Probar funcionamiento**:
   Una vez instaladas las dependencias, ejecuta el comando `npm run serve`. Debes obtener la siguiente respuesta:

![imagen](https://github.com/user-attachments/assets/25c2175b-ce92-421f-9c06-4f19567e0c8c)

**Ingresamos al puerto indicado

**Subir la imagen a docker hub**

5. **Abrir Docker Desktop e iniciar sesión**
Abre Docker Desktop e inicia sesión con tu usuario. Si aún no tienes Docker Desktop instalado, puedes seguir esta guía: [Guía de instalación](https://www.youtube.com/watch?v=jiJFDwmWrWk).

6. **Acceder a la Terminal**:
  
 Abrir la terminal de comandos y logearse en docker.
 
 ![imagen](https://github.com/user-attachments/assets/d1483044-92ba-4006-aff0-dc20333227ce)

10. **Preparar la imagen**:

  ![imagen](https://github.com/user-attachments/assets/59a48440-d1e2-47d9-9f9d-4d566710297c)

  Antes de subir la imagen, etiquetarla con un nombre reconocible. Usar la siguiente nomenclatura para etiquetar tu imagen:  
  
docker tag nombre_Imagen usuario/Nombre_Deseado:lastest 
• nombre_Image el nombre de la imagen local que deseas subir  
• usuario nombre de nuestro usuario. 
• Nombre_Deseado es el nombre que queremos asignarle en Docker Hub  
• lastest etiqueta de la imagen. 
  
9.**Subir la Imagen**:

![imagen](https://github.com/user-attachments/assets/d754d39b-2c9b-4293-bb63-43e29b22146d)

Utiliza el comando docker push para subir la imagen a Docker Hub. La subida puede tardar unos minutos. Si la acción es exitosa, se verá lo siguiente: 

![imagen](https://github.com/user-attachments/assets/57b762e9-13ad-41c4-b67d-eb03c45663fa)

  
Verificar en Docker Hub: Acceder a hub.docker.com para asegurar de que la imagen se haya subido correctamente.  
  
  
10.**Compartir y ejecutar la imagen**:


Se debe compartir el repositorio copiando el link y mandarlo al compañero, en este caso https://hub.docker.com/repository/docker/eduaro12/cart-app-react/general 
El receptor vería la siguiente pantalla: 

![imagen](https://github.com/user-attachments/assets/33513185-101f-479d-8d90-418a17980b8d)


El receptor debe usar el siguiente comando para descargar la imagen. Se copia el comando para hacer el pull para descagar la imagen. 

docker pull eduaro12/cart-app-react  

![imagen](https://github.com/user-attachments/assets/e4c49e6f-81c3-47ed-831a-fef099d59539)



## Actividad complementaria

 Investiga los pasos para compartir tu imagen con Docker Hub y agregalos aquí, con imágenes ilustrativas de los pasos.
 
https://docs.google.com/document/d/18WGWs7oRHxQNWTEWRsINwR4PWW3HBue7HYOoOzEMMOU/edit?usp=sharing 

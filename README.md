> # **_<u>DESARROLLO CON NODEJS </u>_** 

>> ## **_<u>Trabajo integrador final</u>_** 
 
* Utilizando express + Mongo DB Desarrollar una API con los servicios necesarios para las operaciones CRUD sobre cualquier recurso de su elección (productos, usuarios, clientes, películas, etc.):

* Los servicios deben permitir:

- Listar todos los items de una colección en la base de datos.
- Crear un item.
- Modificar un item.
- Borrar un item.

* Cualquier usuario puede pedir el listado.

>>> ### Detalles de api_argentina: 

* API con información sobre próceres argentinos. Contiene los siguientes datos:

- name (Nombre).
- alias (Apodo).
- birth_date (Fecha de nacimiento).
- death_date (Fecha de fallecimiento).
- nacionality (Nacionalidad).
- occupation (Ocupación).
- historical_events (Eventos históricos).

>>> ### Tecnologías utilizadas:

* Node (versión 22.13.1)
* Express (versión 4.21.2)
* MongoDB Compass (versión 1.45.2)
* Github (versión 3.15.1)

>>> ### Instalación:

1. Clonar el repositorio: 
   
   ~~~
    git clone https://github.com/TzVera/api_argentina
   ~~~

2. Instalar dependencias:
  
   Previamente utilizar el comando: 
   ~~~ 
   cd api_argentina
   ~~~

   Opción 1: instalar todas las dependencias con un solo comando

   ~~~
   npm install 
   ~~~

   Opción 2: instalar cada dependencia por separado

   * Express: 
   ~~~
   npm install express
   ~~~

   * Dependencia MongoDB Compass: 
   ~~~
   npm install mongoose   
   ~~~

   Con el comando 
   ~~~
   npm run dev
   ~~~
   Se lleva a cabo inicialización de la API.




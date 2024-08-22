# Challenge GeeksClastle
Prueba técnica para Backend Developer de Geekscastle
### Herramientas utilizadas
- Typescript
- Nestjs
- Firebase
  - Firestore
  - Functions

### Requerimientos 
* NodeJs
* Java >= 11 
* Proyecto de Firebase


### Instalación 

1. Clonar el repositorio
~~~  
$ git clone https://github.com/adbaB/challenge-firebase.git
~~~

2. Descargar ***Firebase Tools***
~~~
$ npm install -g firebase-tools
~~~

3. Realizar Autenticación de firebase
~~~
 $ firebase login
~~~
4. Asociar proyecto de firebase

   Puedes encontrar el `<alias_or_project_id>`
   
   ![Texto alternativo](/img/link_proyecto.png)

    **Usa el siguiente Comando:**
  ~~~
  $ firebase use --add <alias_or_project_id>
  ~~~
5. Instalar las dependencias del proyecto

~~~
$ pnpm install
~~~
6. Agregar archivo `.env` en el proyecto existe un archivo `.env.example` donde puede encontrar las variables de entorno utilizadas


7. Levantar el proyecto
~~~
$ pnpm run deploy 
~~~

## Uso

Una vez levantado el proyecto la ruta principal es: `http://127.0.0.1:5001/<alias_or_project_id>/us-central1/api`

## Documentación 
Puedes encontrar la ruta de la documentación de la api en la ruta `http://127.0.0.1:5001/<alias_or_project_id>/us-central1/api/doc`

## Servicios de firebase 

-  Firestore: `http://127.0.0.1:4000/firestore`
-  Functions: `http://127.0.0.1:4000/functions`







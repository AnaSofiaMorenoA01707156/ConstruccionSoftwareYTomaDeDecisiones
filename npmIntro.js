//package.json sirve para poder almacenar, gestionar metadatos, dependencias y scripts (que puede ejecutar) de un proyecto node
//npm es el gestor de paquetes de javascript en el ambiente de node

//En la sección de scripts:
//npm start corre el script definido como start (en este caso este archivo y su contenido)
//   --watch vigila los archivos que tu script usa (el propio npmIntro.js y los que se importen/requieran). Si detecta cambios, reinicia automáticamente la ejecución del programa.
//npm run chocolate el script definido como chocolate
//   echo imprime lo que le pongas
console.log("hola");

//Express: es un framework/aplicación que sirve para crear middlewares, rutas y otras cosas.
const express = require('express');
const app = express();

//Bodyparser: es un middleware (sirve en la app de express) que sirve para poder parsear el cuerpo (contenido) de solicitudes http.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasVideojuegos = require('./routes/videojuegos.routes');
app.use(rutasVideojuegos);

app.listen(3000);
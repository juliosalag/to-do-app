# ToDoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# to-do-app

# TO-DO-APP

_Aplicación Web toDo con autentificación_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Despliegue** para conocer cómo desplegar el proyecto.


### Pre-requisitos 📋

_Este proyecto se puede desarrollar igual en **Windows**, **Linux** u **OS X** aunque se recomienda usar una máquina virtual con LINUX para tener un seguimiento y un mentenimiento futuro más sencillo._

_Se recomienda instalar la última versión estable de 64 bits de la distribución **Ubuntu** de Linux (20.04 LTS actualmente)._

```
Se recomienda un mínimo de 2GHz de procesador, 4GB de RAM y 25GB de HD._ 
```

### Instalación 🔧

_Primero vamos a clonar el repositorio de github._
```
git clone "https://github.com/juliosalag/api-auth-reg.git"
cd api-auth-reg
```

_Para el funcionamiento de esta aplicación deberemos instalar otros 2 repositorios:_

WS REST con NodeJS que proporciona un **API CRUD** para gestionar una base de datos (MongoDB)
```
git clone "https://github.com/juliosalag/practica1.git"
```

API encargada de la autorización y autentificación de los usuarios
```
git clone "https://github.com/juliosalag/api-auth-reg.git"
```

_Para instalar todas las dependencias del proyecto:_
```
npm install
```

## Despliegue 📦

_**Ejecutamos cada parte en una terminal distinta**_

_1 - Base de datos MongoDB (cliente **mongo**) - puerto 27017_
```
sudo systemctl start mongodb
sudo systemctl status mongodb
mongo
```
_2 - Servidor back-end NodeJS - puerto 3000_
```
cd ~/node/api-rest
npm start
```
_3 - Servidor back-end de autorización y autentificación - puerto 4000_
```
cd ~/node/api-auth-reg
npm start
```
_4 - Servicio front-end Angular - puerto 4200_
```
cd ~/angular/to-do-app
ng serve
```

## Construido con 🛠️

* [Postman](https://www.getpostman.com/) - Testing de API REST (aunque podemos usar la versión de navegador)
* [VSCode](https://code.visualstudio.com/Download) - Editor de texto

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/juliosalag/to-do-app/tags).

## Autor ✒️

* **Julio Sala Gallardo** - *Trabajo y documentación* - [jsala](https://github.com/juliosalag)

## Licencia 📄

Este proyecto está bajo la Licencia Open Source Initiative
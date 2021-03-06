# TO-DO-APP

_Aplicaci贸n Web toDo con autentificaci贸n_

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

Ver **Despliegue** para conocer c贸mo desplegar el proyecto.


### Pre-requisitos 馃搵

_Este proyecto se puede desarrollar igual en **Windows**, **Linux** u **OS X** aunque se recomienda usar una m谩quina virtual con LINUX para tener un seguimiento y un mentenimiento futuro m谩s sencillo._

_Se recomienda instalar la 煤ltima versi贸n estable de 64 bits de la distribuci贸n **Ubuntu** de Linux (20.04 LTS actualmente)._

```
Se recomienda un m铆nimo de 2GHz de procesador, 4GB de RAM y 25GB de HD._ 
```

### Instalaci贸n 馃敡

_Primero vamos a clonar el repositorio de github._
```
git clone "https://github.com/juliosalag/api-auth-reg.git"
cd api-auth-reg
```

_Para el funcionamiento de esta aplicaci贸n deberemos instalar otros 2 repositorios:_

WS REST con NodeJS que proporciona un **API CRUD** para gestionar una base de datos (MongoDB)
```
git clone "https://github.com/juliosalag/practica1.git"
```

API encargada de la autorizaci贸n y autentificaci贸n de los usuarios
```
git clone "https://github.com/juliosalag/api-auth-reg.git"
```

_Para instalar todas las dependencias del proyecto:_
```
npm install
```

## Despliegue 馃摝

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
_3 - Servidor back-end de autorizaci贸n y autentificaci贸n - puerto 4000_
```
cd ~/node/api-auth-reg
npm start
```
_4 - Servicio front-end Angular - puerto 4200_
```
cd ~/angular/to-do-app
ng serve
```

## Construido con 馃洜锔?

* [Postman](https://www.getpostman.com/) - Testing de API REST (aunque podemos usar la versi贸n de navegador)
* [VSCode](https://code.visualstudio.com/Download) - Editor de texto

## Versionado 馃搶

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/juliosalag/to-do-app/tags).

## Autor 鉁掞笍

* **Julio Sala Gallardo** - *Trabajo y documentaci贸n* - [jsala](https://github.com/juliosalag)

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia Open Source Initiative

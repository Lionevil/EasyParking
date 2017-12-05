# EasyParking

Aplicación móvil de Sistema de Control de Estacionamientos Municipales.


Pasos para probar la aplicación localmente:



1- Instalar Git para Windows desde el siguiente enlace http://git-scm.com/download/win

2- Instalar Apache Córdova desde el siguiente enlace: http://cordova.apache.org/

3- Instalar node.js desde el siguiente enlace http://nodejs.org/

4- Abrir la aplicación Git CMD y instalar Ionic mediante $npm install -g ionic

5- Situarse en la ruta donde se encuentran los archivos clonados del repositorio ejemplo: $C:\Users\MyPC>EasyParking

6- Iniciar el servidor mediante ionic serve -w chrome (Instalar el plugin Allow-Control-Allow-Origin del link https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

7- Permitir descargar los module_nodes actualizados.

8- Ingresar a la aplicación con usuario:17196513-6, pass: 1234567.

9- Si se desea probar en un dispositivo móvil Android primero en la ruta antes seleccionada escribir: ionic add plataform android,posteriormente: ionic cordova build android, esto creara una aplicación móvil en ..\EasyParking\platforms\android\build\outputs.

10- Si se desea probar directamente en el equipo escribir: ionic run android (habilitar en el dispositivo el modo desarrollador).

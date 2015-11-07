HECHOEN.MX
==========
El proyecto Hechoen.mx fue desarrollo por <b>Pretzel</b> y cumple con las especificaciones del reto público <b><a href="http://retos.datos.gob.mx/organizaciones/12/retos/11-reto-hechoen-mx">#HECHOEN.MX</a></b>

<h4>DEMO</h4>

Puede acceder al demo de la aplicación en los siguientes enlaces:

<b><a href="http://159.203.136.228:3000/explorer/">API</a></b>

<b><a href="http://159.203.136.228/">APP</a></b>

<h4>BACKEND</h4>

El proyecto cuenta con una REST API construida en LoopBack, framework de NodeJS de StrongLoop, compañía de IBM.

<b><a href="http://loopback.io/">Más información</a></b>

* El servidor está en una instancia de DigitalOcean con Ubuntu, la base de datos es MongoDB y se usa HAPROXY para la implementación.

<h4>FRONTEND</h4>

Para la parte del Frontend se utilizó tecnología de Google como Angular y Material Design. También se utiliza Gulp, Bower y SASS

<h4>INSTALACIÓN</h4>

Requisitos para la instalación del proyecto:

* NodeJS
* MongoDB

Para la implementación del proyecto lo primero que se necesita es clonar el repositorio con el comando:

<pre>git clone https://github.com/pretzelmx/hechoenmx.git</pre>

Una vez clonado el repositorio levantamos nuestro servidor de MongoDB:

<pre>mongod</pre>

Una vez clonado el repositorio accedemos a la carpeta api y ejecutamos los siguientes comandos:

<pre>
npm install
npm install -g nodemon
npm run dev
</pre>

Listo, la API estará corriendo sobre el puerto: 3000

Para la instalación del Frontend accedemos a la carpeta app y ejecutamos los siguientes comandos:

<pre>
bower install
npm install
gulp inject
PORT=80 node src/server/app.js
</pre>

Y listo, el proyecto completo está funcionando

<h4>INFORMACIÓN</h4>

Los documentos generales del proyecto se encuentran en el siguiente enlace y datos de contacto de Pretzel

<b><a href="https://drive.google.com/folderview?id=0B8385Hth7roXdDRQeHNhQXkyQ0U&usp=sharing">Archivos en google Drive</a></b>

<b><a href="http://pretzel.mx">Pretzel</a> - <a mailto="hola@pretzel.mx">hola@pretzel.mx</a></b>

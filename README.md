 <h1>Challenge-AluraGeek</h1>

### Pasos

1. Se tiene que instalar NODE.js y npm

	https://nodejs.org/en

2. Verificar que se instaló node.js y npm (colocarlo en la terminal)
	node --version
	npm --version

3. Instalar JSON Server globalmente (colocarlo en la terminal)
	npm install -g json-server

4. Verificar la instalación (colocarlo en la terminal)
	json-server --version  

5. Iniciar JSON Server (colocarlo en la terminal)
 
<h2> Si el archivo está en el mismo directorio: </h2>
	json-server --watch ./database/db.json --port 3000

<h2>Navega al directorio que contiene tu archivo JSON usando el comando cd y luego ejecuta JSON Server con el archivo JSON:</h2>

	cd path\to\your\directory
	json-server --watch ./database/db.json --port 3000

<h3> Pasos adicionales de verificación de forma local:</h3>

6. Inicia el JSON Server 
	npm start

<h3> Desde este link podrás acceder a la app</h3>

	[GitHub Pages](https://car1981.github.io/seba2/).

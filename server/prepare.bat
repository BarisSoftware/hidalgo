@ECHO OFF 
echo Preparando entorno de desarrollo
echo Instalando NodeJS
winget install OpenJS.NodeJS.LTS
echo Instalando paquetes de NodeJS
npm install multiformats
npm install web3
npm install solcjs
npm install axio
npm install -g mysql
npm install sqlite3
npm install nodemon
npm install express
npm install express-validator
npm install express-session
npm install react-scripts
npm install body-parser
npm install helmet
npm install fs
npm install -g path
npm install crypto
echo Hecho
echo Happy Coding

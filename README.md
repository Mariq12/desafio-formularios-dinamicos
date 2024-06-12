# 


## Desplegar el proyecto en GitHub Pages
1. Agregar configuración en vite.config.js

    base: "https://nombreUsuario.github.io/nombreRepositorio",

    base: "https://Mariq12.github.io/desafio-formularios-dinamicos",    

2. Ejecutar el comando:

    npm install gh-pages --save-dev 

 Este comando instala el paquete gh-pages como una dependencia de desarrollo, permitiéndote utilizar herramientas y scripts para desplegar la aplicación en GitHub Pages.

3. Agregar 2 scripts en package.json

    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"

*Quedaría así:*

    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    },

4. Ejecutar el comando:

    npm run deploy

## Tecnología
React + Vite

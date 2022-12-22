const data = [
    {
      key:1,
      id:1,
      nombre:"Arbol Nevado",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:7500,
      foto:"https://i.ibb.co/c8Cw5N7/arbol-Nevado.jpg",
      stock:3,
      stockCart:3,
      categoria:"arboles"
    },
    {
      key:2,
      id:2,
      nombre:"Arbol Frondoso",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:11000,
      foto:"https://i.ibb.co/MPzLjv7/arbol-Frondoso.jpg",
      stock:9,
      stockCart:9,
      categoria:"arboles"
    },
    {
      key:3,
      id:3,
      nombre:"Estrella Dorada",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:1000,
      foto:"https://i.ibb.co/B4JSZsg/estrella-Dorada.jpg",
      stock:5,
      stockCart:5,
      categoria:"accesorios"
    },
    {
      key:4,
      id:4,
      nombre:"Estrella Nevada",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:1500,
      foto:"https://i.ibb.co/fY0p0yt/estrella-Blanca.jpg",
      stock:3,
      stockCart:3,
      categoria:"accesorios"
    },
    {
      key:5,
      id:5,
      nombre:"Luces Nevadas",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:4000,
      foto:"https://i.ibb.co/zF5d9bX/luces-Blancas.jpg",
      stock:9,
      stockCart:9,
      categoria:"accesorios"
    },
    {
      key:6,
      id:6,
      nombre:"Luces de Colores",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:3500,
      foto:"https://i.ibb.co/brpDtF4/luces-Colores.jpg",
      stock:7,
      stockCart:7,
      categoria:"accesorios"
    },
    {
      key:7,
      id:7,
      nombre:"Esferas multicolor",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:1500,
      foto:"https://i.ibb.co/Pc3F4sg/esfera-Colores.jpg",
      stock:8,
      stockCart:8,
      categoria:"accesorios"
    },
    {
      key:8,
      id:8,
      nombre:"Esferas Nevadas",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:2000,
      foto:"https://i.ibb.co/FHtBjqp/esfera-Blanca.jpg",
      stock:10,
      stockCart:10,
      categoria:"accesorios"
    },
    {
      key:9,
      id:9,
      nombre:"Pesebre Grande",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:11000,
      foto:"https://i.ibb.co/N1Rp7By/pesebre-Grande.webp",
      stock:3,
      stockCart:3,
      categoria:"pesebres"
    },
    {
      key:10,
      id:10,
      nombre:"Pesebre Pequeño",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio:7500,
      foto:"https://i.ibb.co/mzKTp34/pesebre-Chico.jpg",
      stock:4,
      stockCart:4,
      categoria:"pesebres"
    }

]

export default data
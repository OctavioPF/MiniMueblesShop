<template>
    <header>
      <h1>Tienda de Muebles</h1>
      <nav>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/productos">Productos</router-link></li>
          <li><router-link to="/carrito">Carrito</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderC',
  };
  </script>
  
  <style scoped>
  header {
    background-color: #0689b0;
    padding: 10px;
  }
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  nav ul li {
    margin: 0 10px;
  }
  </style>
  
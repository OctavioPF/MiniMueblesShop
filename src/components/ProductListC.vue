<template>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.image" :alt="product.name" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} USD</p>
        <button @click="addToCart(product)">Agregar al Carrito</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [
          { id: 1, name: 'Sofá', price: 500, image: '/path/to/image1.jpg' },
          { id: 2, name: 'Mesa', price: 150, image: '/path/to/image2.jpg' },
          // Agrega más productos aquí
        ],
      };
    },
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
  }
  .product-item {
    flex: 1 1 30%;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .product-item img {
    max-width: 100%;
    height: auto;
  }
  </style>
  
<template>
    <div class="cart">
      <h2>Carrito de Compras</h2>
      <div v-if="cart.length === 0">
        <p>El carrito está vacío</p>
      </div>
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} USD</p>
          <button @click="removeFromCart(item)">Eliminar</button>
        </div>
        <h3>Total: {{ total }} USD</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CartC',
    props: ['cart'],
    computed: {
      total() {
        return this.cart.reduce((sum, item) => sum + item.price, 0);
      },
    },
    methods: {
      removeFromCart(item) {
        this.$emit('remove-from-cart', item);
      },
    },
  };
  </script>
  
  <style scoped>
  .cart {
    padding: 20px;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  </style>
  
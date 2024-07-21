<template>
  <div id="app">
    <Header />
    <router-view :cart="cart" @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderC.vue';
import Footer from './components/FooterC.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(item) {
      const index = this.cart.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
  },
};
</script>

<style>
/* Agrega estilos globales aquí si es necesario */
</style>

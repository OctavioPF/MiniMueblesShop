<template>
    <Cart :cart="cart" @remove-from-cart="removeFromCart" />
  </template>
  
  <script>
  import Cart from '@/components/CartC.vue';
  
  export default {
    name: 'CartView',
    components: {
      Cart,
    },
    props: ['cart'],
    methods: {
      removeFromCart(item) {
        this.$emit('remove-from-cart', item);
      },
    },
  };
  </script>
  
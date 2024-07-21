<template>
    <ProductList @add-to-cart="addToCart" />
  </template>
  
  <script>
  import ProductList from '@/components/ProductListC.vue';
  
  export default {
    name: 'ProductsV',
    components: {
      ProductList,
    },
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product);
      },
    },
  };
  </script>
  
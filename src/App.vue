<script setup>
import CHeader from './components/layout/Header.vue';
import CFooter from './components/layout/Footer.vue';
</script>

<template>
  <c-header />
  <RouterView />
  <c-footer />
</template>

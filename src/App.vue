<template>
  <RouterView></RouterView>
  <Navbar></Navbar>
</template>
<script setup>
  import Navbar from "./components/Navbar.vue";
  import { RouterView } from 'vue-router'
</script>

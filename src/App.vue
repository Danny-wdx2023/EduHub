<template>
  <RouterView></RouterView>
  <Navbar></Navbar>
</template>
<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from "@/components/Navbar.vue";
</script>

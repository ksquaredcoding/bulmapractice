<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  top: 0;
  width: 100%;
  overflow-x: hidden;
}
</style>

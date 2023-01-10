<script setup>
import { RouterView } from 'vue-router'
import BulmaModal from "./components/BulmaModal.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
  <BulmaModal />
</template>

<style scoped>
header {
  top: 0;
  width: 100%;
  overflow-x: hidden;
}
</style>

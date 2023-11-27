<template>
  <NavBar />
  <main class="flex flex-col w-full mt-16 px-5 md:px-20">
    <router-view />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style>
#app {
  font-family: 'Source Sans 3 Variable', sans-serif;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.prose {
  max-width: 100% !important;
}
</style>

<template>
  <NavBar />
  <main class="flex flex-col items-center p-8 mt-8">
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
  padding-inline: 10rem;
}
</style>

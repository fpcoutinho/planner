<template>
  <main class="flex flex-col items-center p-8">
    <router-view />
  </main>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Source Sans 3 Variable', sans-serif;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

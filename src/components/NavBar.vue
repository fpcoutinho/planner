<template>
  <header class="navbar bg-base-100 fixed top-0 xl:px-20 w-full overflow-hidden z-10">
    <div class="flex-1">
      <span class="btn btn-ghost text-xl">The Dojo Blog</span>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'Create' }">New Blog</router-link></li>
      </ul>
    </div>
  </header>
</template>

<style>
header a.router-link-active {
  @apply text-secondary;
}
</style>

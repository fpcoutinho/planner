<template>
  <div class="flex flex-col gap-3">
    <router-link v-for="post in props.posts" :key="post.id" :to="{ name: 'Details', params: { id: post.id } }"
      class="no-underline">
      <SinglePost :post="post" />
    </router-link>
  </div>
</template>

<script setup>
import SinglePost from './SinglePost.vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style></style>
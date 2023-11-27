<template>
  <div class="post-list">
    <div v-for="post in props.posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script setup>
// component imports
import SinglePost from './SinglePost.vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style></style>
<template>
  <div class="post-list">
    <div v-for="post in props.posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script setup>
import SinglePost from './SinglePost.vue'
import { onMounted } from 'vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  console.log('mounted')
})
</script>

<style></style>
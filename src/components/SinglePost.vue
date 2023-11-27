<template>
  <div class="post">
    <h3>{{ props.post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + '...'
})
</script>

<style></style>
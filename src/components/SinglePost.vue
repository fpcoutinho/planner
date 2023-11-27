<template>
  <div class="post card glass shadow-lg hover:shadow-xl">
    <div class="card-body">
      <h2 class="card-title justify-center">{{ props.post.title }}</h2>
      <p>{{ snippet }}</p>
      <div class="card-actions justify-end">
        <span class="badge badge-secondary badge-outline" v-for="tag in post.tags" :key="tag"># {{ tag }}</span>
      </div>
    </div>
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
  if (props.post.body.length <= 100) {
    return props.post.body
  }
  return props.post.body.substring(0, 100) + '...'
})
</script>

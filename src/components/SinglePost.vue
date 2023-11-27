<template>
  <div class="post card w-96 lg:w-auto glass shadow-lg hover:shadow-xl">
    <div class="card-body">
      <router-link class="no-underline" :to="{ name: 'Details', params: { id: props.post.id } }">
        <h2 class="card-title justify-center text-primary">{{ props.post.title }}</h2>
      </router-link>
      <p class="text-neutral">{{ snippet }}</p>
      <div class="card-actions justify-end">
        <router-link v-for="tag in post.tags" :key="tag" class="no-underline" :to="{ name: 'Tag', params: { tag: tag } }">
          <span class="badge badge-primary badge-outline">#{{ tag }}</span>
        </router-link>
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

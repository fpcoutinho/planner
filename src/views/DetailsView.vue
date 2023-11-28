<template>
  <div class="h-full flex justify-center items-center">
    <p v-if="error" class="text-error">{{ error }}</p>
    <div v-if="post" class="post prose max-w-none">
      <h2>{{ post.title }}</h2>
      <div class="flex flex-row gap-1 justify-end">
        <router-link v-for="tag in post.tags" :key="tag" class="no-underline" :to="{ name: 'Tag', params: { tag: tag } }">
          <span class="badge badge-primary badge-outline">#{{ tag }}</span>
        </router-link>
      </div>
      <p>{{ post.body }}</p>
    </div>
    <div v-else-if="!post && !error" class="loading loading-ring loading-md text-accent"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import getPost from '../composables/getPost';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const { post, error, load } = getPost(props.id)

onMounted(() => {
  load()
})
</script>

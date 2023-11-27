<template>
  <div class="h-full flex justify-center items-center p-4">
    <p v-if="error" class="text-error">{{ error }}</p>
    <div v-if="post" class="post prose">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <div v-else class="loading loading-ring loading-md text-accent"></div>
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

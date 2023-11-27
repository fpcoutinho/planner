<template>
  <div class="home prose flex flex-col items-center">
    <h1>My Blog</h1>
    <p v-if="error" class="text-error">{{ error }}</p>
    <div class="content" v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><span class="loading loading-ring loading-md text-accent"></span></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'

const { posts, error, load } = getPosts()

onMounted(() => {
  load()
})
</script>

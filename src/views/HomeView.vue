<template>
  <div class="home prose flex flex-col items-center p-4">
    <h1>Home</h1>
    <div class="button-list flex flex-row gap-3 mb-4">
      <button type="button" class="btn btn-neutral btn-sm" @click="showPosts = !showPosts">Toggle
        posts</button>
      <button type="button" class="btn btn-neutral btn-sm" @click="posts.pop()">Delete a post</button>
    </div>
    <p v-if="error" class="text-error">{{ error }}</p>
    <PostList v-if="posts.length" v-show="showPosts" :posts="posts" />
    <div v-else><span class="loading loading-ring loading-md text-accent"></span></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

const showPosts = ref(true)
const { posts, error, load } = getPosts()

onMounted(() => {
  load()
})
</script>

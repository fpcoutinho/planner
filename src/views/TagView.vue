<template>
  <div class="home prose flex flex-col items-center">
    <h1># {{ tag }}</h1>
    <p v-if="error" class="text-error">{{ error }}</p>
    <PostList v-if="posts.length" :posts="postsWithTag" />
    <div v-else><span class="loading loading-ring loading-md text-accent"></span></div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

const route = useRoute()
const { posts, error, load } = getPosts()

const tag = ref(route.params.tag)

watch(
  () => route.params.tag,
  (toParams,) => {
    tag.value = toParams
  }
)

const postsWithTag = computed(() => {
  return posts.value.filter(post => post.tags.includes(tag.value))
})

onMounted(() => {
  load()
})
</script>

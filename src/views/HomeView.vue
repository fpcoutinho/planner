<template>
  <div class="home prose flex flex-col items-center p-4">
    <h1>Home</h1>
    <div class="button-list flex flex-row gap-3">
      <button type="button" class="btn btn-neutral btn-sm" @click="showPosts = !showPosts">Toggle
        posts</button>
      <button type="button" class="btn btn-neutral btn-sm" @click="posts.pop()">Delete a post</button>
    </div>
    <PostList v-if="showPosts" :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

const posts = ref([
  { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.', id: 1 },
  { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
])

const showPosts = ref(true)
</script>

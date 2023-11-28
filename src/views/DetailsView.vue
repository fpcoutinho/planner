<template>
  <div class="h-full flex justify-center items-center">
    <p v-if="error" class="text-error">{{ error }}</p>
    <div v-if="post" class="post prose max-w-none">
      <h2>{{ post.title }}</h2>
      <div class="submenu flex flex-row justify-between">
        <div class="flex flex-row gap-1">
          <router-link v-for="tag in post.tags" :key="tag" class="no-underline"
            :to="{ name: 'Tag', params: { tag: tag } }">
            <span class="badge badge-primary badge-outline">#{{ tag }}</span>
          </router-link>
        </div>
        <div class="buttons flex flex-row gap-1">
          <button class="btn btn-primary btn-outline btn-sm" @click="editPost">
            Edit Post
          </button>
          <button class="btn btn-error btn-outline btn-sm" @click="deletePost">
            Delete Post
          </button>
        </div>
      </div>
      <p>{{ post.body }}</p>
    </div>
    <div v-else-if="!post && !error" class="loading loading-ring loading-md text-accent"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { projectFirestore } from '../firebase/config';
import { useRouter } from 'vue-router';
import getPost from '../composables/getPost';

const router = useRouter()

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

const editPost = () => {
  console.log('edit post')
}

const deletePost = async () => {
  if (confirm('Are you sure you want to delete this post?')) {
    await projectFirestore.collection('posts').doc(props.id).delete()

    router.push({ name: 'Home' })
  }
}
</script>

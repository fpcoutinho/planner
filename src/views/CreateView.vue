<template>
  <div class="create prose w-96">
    <h2>Create a Post</h2>
    <form class="form flex flex-col gap-4" @submit.prevent="createPost">
      <div class="form-control w-full">
        <label class="label" for="title">
          <span class="label-text text-neutral font-bold">Title</span>
        </label>
        <input v-model="title" type="text" id="title" placeholder="Your post's title" class="input input-bordered w-full"
          required />
      </div>
      <div class="form-control w-full">
        <label class="label" for="content">
          <span class="label-text text-neutral font-bold">Content</span>
        </label>
        <textarea v-model="body" class="textarea textarea-bordered h-24" id="content" placeholder="Your post's content"
          required></textarea>
      </div>
      <div class="form-control w-full">
        <label class="label" for="tag">
          <span class="label-text text-neutral font-bold">Tags (hit enter to add a tag)</span>
        </label>
        <input v-model="tag" @keydown.enter.prevent="addTag" type="text" id="tag" placeholder="Add a tag"
          class="input input-bordered w-full" />
        <label class="label">
          <span class="label-text text-neutral flex flex-row gap-1">
            <span class="badge badge-secondary badge-outline pr-0" v-for="tag, index in tags" :key="tag">
              #{{ tag }}
              <button @click.prevent="deleteTag(index)" class="ml-2 mr-1"><svg xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" class="inline-block w-3 h-3 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </span>
          </span>
        </label>
      </div>
      <button class="btn btn-neutral btn-sm mt-2" type="submit">Add post</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])

const addTag = () => {
  tag.value = tag.value.replace(/\s/, '')
  if (!tags.value.includes(tag.value)) {
    tags.value.push(tag.value)
    tag.value = ''
  }
}

const deleteTag = (index) => {
  tags.value.splice(index, 1)
}

const createPost = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value
  }

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(() => {
    router.push({ name: 'Home' })
  })
}
</script>

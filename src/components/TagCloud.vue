<template>
  <div class="cloud">
    <h2>Tags</h2>
    <div class="tags flex flex-row gap-1">
      <router-link v-for="tag in tags" :key="tag" class="no-underline" :to="{ name: 'Tag', params: { tag: tag } }">
        <span class="badge badge-primary badge-outline">#{{ tag }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import useTags from '../composables/useTags'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const { tags } = useTags(props.posts)
</script>

<style>
.cloud .tags a.router-link-active .badge {
  @apply text-accent;
}
</style>
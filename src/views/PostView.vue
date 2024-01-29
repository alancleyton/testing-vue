<script setup lang="ts">
import PostList from '@/components/PostList.vue';
</script>

<template>
  <div class="w-full min-h-screen bg-gray-50">
    <div class="w-full max-w-5xl m-auto px-3 py-4">
      <h4 class="block mb-8 font-sans text-5xl antialiased font-semibold text-blue-gray-900">
        Posts
      </h4>
      <PostList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

import LoadingSpinner from '@/components/LoadingSpinner.vue';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const isLoading = ref<boolean>(false);
const posts = ref<Post[]>([]);
const error = ref<unknown>({});

const getPosts = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getPosts();
});
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <ul v-else class="flex flex-col gap-3 list-none m-0 p-0">
    <li
      class="flex bg-white shadow-lg rounded-lg max-w-full md:max-w-lg"
      v-for="post in posts"
      :key="post.id + post.userId"
    >
      <div class="flex flex-col items-start px-4 py-6">
        <h2 class="text-lg font-semibold text-gray-900 -mt-1">{{ post.title }}</h2>
        <p class="mt-3 text-gray-700 text-sm">
          {{ post.body }}
        </p>
      </div>
    </li>
  </ul>
</template>

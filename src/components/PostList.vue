<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(async () => {
  await axios.get('https://jsonplaceholder.typicode.com/posts');
});
</script>

<template>
  <ul class="flex flex-col gap-3 list-none m-0 p-0">
    <li class="flex bg-white shadow-lg rounded-lg max-w-full md:max-w-lg">
      <div class="flex flex-col items-start px-4 py-6">
        <h2 class="text-lg font-semibold text-gray-900 -mt-1">Brad Adams</h2>
        <p class="mt-3 text-gray-700 text-sm">
          Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
        </p>
      </div>
    </li>

    <li class="flex bg-white shadow-lg rounded-lg max-w-full md:max-w-lg">
      <div class="flex flex-col items-start px-4 py-6">
        <h2 class="text-lg font-semibold text-gray-900 -mt-1">Brad Adams</h2>
        <p class="mt-3 text-gray-700 text-sm">
          Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
        </p>
      </div>
    </li>
  </ul>
</template>

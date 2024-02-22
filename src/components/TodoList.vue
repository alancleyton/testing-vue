<script setup lang="ts">
import { onMounted } from 'vue';

import { useTodos } from '@/composables/useTodos';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const { getTodos, todos, isLoading } = useTodos();

onMounted(async () => {
  await getTodos();
});
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <ul v-else class="flex flex-col gap-3 list-none m-0 p-0">
    <li
      class="relative shadow-md bg-clip-border rounded-xl p-4"
      :class="{ 'bg-green-50': todo.completed, 'bg-red-50': !todo.completed }"
      v-for="todo in todos"
      :key="todo.id + todo.userId"
    >
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {{ todo.title }}
      </p>
    </li>
  </ul>
</template>

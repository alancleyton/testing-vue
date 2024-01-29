<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos');
});
</script>

<template>
  <ul class="flex flex-col gap-3 list-none m-0 p-0">
    <li class="block">
      <div class="relative bg-green-50 shadow-md bg-clip-border rounded-xl p-4">
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          delectus aut autem
        </p>
      </div>
    </li>

    <li class="block">
      <div class="relative bg-red-50 shadow-md bg-clip-border rounded-xl p-4">
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          quis ut nam facilis et officia qui
        </p>
      </div>
    </li>
  </ul>
</template>

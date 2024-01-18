<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

const increment = () => count.value++;
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>
</template>

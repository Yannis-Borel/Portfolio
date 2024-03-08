<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-200 to-white">
    <Header />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue';
</script>
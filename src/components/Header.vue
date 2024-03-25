<!-- components/Header.vue -->
<template>
  <header class="px-6 flex items-center justify-between">
    <RouterLink to="/" class="text-[60px] font-bold" style="font-family: 'Coco-Bold'">
      YB
    </RouterLink>
    <div class="relative">
      <button @click="isOpen = !isOpen" class="block md:hidden focus:outline-none">
        <svg
          class="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          :class="{ 'transform rotate-90': isOpen }"
        >
          <path
            fill-rule="evenodd"
            d="M4 7h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"
          />
        </svg>
      </button>
      <div
        :class="{
          'block shadow-lg bg-white p-4 rounded-lg': isOpen,
          hidden: !isOpen
        }"
        class="absolute right-0 mt-2 md:block md:static md:shadow-none md:mt-0 md:bg-transparent md:p-0"
      >
        <div class="text-black font-nunito text-2xl font-semibold tracking-wider">
          <a
            href="#projets"
            class="block px-4 py-2 mt-2 text-sm md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline"
          >
            Mes projets
          </a>
          <a
            href="#contact"
            class="block px-4 py-2 mt-2 text-sm md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/yannis-borel-b16b4325a/"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-4 py-2 mt-2 text-sm md:inline-block md:mt-0 hover:bg-gray-200 md:ml-6 md:hover:bg-transparent md:hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </header>
  <div class="bg-black h-[1px] mx-auto mt-[-20px] w-3/4"></div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const isOpen = ref(false)
</script>

<style>
@font-face {
  font-family: 'Coco-Bold';
  src: url('../fonts/Coco-Bold.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
</style>

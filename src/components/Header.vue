<template>
  <header class="px-6 flex items-center justify-between">
    <div class="text-[60px] font-bold" style="font-family: 'Coco-Bold'">
      YB
    </div>
    <div class="relative">
      <button
        @click="toggleMenu"
        class="block focus:outline-none"
      >
        <svg
          class="h-8 w-8 fill-current"
          viewBox="0 0 24 24"
          :class="{ 'transform rotate-90': isOpen }"
        >
          <path
            fill-rule="evenodd"
            d="M4 7h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"
          />
        </svg>
      </button>
      <nav
        :class="{
          'block shadow-lg bg-white': isOpen,
          'hidden': !isOpen,
        }"
        class="absolute right-0 mt-2 py-4 w-64 rounded-xl"
      >
        <RouterLink
          to="/"
          class="block px-6 py-3 text-base hover:bg-gray-200"
          >Link 1
        </RouterLink>
        <RouterLink
          to="/"
          class="block px-6 py-3 text-base hover:bg-gray-200"
          >Link 2
        </RouterLink>
        <RouterLink
          to="/about"
          class="block px-6 py-3 text-base hover:bg-gray-200"
          >Link 3
        </RouterLink>
      </nav>
    </div>
  </header>
  <div class="bg-black h-[1px] mx-auto mt-[-20px] w-3/4"></div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}
</script>

<style>
@font-face {
  font-family: "Coco-Bold";
  src: url("../fonts/Coco-Bold.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
</style>
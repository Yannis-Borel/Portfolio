<template>
  <div class="bg-neutral-300">
    <Header />
    <!-- Hero Section -->
    <div class="relative">
      <h1 class="text-black mt-10 text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight tracking-wide"
        style="font-family: 'Coco-Bold'">
        {{ nom_projet }}
      </h1>
      <img :src="screen_site" class="w-full h-auto mt-10" alt="Project Screen" />
      <div class="inset-0 flex items-center justify-center"></div>
    </div>
    <div class="container mx-auto px-4 md:px-24 py-16">
      <!-- Description Section -->
      <div class="mb-16">
        <p class="text-lg md:text-xl font-semibold mb-8 text-justify">
          {{ description_projet1 }}
        </p>
        <iframe class="w-full h-64 md:h-96 border border-gray-300 rounded-lg" :src="lien_figma"
          allowfullscreen></iframe>
      </div>
      <!-- Motivation Section -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Motivation du Projet</h2>
        <p class="text-lg md:text-xl font-semibold text-justify">
          {{ description_projet2 }}
        </p>
      </div>
      <div class="flex justify-center mb-16">
        <img :src="image_projet2" class="w-full md:w-[70%] h-auto rounded-lg shadow-lg" alt="Project Image" />
      </div>
      <!-- Organization Section -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Organisation de l'Application
        </h2>
        <p class="text-lg md:text-xl font-semibold text-justify">
          {{ description_projet3 }}
        </p>
      </div>
      <!-- Tools Section -->
      <div class="mb-16 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center md:hidden">
          Outils Utilisés
        </h2>
        <div class="flex flex-wrap justify-center -mx-2 md:hidden">
          <div class="px-2 mb-4">
            <div class="tag">{{ outils_utilise1 }}</div>
          </div>
          <div class="px-2 mb-4">
            <div class="tag">{{ outils_utilise2 }}</div>
          </div>
          <div class="px-2 mb-4">
            <div class="tag">{{ outils_utilise3 }}</div>
          </div>
          <div class="px-2 mb-4">
            <div class="tag">{{ outils_utilise4 }}</div>
          </div>
        </div>
      </div>
      <!-- Visual Design Section -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Design Visuel</h2>
        <p class="text-lg md:text-xl font-semibold text-justify mb-8">
          {{ description_projet4 }}
        </p>
      </div>
      <!-- Call to Action -->
      <div class="text-center">
        <a :href="lien_site" target="_blank"
          class="inline-block bg-gray-900 text-white font-bold py-4 px-8 rounded-full shadow-md transition duration-300 hover:bg-gray-600">
          Voir le Projet
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaCard } from '@/types';
import Header from "@/components/Header.vue";

defineProps<SchemaCard>();
</script>

<style scoped>
.tag {
  @apply inline-block bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 hover:bg-orange-500 hover:text-white;
}
</style>
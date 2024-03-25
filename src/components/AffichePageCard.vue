<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaCard } from '@/types';
import { ref } from 'vue';
import Header from "@/components/Header.vue";
defineProps<SchemaCard>()
</script>

<template>
  <div class="bg-neutral-300 ">
    <Header />


    <img :src="screen_site" class="mt-11" />
    <h1 class="text-black lg:text-8xl text-6xl font-normal leading-normal tracking-wide text-center mt-12"
      style="font-family: 'Coco-Bold';">{{ nom_projet }}</h1>

    <p class="m-20 font-semibold">{{ description_projet1 }}</p>


  </div>
</template>
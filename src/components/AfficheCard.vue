<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaCard } from '@/types';

defineProps<SchemaCard>();
</script>

<template>
    <RouterLink :to="{ name: '/projets/[id]', params: { id: id! } }"
        class="px-4 md:px-32 block w-full bg-black text-white p-4 relative hover:text-lime-300 ">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="font-extrabold text-3xl md:text-6xl mb-2">{{ nom_projet }}</div>
            <div class="flex items-center space-x-2 mt-2 md:mt-0">
                <div class="tag">{{ outils_utilise1 }}</div>
                <div class="tag">{{ outils_utilise2 }}</div>
                <div class="tag">{{ outils_utilise3 }}</div>
                <div class="tag">{{ outils_utilise4 }}</div>
            </div>
        </div>
        <p class="text-gray-400">{{ description_card }}</p>
        <div class="my-10 h-[1px] w-[100%] bg-white transition duration-300 hover:bg-orange-500"></div>
        
    </RouterLink>
</template>

<style scoped>
.tag {
    @apply border border-white rounded-full px-3 py-1 transition duration-300 hover:border-orange-500 hover:text-orange-500;
}
</style>
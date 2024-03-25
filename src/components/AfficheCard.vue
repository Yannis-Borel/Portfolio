<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { SchemaCard } from '@/types';

const props = defineProps<SchemaCard>();
const showPreview = ref(false);
const previewPosition = ref({ x: 0, y: 0 });

let mouseX = 0;
let mouseY = 0;
const easingFactor = 0.05; // Ajustez selon vos préférences

const handleMouseEnter = () => {
    showPreview.value = true;
};

const handleMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
};

const handleMouseLeave = () => {
    showPreview.value = false;
};

const updatePreviewPosition = () => {
    const dx = mouseX - previewPosition.value.x;
    const dy = mouseY - previewPosition.value.y;
    previewPosition.value.x += dx * easingFactor;
    previewPosition.value.y += dy * easingFactor;
    requestAnimationFrame(updatePreviewPosition);
};

updatePreviewPosition();
</script>

<template>
    <RouterLink :to="{ name: '/projets/[id]', params: { id: props.id! } }"
        class="px-4 md:px-32 block w-full bg-black text-white p-4 relative hover:text-lime-300"
        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="font-extrabold text-3xl md:text-6xl mb-2">{{ props.nom_projet }}</div>
            <div class="flex items-center space-x-2 mt-2 md:mt-0">
                <div class="tag">{{ props.outils_utilise1 }}</div>
                <div class="tag">{{ props.outils_utilise2 }}</div>
                <div class="tag">{{ props.outils_utilise3 }}</div>
                <div class="tag">{{ props.outils_utilise4 }}</div>
            </div>
        </div>
        <p class="text-gray-400">{{ props.description_card }}</p>
        <div class="my-10 h-[1px] w-[100%] bg-white transition duration-300 hover:bg-orange-500"></div>
        <div class="fixed z-50 transition-all" :class="{ 'opacity-100': showPreview, 'opacity-0': !showPreview }"
            :style="{ left: previewPosition.x + 'px', top: previewPosition.y + 'px' }">
            <img v-if="showPreview" :src="props.image_projet" alt="preview" class="w-64 h-auto" />
        </div>
    </RouterLink>
</template>

<style scoped>
.tag {
    @apply border border-white rounded-full px-3 py-1 transition duration-300 hover:border-orange-500 hover:text-orange-500;
}
</style>

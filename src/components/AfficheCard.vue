<script setup lang="ts">
import Icon1 from '../components/icon/Icon1.vue';
import Icon2 from '../components/icon/Icon2.vue';
import Icon3 from '../components/icon/Icon3.vue';
import Icon4 from '../components/icon/Icon4.vue';
import Icon5 from '../components/icon/Icon5.vue';
import { defineProps } from 'vue';
import type { SchemaCard } from '@/types';
defineProps<SchemaCard>()
</script>

<template>
    <div class="">
        <!-- <article 
        class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" 
        :style="{ 'background-image': `url(${image_projet})` }"
        > -->
        <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-32 hover:bg-opacity-75 transform duration-300">
            <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
            {{ nom_projet }}
            </h1>
            <div class="w-32 h-2 bg-green-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    <div class="w-32 h-2 bg-yellow-500 rounded-full mb-5 overflow-hidden">
                        <div class="inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-full group-hover:animate-slide duration-300"></div>
                    </div>
            </div>
            <!-- <p class="opacity-0 text-white text-l group-hover:opacity-80 transform duration-500 text-justify">
                {{ description_projet }}
            
            </p> -->
            <RouterLink :to="{name:'/projets/[id]', params:{id:id!}}">
                <div class="opacity-0 border-white text-white text-xl group-hover:opacity-80 transform duration-500 flex justify-end mt-2 mb-2">
                    <button type="button" class="text-gray-900 bg-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Voir plus
                    </button>
                </div>
            </RouterLink>
        </div>
        <!-- <div>
            <img :src="image_projet" class="hidden"/>
        </div> -->
        <!-- </article> -->
    </div>
</template>
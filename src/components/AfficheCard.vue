<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaCard } from '@/types';
defineProps<SchemaCard>()
</script>

<template>
            <h1 class="text-black">
                {{ nom_projet }}
            </h1>       
            <img :src="image_projet" />
            <RouterLink :to="{name:'/projets/[id]', params:{id:id!}}">
                <div>
                    <button type="button" class="text-black">
                        Voir plus
                    </button>
                </div>
            </RouterLink>
</template>
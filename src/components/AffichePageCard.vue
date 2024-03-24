<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaCard } from '@/types';
import { ref } from 'vue';
defineProps<SchemaCard>()
</script>

<template>
  <div class="p-2">
    <p>{{ nom_projet }}</p>
    <img :src="image_projet" />
    <p>{{ description_projet1 }}</p>
  </div>
</template>
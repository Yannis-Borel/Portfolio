<script setup lang="ts">
import { useRoute } from 'vue-router/auto'
const route = useRoute('/quartier/edit/[[id]]')
</script>
<template>
  <div class="p-2">
    <FormulaireQuartier :id="route.params.id" />
  </div>
</template>
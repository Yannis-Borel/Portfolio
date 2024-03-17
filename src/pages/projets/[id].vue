<script setup lang="ts">
    import AfficheSingle from '@/components/AfficheSingle.vue';
    import {useRoute} from "vue-router/auto"
    import { ref } from "vue";
    const route = useRoute("/projets/[id]")
</script>

<template>
        <AfficheSingle :id="route.params.id" />
</template>
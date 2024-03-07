<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import type { SchemaCard } from '@/types';
import { supabase } from '@/supabase';
 
console.log(supabase);
    
let {data : tableaumaisons, error} = await supabase
    .from('Card')
    .select('*');
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheMaison v-for="maison in tableaumaisons" v-bind="maison" />

    </div>
</template>
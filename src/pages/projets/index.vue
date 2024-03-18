<script setup lang="ts">
import type { SchemaCard } from '@/types';
import { supabase } from '@/supabase';
import AfficheCard from '@/components/AfficheCard.vue';
 
console.log(supabase);
    
let {data : tableauprojets, error} = await supabase
    .from('Card')
    .select('*');
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheCard v-for="projet in tableauprojets" v-bind="projet" />
    </div>
</template>
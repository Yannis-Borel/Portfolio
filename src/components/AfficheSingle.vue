<script setup lang="ts">
  import { useRouter, useRoute } from "vue-router";
  import { supabase } from "@/supabase";
  import type { SchemaCard } from "@/types";
  import { ref } from "vue";
  import AffichePageCard from "./AffichePageCard.vue";

  const projet = ref<SchemaCard>({
      nom_projet: "string",
      image_projet: "string",
      description_projet: "string",
  });

  const router = useRouter();
  const route = useRoute('/projets/[id]');

  if (route.params.id) {
      const { data, error } = await supabase.from("Card").select("*").eq("id", route.params.id).single();
      if (error) console.error(error);
      else projet.value = data;
  }
</script>

<template>
  <div class="">
    <AffichePageCard v-bind="projet" :nom_projet="projet.nom_projet" :sreen_site="projet.sreen_site" :image_projet="projet.image_projet" :description_projet="projet.description_projet" />
 </div>
</template>
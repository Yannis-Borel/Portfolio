<script setup lang="ts">
  import AffichePageCard from "./AffichePageCard.vue";
  import { useRouter, useRoute } from "vue-router";
  import { supabase } from "@/supabase";
  import type { SchemaCard } from "@/types";
  import { ref } from "vue";

  const projet = ref<SchemaCard>({
      nom_projet: "string",
      image_projet: "string",
      lien_projet: "string",
      description_projet: "string",
      titre_page: "string",
      description_page: "string",
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
  <div class="p-2">
    <AffichePageCard v-bind="projet" :nom_projet="projet.nom_projet" :image_projet="projet.image_projet" :lien_projet="projet.lien_projet" :description_projet="projet.description_projet" :titre_page="projet.titre_page" :description_page="projet.description_page" />
  </div>
</template>
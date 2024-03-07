<script setup lang="ts">
import { supabase } from "@/supabase";
import { useRoute } from 'vue-router/auto'
import { useRouter } from "vue-router/auto";
const route = useRoute('/quartier/suppr/[[id]]')

const router = useRouter();
async function supprimerQuartier() {
  const { data, error } = await supabase
    .from("Quartier")
    .delete()
    .match({ id: route.params.id });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      route.params.id,
      "erreur :",
      error
    );
  } else {
    router.push("/quartier/",);
  }
}
</script>
<template>
  <div class="p-2">
          <RouterLink to="/quartier/" type="button" class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm">
            Annuler
          </RouterLink>

          <button type="button" @click="supprimerQuartier()" class="focus-style rounded-md bg-red-500 p-2 shadow-sm">
            Confirmer suppression
          </button>
  </div>
</template>
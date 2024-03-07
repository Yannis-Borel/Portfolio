<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const commune = ref ({});
const route = useRoute('/commune/edit/[[id]]');

async function upsertCommune(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Commune").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        // router.push({name:"/commune/edit/[[id]]", params:{id: data[0].id}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Commune").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else commune.value = data;
}

const { data: listeQuartier, error } = await supabase
  .from("Quartier")
  .select("*");
if (error) console.log("n'a pas pu charger la table Quartier :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsQuartier = listeQuartier?.map((quartier) => ({
  value: quartier.id,
  label: quartier.nom_quartier,
}));
</script>

<template>
    <div>
        <div class="p-2">
            <FormKit @submit="upsertCommune" type="form" v-model="commune"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nom_commune" label="nom de la commune" />
                <FormKit name="quartier_commune" label="quartier d'un commune" type="select" :options="optionsQuartier"/>
            </FormKit>
        </div>
    </div>
</template>
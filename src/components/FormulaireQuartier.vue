<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const quartier = ref ({});
const route = useRoute('/quartier/edit/[[id]]');

async function upsertQuartier(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Quartier").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        // router.push({name:"/quartier/edit/[[id]]", params:{id: data[0].id}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Quartier").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else quartier.value = data;
}

const { data: listeCommune, error } = await supabase
  .from("Commune")
  .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = listeCommune?.map((commune) => ({
  value: commune.id,
  label: commune.nom_commune,
}));
</script>

<template>
    <div>
        <div class="p-2">
            <FormKit @submit="upsertQuartier" type="form" v-model="quartier"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nom_quartier" label="nom du quartier" />
                <FormKit name="quartier_commune" label="commune du quartier" type="select" :options="optionsCommune"/>
            </FormKit>
        </div>
    </div>
</template>
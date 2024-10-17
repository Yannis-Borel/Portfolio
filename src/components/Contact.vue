<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-black text-white">
    <div class="w-full md:w-3/4 flex justify-center items-center p-4">
      <form @submit.prevent="submitForm" class="bg-black text-white p-8 rounded-lg shadow-lg w-[90%] max-w-4xl">
        <div class="mb-4">
          <label class="block text-white font-bold mb-2" for="name"> Nom </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" name="name" v-model="name" placeholder="Votre nom" />
        </div>
        <div class="mb-4">
          <label class="block text-white font-bold mb-2" for="email"> Email </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" name="email" v-model="email" placeholder="Votre email" />
        </div>
        <div class="mb-6">
          <label class="block text-white font-bold mb-2" for="message"> Message </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="message" name="message" v-model="message" rows="3" placeholder="Votre message..."></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
    <div class="w-full md:w-1/4 flex flex-col justify-center items-center mr-12 p-4">
      <div class="flex flex-col items-center">
        <span class="text-3xl md:text-6xl lg:text-8xl font-normal leading-normal tracking-wide" style="font-family: 'Coco-Bold'">
          CONTACTEZ
        </span>
        <div class="flex items-center mt-4">
          <div class="hidden sm:block h-1 w-48 bg-white" style="font-family: 'Coco-Bold'"></div>
          <span class="text-3xl md:text-6xl lg:text-8xl font-normal leading-normal tracking-wide ml-3"
            style="font-family: 'Coco-Bold'">
            MOI
          </span>
        </div>
      </div>
      <p class="mt-4 font-semibold text-center">yannis.borel84@gmail.com</p>
      <p class="font-semibold text-center">07 83 01 65 87</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
const name = ref("")
const email = ref("")
const message = ref("")

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "bae57aaa-00cc-4b70-91b4-62a9f3410894",
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  });
  
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
  
}


</script>
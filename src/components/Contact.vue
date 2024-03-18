<template>
  <div class="flex h-screen bg-black text-white">
    <div class="w-3/4 flex justify-center items-center">
      <form @submit.prevent="submitForm" class="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div class="mb-4">
          <label class="block text-white font-bold mb-2" for="name">
            Nom
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            v-model="name"
            placeholder="Votre nom"
          />
        </div>
        <div class="mb-4">
          <label class="block text-white font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            v-model="email"
            placeholder="Votre email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-white font-bold mb-2" for="message">
            Message
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            v-model="message"
            rows="3"
            placeholder="Votre message..."
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
    <div class="w-1/4 flex flex-col justify-center items-center">
      <h2 class="lg:text-8xl text-6xl font-normal leading-normal tracking-wide" style="font-family: 'Coco-Bold'">
        CONTACTEZ MOI
      </h2>
      <p class="mt-4">yannis.borel84@gmail.com</p>
      <p>07 45 43 63 89</p>
    </div>
  </div>
</template>
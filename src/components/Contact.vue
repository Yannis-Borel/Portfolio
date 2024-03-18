<template>
  <div class="flex h-screen bg-black text-white">
    <div class="w-1/2 flex justify-center items-center">
      <div class="w-96 bg-gray-800 rounded-lg p-8">
        <input
          class="w-full mb-4 py-2 px-3 bg-gray-700 text-white rounded-md"
          type="text"
          placeholder="Nom"
        />
        <input
          class="w-full mb-4 py-2 px-3 bg-gray-700 text-white rounded-md"
          type="text"
          placeholder="Prenom"
        />
        <input
          class="w-full mb-4 py-2 px-3 bg-gray-700 text-white rounded-md"
          type="text"
          placeholder="Objet"
        />
        <textarea
          class="w-full mb-4 py-2 px-3 bg-gray-700 text-white rounded-md h-32"
          placeholder="Votre message..."
        ></textarea>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Envoyer
        </button>
      </div>
    </div>
    <div class="w-1/2 flex flex-col justify-center items-center">
      <h2 class="lg:text-8xl text-6xl font-normal leading-normal tracking-wide " style="font-family: 'Coco-Bold'">CONTACTEZ MOI</h2>
    
      <p class="mt-4">yannis.borel84@gmail.com </p>
      <p>07 45 43 63 89</p>
    </div>
  </div>
</template>
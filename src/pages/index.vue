<template>
  <LoadingScreen />
  <div class="min-h-screen bg-header-degrade flex flex-col relative">
    <Header />
    <main class="container mx-auto px-4 py-8 flex-grow">
      <section class="items-center justify-between">
        <!-- Conteneur de texte aligné à droite -->
        <div class="">
          <h1 class="text-[70px] font-bold mb-4 text-center" style="font-family: 'Coco-Bold'">Développeur web</h1>
          <h2 class="text-[40px] mt-[-30px] font-bold text-center" style="font-family: 'POLYA'">Full-stack</h2>
        </div>
      </section>
    </main>
    <!-- Container pour positionner les images -->
    <div class="relative">
      <!-- Image de fond -->
      <img
        src="@/assets/images/Fond_image.svg"
        alt="Image de fond"
        class="w-auto h-[900px] md:h-[500px] absolute bottom-0 left-0"
      />
      <!-- Votre image superposée -->
      <img
        src="@/assets/images/mon_image.png"
        alt="Yannis Borel"
        class="w-auto h-[100px] md:h-[400px] relative"
      />
    </div>
    <div class="flex justify-center w-full mt-96 absolute">
      <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Mes projets
      </button>
    </div>
    <div class="absolute bottom-0 right-0 p-4">
      <p class="text-[60px]" style="font-family: 'Coco-Bold'">Yannis Borel</p>
    </div>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </div>
  <div class="bg-black text-white py-8 px-4">
    <h1 class="text-6xl font-bold mb-8 text-center" style="font-family: 'POLYA'">Qui suis-je ?</h1>
    <div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
  <div class="bg-black border-dotted border-2 border-white rounded-[40px] p-8 text-[30px] text-center max-w-[300px]">
    <img src="@/assets/images/casquette.svg" class="block mx-auto text-4xl mb-2">
    <span class="uppercase" style="font-family: 'Coco-Bold'">BUT MMI</span>
  </div>
  <div class="bg-black border-dotted border-2 border-white rounded-[40px] p-8 text-[30px] text-center max-w-[300px]">
    <img src="@/assets/images/gateau.svg" class="block mx-auto text-4xl mb-2">
    <span class="uppercase" style="font-family: 'Coco-Bold'">19 ans</span>
  </div>
  <div class="bg-black border-dotted border-2 border-white rounded-[40px] p-8 text-[30px] text-center max-w-[300px]">
    <img src="@/assets/images/PACA.svg" class="block mx-auto text-4xl mb-2">
    <span class="uppercase" style="font-family: 'Coco-Bold'">Paca</span>
  </div>
</div>
    <p class="bg-black border-dotted border-2 border-white rounded-[40px] p-4 sm:p-8 mx-4 sm:mx-8 md:mx-[100px] lg:mx-[200px] xl:mx-[300px] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-bold text-white" style="font-family: 'Coco-Bold'">
  Passionné par le développement et la conception de solutions web innovantes, je suis un étudiant dynamique de 19 ans en deuxième année de BUT MMI, où j'affûte mes compétences en design et en programmation. Aspirant développeur web full stack, j'ai une soif d'apprendre constante et un engagement profond envers le code propre et les pratiques de développement agile.
</p>

  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import LoadingScreen from '../components/LoadingScreen.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.from('.container', {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: 3.5, // Attendre 3.5 secondes après la fin du chargement
  });
});
</script>

<style>
@font-face {
  font-family: "Coco-Bold";
  src: url("../fonts/Coco-Bold.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "POLYA";
  src: url("../fonts/POLYA.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
</style>
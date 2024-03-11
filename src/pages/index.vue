<template>
  <LoadingScreen />
  <div class="min-h-screen bg-header-degrade flex flex-col relative">
    <Header class="absolute" />
    <main class="absolute inset-0 flex justify-end items-center">
  <section class="mr-[200px] mt-[-300px]"> <!-- Adjust the margin as needed -->
    <!-- Conteneur de texte aligné à droite -->
    <div>
      <h1 class="text-black text-[96px]  font-normal leading-normal tracking-wide" style="font-family: 'Coco-Bold';">Développeur web</h1>
      <h2 class="text-black text-[48px] font-normal leading-normal tracking-[5.76px] ml-[90px]" style="font-family: 'POLYA';">Full-stack</h2>
    </div>
  </section>
</main>

<div class="relative overflow-hidden" style="height: 90vh;">
  <!-- Image de fond -->
  <img src="@/assets/images/Fond_image.svg" alt="Image de fond" class="w-auto absolute bottom-0 left-0 hidden md:block" style="max-width: 100%; max-height: 100%;" />
  <!-- Votre image superposée, utilisez des unités vh pour la hauteur afin d'éviter d'agrandir la page -->
  <img src="@/assets/images/mon_image.png" alt="Yannis Borel" class="w-auto absolute bottom-0 left-0 hidden md:block" style="height: 70vh; max-width: 100%;"
  />
</div>

<div class="absolute bottom-52 w-full flex justify-end px-[400px]">
  <button class="border-2 border-black text-black font-bold py-2 px-6 rounded-[30px] transition duration-150 ease-in-out hover:bg-black hover:text-white focus:outline-none">
    Mes projets
  </button>
</div>

    <div class="absolute bottom-0 right-0 p-4">
      <p class="text-[60px]" style="font-family: 'Coco-Bold'">Yannis Borel</p>
    </div>
    <div class="absolute bottom-0 p-4 left-1/2 transform -translate-x-1/2 animate-bounce">
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
    <h2 class="text-white text-6xl font-normal mb-8 text-center leading-normal tracking-[5.76px]" style="font-family: 'POLYA';">Qui suis-je ?</h2>
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
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from "@/components/Header.vue";
import LoadingScreen from '../components/LoadingScreen.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';


AOS.init();

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
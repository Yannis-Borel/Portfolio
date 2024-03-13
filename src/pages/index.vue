<template>
  <LoadingScreen />
  <div class="min-h-screen bg-header-degrade flex flex-col relative">
    <Header class="absolute" />
    <main class="absolute inset-0 flex justify-end items-center">
      <section class="mr-[200px] mt-[-300px]">
        <!-- Conteneur de texte aligné à droite -->
        <div>
          <h1 class="text-black text-[96px] font-normal leading-normal tracking-wide" style="font-family: 'Coco-Bold';">Développeur web</h1>
          <h2 class="text-black text-[48px] font-normal leading-normal tracking-[5.76px] ml-[90px]" style="font-family: 'POLYA';">Full-stack</h2>
        </div>
      </section>
    </main>

    <div class="relative overflow-hidden" style="height: 90vh;">
      <!-- Image de fond -->
      <img src="@/assets/images/Fond_image.svg" alt="Image de fond" class="w-auto absolute bottom-0 left-0 hidden lg:block" style="max-width: 100%; max-height: 100%;" />
      <!-- Votre image superposée, utilisez des unités vh pour la hauteur afin d'éviter d'agrandir la page -->
      <img src="@/assets/images/mon_image.png" alt="Yannis Borel" class="w-auto absolute bottom-0 left-0 hidden lg:block" style="height: 70vh; max-width: 100%;" />
    </div>

    <div class="absolute bottom-52 w-full flex justify-center mx-auto">
      <button class="border-2 justify-center flex items-center border-black text-black font-bold py-2 px-6 rounded-[30px] transition duration-150 ease-in-out hover:bg-black hover:text-white focus:outline-none">
        Mes projets
      </button>
    </div>

    <div class="absolute bottom-0 right-0 p-4">
      <p class="text-[60px]" style="font-family: 'Coco-Bold'">Yannis Borel</p>
    </div>
    <div class="absolute bottom-0 p-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
  <div class="bg-black text-white py-8 px-4">
    <h2 class="text-white text-6xl font-normal mb-10 text-center leading-normal tracking-[5.76px]" style="font-family: 'POLYA';">Qui suis-je ?</h2>
    <div ref="dottedBorder" class="dotted-border mx-auto mt-[-20px] w-3/4 mb-16 overflow-hidden">
      <div class="border-dotted-animation">
        &nbsp;
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center gap-8 m-8">
      <div class="bg-black border-dotted border-2 border-white rounded-[40px] p-12 text-[30px] text-center max-w-[300px]">
        <img src="@/assets/images/casquette.svg" class="block mx-auto text-4xl" />
        <span class="uppercase text-[26px] font-bold leading-normal tracking-wide">BUT MMI</span>
      </div>
      <div class="bg-black border-dotted border-2 border-white rounded-[40px] py-12 px-16 mx-24 text-[30px] text-center max-w-[300px]">
        <img src="@/assets/images/gateau.svg" class="block mx-auto text-4xl" />
        <span class="uppercase text-[26px] font-bold leading-normal tracking-wide">19 ans</span>
      </div>
      <div class="bg-black border-dotted border-2 border-white rounded-[40px] p-14 text-[30px] text-center max-w-[300px]">
        <img src="@/assets/images/PACA.svg" class="block mx-auto text-4xl" />
        <span class="uppercase text-[26px] font-bold leading-normal tracking-wide">Paca</span>
      </div>
    </div>
    <AnimationText />
    
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "@/components/Header.vue";
import LoadingScreen from '../components/LoadingScreen.vue';
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import AnimationText from '@/components/AnimationText.vue';

AOS.init();

const dottedBorder = ref(null);

onMounted(() => {
  const dottedBorderEl = dottedBorder.value.querySelector('.border-dotted-animation');

  gsap.set(dottedBorderEl, { backgroundPosition: '0 0' });

  gsap.to(dottedBorderEl, {
    backgroundPosition: '-100vw 0', // Déplacer le dégradé sur toute la largeur de la fenêtre
    repeat: -1, // Répéter l'animation indéfiniment
    duration: 10, // Durée de l'animation en secondes
    ease: 'none', // Mouvement à vitesse constante
  });

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

.dotted-border {
  height: 2px;
  background-image: radial-gradient(circle, white 1px, transparent 1px);
  background-size: 10px 2px;
  overflow: hidden; /* Cacher le débordement */
}

.border-dotted-animation {
  height: 2px;
  width: 100vw; /* Définir une largeur suffisante pour l'animation */
  background-image: radial-gradient(circle, white 1px, transparent 1px);
  background-size: 10px 2px;
}
</style>
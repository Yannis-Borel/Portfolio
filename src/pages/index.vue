<template>
  <LoadingScreen />
  <Accueil />
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
import { RouterLink,RouterView } from 'vue-router';
import Accueil from '@/components/Accueil.vue';


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
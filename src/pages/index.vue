<template>
  <LoadingScreen />
  <Accueil />
  <div class="bg-black text-white py-8 px-4">
    <h2
      class="text-white text-4xl lg:text-6xl md:text-6xl font-normal mb-20 mt-10 text-center leading-normal tracking-[5.76px]"
      style="font-family: 'POLYA'" data-aos="fade-up" data-aos-duration="1000">
      Qui suis-je ?
    </h2>

    <div class="flex flex-wrap justify-center">
      <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-all duration-300 hover:scale-105" data-aos="fade-up"
        data-aos-duration="1000" data-aos-delay="200">
        <div class="bg-black border-dotted border-2 border-white rounded-[40px] p-12 text-[30px] text-center h-full">
          <img src="@/assets/images/casquette.svg" class="block mx-auto text-4xl" />
          <span class="uppercase text-[26px] font-bold leading-normal tracking-wide">BUT MMI</span>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-all duration-300 hover:scale-105" data-aos="fade-up"
        data-aos-duration="1000" data-aos-delay="400">
        <div
          class="bg-black border-dotted border-2 border-white rounded-[40px] py-12 px-16 text-[30px] text-center h-full">
          <img src="@/assets/images/gateau.svg" class="block mx-auto text-4xl" />
          <span class="uppercase text-[26px] font-bold leading-normal tracking-wide">19 ans</span>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transition-all duration-300 hover:scale-105" data-aos="fade-up"
        data-aos-duration="1000" data-aos-delay="600">
        <div class="bg-black border-dotted border-2 border-white rounded-[40px] p-14 text-[30px] text-center h-full">
          <img src="@/assets/images/PACA.svg" class="block mx-auto text-4xl" />
          <span class="uppercase text-[26px] font-bold leading-normal tracking-wide">Paca</span>
        </div>
      </div>
    </div>

    <AnimationText />
    <h2
      class="text-white text-4xl lg:text-7xl md:text-6xl font-normal mb-10 text-center leading-normal tracking-[5.76px]"
      style="font-family: 'POLYA'" data-aos="fade-up" data-aos-duration="1000">
      Mes compétences
    </h2>
    <div class="flex justify-center items-center pt-4 pb-20">
      <div class="w-2/3 border-b-4 border-dotted border-white border-opacity-25"></div>
    </div>
    <div class="flex flex-wrap justify-center ">
      <svgstatique />
      <svgstatique />
      <svgstatique />
    </div>
    <h2
      class="text-white text-4xl lg:text-7xl md:text-6xl font-normal mb-10  leading-normal tracking-[5.76px] mt-28 ml-28"
      style="font-family: 'POLYA'">
      Mes projets
    </h2>
    <div class="hidden sm:block h-[3px] w-[60%] ml-28 bg-white mb-24" style="font-family: 'Coco-Bold'"></div>
  </div>

  <div>

  </div>

  <AfficheCard v-for="projet in tableauprojets" v-bind="projet" />

  <Contact />

</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "@/components/Header.vue";
import LoadingScreen from '../components/LoadingScreen.vue';
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimationText from '@/components/AnimationText.vue';
import { RouterLink, RouterView } from 'vue-router';
import Accueil from '@/components/Accueil.vue';
import svgstatique from '@/components/svgstatique.vue';
import Contact from '@/components/Contact.vue';




gsap.registerPlugin(ScrollTrigger);

AOS.init();

// Animation du titre "Qui suis-je ?"
gsap.fromTo(
  '.leading-normal',
  {
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.leading-normal',
      start: 'top 80%',
    }
  }
);

// Animation des blocs "BUT MMI", "19 ans" et "Paca"
gsap.fromTo(
  '.hover\\:scale-105',
  {
    y: 50,
    opacity: 0,
    stagger: 0.2
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.hover\\:scale-105',
      start: 'top 80%',
    }
  }
);

// Animation du texte défilant
gsap.to(
  '.text-anim span',
  {
    x: '-100%',
    repeat: -1,
    ease: 'none',
    duration: 10,
    scrollTrigger: {
      trigger: '.text-anim',
      start: 'top 80%',
      end: '+=500',
      scrub: true,
      pin: true,
    }
  }
);

import { supabase } from '@/supabase';
import AfficheCard from '@/components/AfficheCard.vue';
 
console.log(supabase);
    
let {data : tableauprojets, error} = await supabase
    .from('Card')
    .select('*');
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
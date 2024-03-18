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

</script>

<template>
<Accueil />
  <AfficheCard />
  
  kdjdj

</template>


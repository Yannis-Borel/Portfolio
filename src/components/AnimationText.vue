<script setup lang="ts">
defineProps<{
    content?: string
}>()
import { onMounted } from 'vue';

import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



onMounted(() => {

    gsap.registerPlugin(ScrollTrigger);

    const timelinetextline1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#line1",
            start: "top bottom",
            end:"bottom+=850px bottom",
            scrub: true,
            markers: false,
        },
    })

    timelinetextline1.to("#line1", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })


    timelinetextline1.to("#line2", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line3", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line4", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line5", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })

    timelinetextline1.to("#line6", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line7", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line8", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line9", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line10", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })
    timelinetextline1.to("#line11", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 300000
    })

});
</script>
<template>

<div class="flex  w-full justify-center items-center flex-col mx-4 my-72  text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-bold  " >
    
    <div class="flex justify-start items-start w-4/5 ml-[15%] flex-col text-start ">
        <p class="lg:text-3xl text-2xl text-balance  text-titre font-black" style="background: linear-gradient(90deg,#FFFFFF 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line1">Passionné par le développement et la conception </p>
 
        <p class="lg:text-3xl text-2xl  text-balance  text-titre font-black" style="background: linear-gradient(90deg,#FFFFFF 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line3">de solutions web innovantes, je suis un étudiant </p>
        <p class="lg:text-3xl text-2xl  text-balance  text-titre font-black" style="background: linear-gradient(90deg,#FFFFFF 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line4">
   dynamique de 19 ans en deuxième année de BUT MMI, </p>
        <p class="lg:text-3xl text-2xl  text-balance  text-titre font-black" style="background: linear-gradient(90deg,#FFFFFF 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line5">   </p>
  <p class="lg:text-3xl text-2xl  text-balance  text-titre font-black" style="background: linear-gradient(90deg,#FFFFFF 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line6">
   où j'affûte mes compétences en design et en programmation.</p>
     <p class="lg:text-3xl text-2xl  text-balance  text-titre font-black" style="background: linear-gradient(90deg,#FFFFFF 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line7">
   Aspirant développeur web full stack, j'ai une soif d'apprendre constante !</p>
  
    </div>
</div>


</template>`
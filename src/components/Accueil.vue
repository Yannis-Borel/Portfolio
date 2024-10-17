<template>
  <div class="min-h-screen bg-header-degrade flex flex-col relative">
    <Header class="absolute" />
    <main class="inset-0 flex lg:justify-end justify-center items-center lg:items-center">
      <div class="paper-wrapper">
        <section class="sm:mr-0 sm:mt-0 flex flex-col items-center">
          <div class="sm:flex sm:flex-col sm:items-center lg:mr-24 mt-12">
            <h1
              class="text-black lg:text-8xl text-6xl font-normal leading-normal tracking-wide text-center"
              style="font-family: 'Coco-Bold'"
            >
              Développeur web
            </h1>
            <h2
              class="text-black lg:text-6xl text-4xl font-normal leading-normal tracking-[5.76px] sm:ml-0 sm:text-center p-6"
              style="font-family: 'POLYA'"
            >
              Full-stack
            </h2>
            <div class="flex justify-center w-full mt-28">
              <button
                @click="downloadCV"
                class="border-2 justify-center flex items-center border-black text-black font-bold py-2 px-6 rounded-[30px] transition duration-150 ease-in-out hover:bg-black hover:text-white focus:outline-none"
              >
                Voir mon CV
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
    <div class="overflow-hidden">
      <img
        src="@/assets/images/Fond_image.svg"
        alt="Image de fond"
        class="w-auto absolute bottom-0 left-0 hidden lg:block"
        style="width: 75vh; max-height: 100%"
      />
      <img
        src="@/assets/images/mon_image.png"
        alt="Yannis Borel"
        id="yannisBorel"
        class="w-auto absolute bottom-0 left-0 hidden lg:block"
        style="height: 70vh; max-width: 100%"
      />
    </div>

    <div class="absolute inset-x-0 bottom-0 flex lg:justify-between lg:items-end p-4">
      <div class="flex justify-center w-full lg:ml-64">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-black animate-bounce hidden lg:block"
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

      <p
        class="text-6xl whitespace-nowrap text-center lg:text-right"
        style="font-family: 'Coco-Bold'"
      >
        Yannis Borel
      </p>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { defineComponent } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const paperWrapper = document.querySelector('.paper-wrapper')
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: paperWrapper,
      start: 'top top',
      end: '100%',
      scrub: 2,
      pin: true
    }
  })

  tl.to(paperWrapper, {
    rotationX: 90,
    rotationY: 90,
    perspective: 1000,
    duration: 2
  })
})

const downloadCV = () => {
  const cvURL = 'https://drive.google.com/file/d/1viWXsG7_T66KjcfEUsRmaa_KuiSuIPcr/view?usp=sharing'

  const link = document.createElement('a')
  link.href = cvURL
  link.download = 'CV_YANNIS_BOREL_STAGE.pdf'

  // Simuler un clic sur le lien
  link.click()
}
</script>

<style scoped>
.paper-wrapper {
  transform-style: preserve-3d;
}
</style>

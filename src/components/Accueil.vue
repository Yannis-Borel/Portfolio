<template>
  <div class="min-h-screen bg-header-degrade flex flex-col relative">
    <Header class="absolute" />
    <main class="inset-0 flex lg:justify-end items-center lg:items-center">
      <section class="mt-[-300px] lg:mr-[200px] lg:mt-[-300px] sm:mr-0 sm:mt-0">
        <div class="mt-80 sm:flex sm:flex-col sm:items-center">
          <h1 class="text-black lg:text-8xl md:text-7xl sm:text-4xl font-normal leading-normal tracking-wide sm:text-center" style="font-family: 'Coco-Bold';">Développeur web</h1>
          <h2 class="text-black text-[48px] font-normal leading-normal tracking-[5.76px] ml-[90px] sm:ml-0 sm:text-center" style="font-family: 'POLYA';">Full-stack</h2>
          <div class="flex justify-center w-full mt-8">
            <button class="border-2 justify-center flex items-center border-black text-black font-bold py-2 px-6 rounded-[30px] transition duration-150 ease-in-out hover:bg-black hover:text-white focus:outline-none">
              Mes projets
            </button>
          </div>
        </div>
      </section>
    </main>
    <div class="overflow-hidden">
      <img src="@/assets/images/Fond_image.svg" alt="Image de fond" class="w-auto absolute bottom-0 left-0 hidden lg:block" style="max-width: 100%; max-height: 100%;" />
      <img src="@/assets/images/mon_image.png" alt="Yannis Borel" class="w-auto absolute bottom-0 left-0 hidden lg:block" style="height: 70vh; max-width: 100%;" />
    </div>
    <div class="absolute inset-x-0 bottom-0 flex lg:justify-between lg:items-end p-4">
      <div class="flex justify-center w-full lg:ml-64">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black animate-bounce hidden lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      <p class="text-6xl whitespace-nowrap text-center lg:text-right" style="font-family: 'Coco-Bold'">Yannis Borel</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
}
</script>

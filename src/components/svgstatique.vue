<template>
  <div class="bg-black p-4 m-[2%] rounded-3xl border-2 border-gray-700 w-72 relative">
    <div class="text-white font-bold mb-2">HTML + CSS</div>
    <div class="h-2 bg-gray-800 rounded-full overflow-hidden mb-2 border-2 border-gray-700">
      <div
        class="bg-white h-2 rounded-full transition-all duration-1000 ease-in-out"
        :style="{ width: htmlCssWidth + '%' }"
      ></div>
    </div>
    <div class="text-white font-bold mb-2">Javascript</div>
    <div class="h-2 bg-gray-800 rounded-full overflow-hidden mb-2 border-2 border-gray-700">
      <div
        class="bg-white h-2 rounded-full transition-all duration-1000 ease-in-out"
        :style="{ width: jsWidth + '%' }"
      ></div>
    </div>
    <div class="text-white font-bold mb-2">PHP</div>
    <div class="h-2 bg-gray-800 rounded-full overflow-hidden mb-2 border-2 border-gray-700">
      <div
        class="bg-white h-2 rounded-full transition-all duration-1000 ease-in-out"
        :style="{ width: phpWidth + '%' }"
      ></div>
    </div>
    <div class="text-white font-bold mb-2">SQL</div>
    <div class="h-2 bg-gray-800 rounded-full overflow-hidden mb-2 border-2 border-gray-700">
      <div
        class="bg-white h-2 rounded-full transition-all duration-1000 ease-in-out"
        :style="{ width: sqlWidth + '%' }"
      ></div>
    </div>
    <div class="text-white font-bold mb-2">VueJS</div>
    <div class="h-2 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700">
      <div
        class="bg-white h-2 rounded-full transition-all duration-1000 ease-in-out"
        :style="{ width: reactWidth + '%' }"
      ></div>
    </div>
    <div class="light-glow"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlCssWidth: 0,
      jsWidth: 0,
      phpWidth: 0,
      sqlWidth: 0,
      reactWidth: 0,
    };
  },
  mounted() {
    this.animateProgressBars();
  },
  methods: {
    animateProgressBars() {
      setTimeout(() => {
        this.htmlCssWidth = 70;
      }, 0);
      setTimeout(() => {
        this.jsWidth = 40;
      }, 1000);
      setTimeout(() => {
        this.phpWidth = 60;
      }, 2000);
      setTimeout(() => {
        this.sqlWidth = 40;
      }, 3000);
      setTimeout(() => {
        this.reactWidth = 70;
      }, 4000);
    },
  },
};
</script>

<style scoped>
.light-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 3rem;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  animation: glow 1.5s ease-in-out infinite;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px 5px rgba(119, 119, 119, 0.5);
  }
  50% {
    box-shadow: 0 0 5px 10px rgb(112, 111, 111);
  }
  100% {
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  }
}
</style>
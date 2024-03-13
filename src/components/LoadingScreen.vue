<template>
  <div v-if="showLoading" class="loading-screen">
    <div class="loading-container">
      <div class="loading-bar">
        <div class="loading-progress" :style="{ width: `${progress}%` }"></div>
      </div>
      <div class="loading-percentage">{{ progress }}%</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const showLoading = ref(true);
    const progress = ref(0);

    const hideLoadingScreen = () => {
      showLoading.value = false;
    };

    const updateProgress = () => {
      if (progress.value < 100) {
        progress.value += 1;
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(hideLoadingScreen, 750); // Attendre 0.5 seconde avant de masquer le chargement
      }
    };

    setTimeout(() => {
      updateProgress();
    }, 500); // Démarrer le chargement après 0.5 seconde

    return {
      showLoading,
      progress,
    };
  },
};
</script>

<style>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #bcbcbc;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-bar {
  width: 80vw; /* Utilisez vw (viewport width) pour une largeur proportionnelle à la fenêtre */
  height: 30px; /* Augmentez la hauteur si vous le souhaitez */
  background-color: #fff;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
}

.loading-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #000000;
  border-radius: 20px;
}

.loading-percentage {
  margin-top: 10px;
  font-size: 24px;
  color: #fff;
}
</style>
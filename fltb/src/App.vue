<script setup>
import { NDivider, NH1 } from 'naive-ui';
import { loadFull } from "tsparticles"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import particlesOpitions from './particles.json';
import {  RouterView } from 'vue-router';
const particlesInit = async engine => {
  await loadFull(engine);
};

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};

</script>

<template>
  <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
    :options="particlesOpitions" />
  <div class="container pb-3 pt-1 ps-4 pe-4 mt-3 animate__animated animate__fadeInDown"
    style="background-color: #ffffffa1;">
    <n-divider>
      <n-h1 class="animate__animated animate__heartBeat animate__delay-1s">User Management System by FLTB</n-h1>
    </n-divider>
    <RouterView />
  </div>
</template>

<style scoped>
</style>

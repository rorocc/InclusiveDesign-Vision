<template>

<Layout :blurry="layoutBlurry" :showReducedFov="showReducedFov">
  <div class="bg-rose-700-custom">
    <div class="container mx-auto pt-20 pb-10">
      <Masthead />
    </div>
  </div>
  <nav class="flex items-center justify-between flex-wrap bg-rose-700-custom p-6">
    <div class="container mx-auto pl-10 flex items-center justify-between flex-wrap">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="flex">
          <a href="#overview" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
            Welche Sehbeeinträchtigungen gibt es?
          </a>
          <a href="#usability" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
            Usability & Sehbeeinträchtigungen
          </a>
          <a href="#simulation" class="block mt-4 lg:inline-block lg:mt-0 ">
            Simulation
          </a>
        </div>
      </div>
      <div class="inline-flex space-x-5">
        <FontsizeToggle></FontsizeToggle>
        <ColorToggle></ColorToggle>
      </div>
    </div>
  </nav>

    <div class="container mx-auto pl-20 py-10">
      <div class="content max-w-prose"><slot /></div>
  </div>
  </Layout>
<footer class="w-full fixed bottom-0">
  <div class="container mx-auto">
    <div class="px-6 py-4 lg:w-96 md:w-96 sm:w-full h-auto bg-rose-700-custom simulator-content float-right shadow-xl">
      <h3 class="font-black text-xl mb-3">Simulator</h3>
      <p class="mb-3 tracking-tight">Probiere Simulationen verschiedener Sehbeeinträchtigungen auf dieser Website aus</p>
      <div>
        <SwitchButton @toggle="setBlurry($event)">Verminderte Sehschärfe</SwitchButton>
        <SwitchButton @toggle="showReducedFov = ! showReducedFov">Verringertes Sichtfeld</SwitchButton>
      </div>
    </div>
  </div>
</footer>
</template>

<script lang="ts" setup>
import Link from './Link.vue'
import Masthead from '../components/Masthead.vue';
import ColorToggle from  '../components/ColorToggle.vue';
import FontsizeToggle from '../components/FontsizeToggle.vue'
import SwitchButton from '../components/SwitchButton.vue';
import Layout from '../components/Layout.vue';

import { ref } from 'vue';

const layoutBlurry = ref(false);
const showReducedFov = ref(false);

function setBlurry(isBlurry: boolean) {
  layoutBlurry.value = isBlurry;
}
</script>

<style>
.layout {
  transition: filter .5s;
}
.layout.blurry {
  filter: blur(1.5px);
}
</style>
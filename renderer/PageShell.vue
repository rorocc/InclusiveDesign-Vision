<template>

<Layout :blurry="layoutBlurry" :showReducedFov="showReducedFov">
  <div class="h-screen">

    <nav class="items-center justify-between flex-wrap bg-rose-700-custom p-6">
    <div class="container mx-auto pl-10 flex items-center justify-between flex-wrap">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="flex">
          <a href="#overview" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
            Welche Sehbeeinträchtigungen gibt es?
          </a>
          <a href="#usability" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
            Usability & Sehbeeinträchtigungen
          </a>
        </div>
      </div>
      <div class="inline-flex space-x-5">
        <FontsizeToggle></FontsizeToggle>
        <ColorToggle></ColorToggle>
      </div>
    </div>
  </nav>

  <header class=" h-2/3 bg-rose-700-custom overflow-hidden relative">
    <div class="container mx-auto pt-10 pb-20">
      <Masthead />
      <svg id="svg-eye" class="opacity-20 right-0 scale-125 absolute top-1/3"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           width="728px" height="620px">
        <path fill-rule="evenodd"
              d="M0.837,345.977 C0.837,345.977 177.878,124.186 391.405,143.422 C604.931,162.659 674.982,318.970 674.982,318.970 C674.982,318.970 609.948,480.230 415.296,475.820 C220.644,471.410 160.804,347.16 160.804,347.16 C160.804,347.16 176.341,300.966 284.414,248.335 C392.487,195.705 492.509,250.752 491.124,320.9 C489.739,389.265 419.212,410.530 384.133,398.953 C349.54,387.377 307.419,355.449 404.908,274.304 C262.572,274.360 277.732,486.956 459.962,432.193 C582.707,376.486 506.507,209.995 431.916,200.553 C369.599,182.614 265.620,171.67 116.138,338.706 C236.695,547.890 452.691,515.293 452.691,515.293 C452.691,515.293 630.42,506.252 727.958,323.125 C619.94,119.226 423.935,104.726 389.327,103.950 C354.720,103.174 121.694,74.49 0.837,345.977 Z"/>
      </svg>
    </div>
  </header>


    <div class="container mx-auto pl-20 py-10">

      <div class="content">
                <slot /></div>
    </div>

  </div>
  </Layout>
<footer class="w-full fixed bottom-0 pointer-events-none">
  <div class="container mx-auto">
    <div class="pointer-events-auto px-6 py-4 lg:w-96 md:w-96 sm:w-full h-auto bg-rose-700-custom simulator-content float-right shadow-xl">
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
<template>

<Layout :blurry="layoutBlurry" :showReducedFov="showReducedFov" :showCentralFovLoss="showCentralFovLoss" :showOtherFovLoss="showOtherFovLoss">
  <div class="h-screen">

    <nav aria-label="Hauptnavigation" class="items-center justify-between flex-wrap bg-rose-700-custom p-6">
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
    <div class="container mx-auto pt-10 pb-10">
      <Masthead />
      <svg id="svg-eye" class="opacity-20 right-0 scale-125 absolute top-1/4"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           width="728px" height="620px" aria-labelledby="eyeTitle">
        <title id="eyeTitle">Huge abstract eye symbol</title>
        <path fill-rule="evenodd"
              d="M0.837,345.977 C0.837,345.977 177.878,124.186 391.405,143.422 C604.931,162.659 674.982,318.970 674.982,318.970 C674.982,318.970 609.948,480.230 415.296,475.820 C220.644,471.410 160.804,347.16 160.804,347.16 C160.804,347.16 176.341,300.966 284.414,248.335 C392.487,195.705 492.509,250.752 491.124,320.9 C489.739,389.265 419.212,410.530 384.133,398.953 C349.54,387.377 307.419,355.449 404.908,274.304 C262.572,274.360 277.732,486.956 459.962,432.193 C582.707,376.486 506.507,209.995 431.916,200.553 C369.599,182.614 265.620,171.67 116.138,338.706 C236.695,547.890 452.691,515.293 452.691,515.293 C452.691,515.293 630.42,506.252 727.958,323.125 C619.94,119.226 423.935,104.726 389.327,103.950 C354.720,103.174 121.694,74.49 0.837,345.977 Z"/>
      </svg>
    </div>
  </header>


    <div class="container mx-auto pl-4 lg:pl-20 py-10">

      <div class="content" role="main">
                <slot /></div>
    </div>
    <footer class="items-center justify-between flex-wrap bg-rose-700-custom p-6">
      <nav aria-label="Impressum in der Fussleiste" class="container mx-auto pl-10">
        <h1 class="font-bold mb-5 text-xl">Impressum</h1>
        <Paragraph>
          <strong>Chris Rock, Bjoern Emkes, Jacob Mellin</strong>
        </Paragraph>
        <Paragraph>
          Projektarbeit im Rahmen der Veranstaltung „Inclusive Design“ der Universität zu Lübeck
        </Paragraph>
        <Paragraph>
          <em>Hier würden noch Angaben nach dem Telemediengesetz/DSGVO stehen.</em>
        </Paragraph>
      </nav>
    </footer>
  </div>
  <transition name="fade">
    <div role="button" id="pagetop" class="upButton fixed left-0 bottom-0" v-show="scY > 300" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  </transition>
  </Layout>
<footer class="w-full fixed bottom-0 pointer-events-none z-20">
  <div class="container mx-auto">
    <div class="pointer-events-auto px-6 py-4 lg:w-96 md:w-96 sm:w-full h-auto bg-rose-700-custom simulator-content float-right shadow-xl">
      <Accordion>
      <template v-slot:title>
        <h3 class="font-black text-xl mb-3">Simulator</h3>
      </template>
      <template v-slot:content>
        <p class="mb-3 tracking-tight">Probieren Sie Simulationen verschiedener Sehbeeinträchtigungen auf dieser Website aus:</p>
        <h4 class="font-bold mb-2">Sehschärfe</h4>
        <SwitchButton @toggle="setBlurry($event)">Verminderte Sehschärfe</SwitchButton>
        <h4 class="font-bold mb-2">Beeinträchtigtes Sichtfeld</h4>
        <SwitchButton :switchVal="showReducedFov" @toggle="showReducedFov = ! showReducedFov">Periphärer Sichtfeldverlust</SwitchButton>
        <SwitchButton :switchVal="showCentralFovLoss" @toggle="showCentralFovLoss = ! showCentralFovLoss">Zentraler Sichtfeldverlust</SwitchButton>  
        <SwitchButton :switchVal="showOtherFovLoss" @toggle="showOtherFovLoss = ! showOtherFovLoss">Andersartiger Sichtfeldverlust</SwitchButton>
      </template>
      </Accordion>
      <div>
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
import Accordion from '../components/Akkordeon.vue';
import Paragraph from '../components/Paragraph.vue';
import { ref } from 'vue';

const layoutBlurry = ref(false);
const showReducedFov = ref(false);
const showCentralFovLoss = ref(false);
const showOtherFovLoss = ref(false);

let group = [
  ''
];

function setBlurry(isBlurry: boolean) {
  layoutBlurry.value = isBlurry;
}
</script>

<script lang="ts">
export default{
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  }
}
</script>

<style>
.upButton{
  background-color: var(--background-color-secondary);
}

.upButton svg{
  stroke: var(--background-color-primary)
}

.layout {
  transition: filter .5s;
}
.layout.blurry {
  filter: blur(1.5px);
}

</style>
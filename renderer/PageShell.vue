<template>
<div class="layout text-base">
<nav class="flex items-center justify-between flex-wrap bg-rose-700 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Inclusive Design: Sehstörungen</span>
  </div>
  <div class="block lg:hidden">
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white">
        Blog
      </a>
    </div>
  </div>
</nav>
  <div class="container pl-20 py-20 bg-rose-700">
    <Masthead />
  </div>
    <div class="container pl-20 py-10">
      <div class="content max-w-prose"><slot /></div>
  </div>
</div>
</template>

<script lang="ts" setup>
import Link from './Link.vue'
import Masthead from '../components/Masthead.vue';
import ColorToggle from  './ColorToggle.vue';
</script>

<style>

/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}

</style>
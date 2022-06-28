<template>
  <div class="layout">
    <ColorToggle></ColorToggle>
    <div class="navigation">
      <a href="/" class="logo">
        <img src="./logo.svg" height="64" width="64" alt="logo" />
      </a>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
    <div class="content"><slot /></div>
  </div>
  <p>hehe</p>
</template>

<script lang="ts" setup>
import Link from './Link.vue'
import ColorToggle from  './ColorToggle.vue';
</script>

<style>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

.layout {
   display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8em;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}

html,
body {
  font-family: sans-serif;
  background-color: var(--background-color-primary);
  padding: 0;
  margin: 0;
  color: var(--text-primary-color);
}

h1,p {
  color: var(--text-primary-color);
}
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

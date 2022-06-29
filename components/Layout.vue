<template>
<div class="layout text-base" :class="{ blurry: blurry }">
<slot></slot>
</div>
</template>

<script lang="ts">
export default {
    data() {
        return {
        }
    },
    props: {
        blurry: Boolean
    },
    methods: {
    },
    created() {
    }
}
</script>

<style>
.layout {
  transition: filter .5s;
}
.layout.blurry {
  filter: blur(1.25px);
}
</style>
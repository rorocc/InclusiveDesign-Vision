<template>
  <div class="inline-flex space-x-2 ml-3 my-2 opacity-80">
    <span class="material-icons-outlined">link</span>
    <p>
      <slot/>
    </p>

  </div>

</template>

<script>
export default {
  name: "Source"
}
</script>

<style scoped>

  p, span, a:hover{
    color: var(--text-primary-color)
  }
</style>
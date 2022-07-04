<template>
  <div>
    <button aria-label="Taste: Schriftgröße verstellen" class="flex text-left items-center" @click="toggleTheme">
      <span aria-hidden="true" class="material-icons-outlined toggleIcon mr-2">format_size</span>
      <div class="toggleButtonCircle">
        <p>Schriftgröße</p>
        <span v-if="fontSize === 'normal-fontSize'">Normal</span>
        <span v-if="fontSize === 'medium-fontSize'">Mittel</span>
        <span v-if="fontSize === 'large-fontSize'">Groß</span>
      </div>
     </button>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    const initUserSize = this.getSize() || 'normal-fontSize';
    this.setSize(initUserSize);
    const appTag = document.getElementById("app");
    appTag.classList.add(initUserSize);
  },

  data() {
    return {
      fontSize: "normal-fontSize",
    };
  },

  methods: {
    toggleTheme() {
      const activeSize = localStorage.getItem("user-fontSize");
      if (activeSize === "normal-fontSize") {
        this.setSize("medium-fontSize");
      } else if (activeSize === "medium-fontSize") {
        this.setSize("large-fontSize");
      } else {
        this.setSize("normal-fontSize");
      }
    },

    getSize() {
      return localStorage.getItem("user-fontSize");
    },


    setSize(size) {
      localStorage.setItem("user-fontSize", size);
      this.fontSize = size;

      const appTag = document.getElementById("app");
      appTag.classList.remove(...appTag.classList);
      appTag.classList.add(size);

    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

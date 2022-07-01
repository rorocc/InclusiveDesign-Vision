<template>
  <div>
    <button @click="toggleTheme">Schriftgröße: {{this.fontSize}}</button>
  </div>
</template>

<script>
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

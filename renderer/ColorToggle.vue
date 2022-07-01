<template>
  <div>
    <button @click="toggleTheme">Color Profile: {{this.userThemeString}}</button>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    const initThemeString = this.getThemeString();
    this.setString(initThemeString)
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
      userThemeString: "Light",
    };
  },

  methods: {
    toggleTheme() {
      console.log(this.getTheme())
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
        this.setString("Dark");
      } else {
        this.setTheme("light-theme");
        this.setString("Light");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    getThemeString() {
      return localStorage.getItem("user-theme-string");
    },

    setString(string){
      localStorage.setItem("user-theme-string", string);
      this.userThemeString = string;
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--text-primary-color);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>

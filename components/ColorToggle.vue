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
      } else if (activeTheme === "dark-theme") {
        this.setTheme("high-contrast");
        this.setString("Hoher Kontrast");
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


</style>

<template>
  <div id="app">
    <TopNavbar />

    <div id="main-content" class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNavbar from "./components/TopNavbar";

export default {
  name: "App",

  components: {
    TopNavbar,
  },

  mounted() {
    let userToken = localStorage.getItem("userToken");

    if (userToken !== null && userToken.length > 0) {
      this.$store.dispatch("logUserIn", userToken);
      this.logged = true;
    }
  },
};
</script>

<style scoped>
#main-content {
  margin-top: 20px;
}
</style>

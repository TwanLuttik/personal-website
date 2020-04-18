<template>
  <div id="app">
    <sidebar />
    <router-view class="router-view-container" />
  </div>
</template>

<script>
import sidebar from "./parts/sidebar";

export default {
  components: {
    sidebar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
#app {
  font-family: "Source Sans Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: 18px;
  color: #26272b;
  height: 100%;
  display: flex;

  .router-view-container {
    padding-top: 20px;
  }

  /* .router-view-container {
    @media only screen and (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    }
  } */
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}
</style>

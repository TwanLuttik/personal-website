<template>
  <div id="app">
    <navbar/>
    <router-view class="router-view-container"/>
  </div>
</template>

<script>
import navbar from './parts/navbar';

export default {
  components: {
    navbar
  }
  
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
#app {
  font-family: 'Source Sans Pro', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
  color: white;
  height: 100%;

  .router-view-container {
    @media only screen and (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
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

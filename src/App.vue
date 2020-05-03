<template>
  <div id="app">
    <Header />
    <router-view class="router-view-container" />
  </div>
</template>

<script>
import Header from './parts/Header';

export default {
  components: { Header },
  data() {
    return {
      ...this.mapData({
        theme: 'base/theme'
      })
    }
  },
  methods: {
    InitColors() {
    
      for (const item in this.theme) {
        if (item == 'rootProperty' | item == 'propertyName') continue;
        if (typeof this.theme[item] == 'object') {
          for (const item2 in this.theme[item]) {
            if (item2 == 'rootProperty' | item2 == 'propertyName') continue;
            document.documentElement.style.setProperty(`--${item}-${item2}`, this.theme[item][item2]);
          }
          continue;
        }
        document.documentElement.style.setProperty(`--${item}`, this.theme[item]);
      }

    }
  },
  mounted() {
    this.InitColors();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
#app {
  font-family: "Source Sans Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* font-weight: bold; */
  /* letter-spacing: 0.4px; */
  font-size: 18px;
  /* background: var(--terminal-background); */
  background: #ffffff;
  background-image: url('./assets/img/b2.jpg');
  /* backgrounrgb(216, 216, 216)99,96,231); */
  /* background: linear-gradient(147deg, rgba(99,96,231,1) 0%, rgba(199,95,207,1) 100%); */
  height: 100%;
  display: flex;
  flex-direction: column;


  .router-view-container {
    /* background: rgb(252, 252, 252);
    border: solid 1px rgb(240, 240, 240); */
    /* height: 100%; */
    /* display: flex;
    justify-content: center;
    overflow-y: scroll;
    background-image: url('./assets/img/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
   /* backdrop-filter: blur(2px); */ 
   /* filter: blur(3px); */
    
    /* @media only screen and (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    } */
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

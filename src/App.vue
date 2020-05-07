<template>
  <div id="app">
    <!-- <Header /> -->
    <router-view class="router-view-container" />
  </div>
</template>

<script>

export default {
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
  font-size: 18px;
  background: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  letter-spacing: 0.14px;

  .router-view-container {
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

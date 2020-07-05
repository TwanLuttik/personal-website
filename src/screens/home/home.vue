<template>
  <div id="home">

    <div class="container">
      
      <h1>Twan Luttik</h1>
      <br>
      <br>
      <br>
      <br>
      <br>

      <h3>Social Media</h3>
      <div class="flex-row">
        <infoBox
          icon="twitter"
          @click.native="openLink('https://twitter.com/TwanLuttik')"
          @mouseenter.native="hoverMouse = 'Twitter'"
          @mouseleave.native="hoverMouse = null"
        />

        <infoBox
          icon="github"
          @click.native="openLink('https://github.com/TwanLuttik')"
          @mouseenter.native="hoverMouse = 'Github'"
          @mouseleave.native="hoverMouse = ''"
        />

        <infoBox
          icon="linkedin"
          @click.native="openLink('https://www.linkedin.com/in/twanluttik/')"
          @mouseenter.native="hoverMouse = 'LinkedIn'"
          @mouseleave.native="hoverMouse = ''"
        />

      </div>

      <div class="Line"/>

      <h3>Projects</h3>

      <infoBox
        icon="trophy"
        title="Secret"
      />

      <infoBox
        title="upsidedownstein"
        @click.native="openLink('https://upsidedownstein.com')"
      />


    </div>

  </div>
</template>

<script>
import infoBox from './parts/infoBox';
export default {
  components: {
    infoBox
  },
  data() {
    return {
      hoverMouse: ''
    }
  },
  methods: {
    openLink(url) {
      console.log('dsadsa');
      window.open(url, 'x')
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  /* transition: all .2s ease-in-out;
  .showText {
    transition: all .2s;
  } */
  // display: flex;
  // align-items: center;
}

.container {
  margin: 0 auto;
  margin-top: 50px;
  width: fit-content;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  .box {
    padding: 10px;
    /* min-width: 270px; */
   
    .profile {
      border-radius: 18px;
      height: 150px;
      width: 150px;
      image-rendering: pixelated;
      margin: 30px;
    }

    .icon {
      margin: 5px;
    }
  }

  .fade-enter-active {
    transition: opacity .1s ease-in-out;
  }
  .fade-leave-active {
    transition: opacity .5s ease-in-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  
}

.Line {
  background-color: #F2F2FA;
  height: 3px;
  border-radius: 10px;
  margin: 35px 0;
  width: 100%;
}
</style>
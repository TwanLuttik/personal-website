<template>
  <div id="home">

    <div class="container">
      <infoBox
        title="Name"
        desc="Twan Luttik"
      />

      <div class="Line"/>
      <h3>Social Media</h3>

      <infoBox
        icon=""
        @click.native="openLink('https://twitter.com/TwanLuttik')"
      />

      <infoBox
        title="GitHub"
        desc="TwanLuttik"
        @click.native="openLink('https://github.com/TwanLuttik')"
      />

      <infoBox
        title="LinkedIn"
        desc="twanluttik"
        @click.native="openLink('https://www.linkedin.com/in/twanluttik/')"
      />
      



    </div>


    <!-- <div class="container">
      <div class="box">
        <img class="profile" src="../../assets/img/profile-tl.png" >
        <p>Twan Luttik</p>
        <div style="display:flex;justify-content:center;padding-top:10px;">
          <Icon class="icon" name="github" :size="30"/>
          <Icon class="icon" name="gitlab"/>
          <Icon class="icon" name="instagram"/>
          <Icon class="icon" name="linkedin"/>
        </div>
      </div>
    </div> -->

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
      test: false
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
  // display: flex;
  // align-items: center;
}

.container {
  margin: 0 auto;
  margin-top: 50px;
  width: fit-content;
  border-radius: 11px;
  
  
  .box {
    padding: 10px;
    min-width: 270px;
   
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

  
}

.Line {
  background-color: #F2F2FA;
  height: 3px;
  border-radius: 10px;
  margin: 35px 0;
  width: 100%;
}
</style>
<template>
  <div id="home">

    <div class="container">
      <div class="box">
        <img class="profile" src="../../assets/img/profile-tl.png" >
        <p>Twan Luttik</p>

        <div style="display:flex;justify-content:center;padding-top:10px;">
          <Icon class="icon" name="github"/>
          <Icon class="icon" name="gitlab"/>
          <Icon class="icon" name="instagram"/>
          <Icon class="icon" name="linkedin"/>
        </div>
        
      </div>
    </div>

    <!-- <Icon name="github" size="50"/> -->


  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
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

  .box {
    padding: 10px;
    // box-shadow: 0 0 15px 4px #00000015;
    border-radius: 8px;
    border: solid 1px rgb(219, 219, 219);
    min-width: 200px;
   
    .profile {
      border-radius: 50px;
      height: 50px;
      width: 50px;
    }

    .icon {
      margin: 5px;
    }
  }

  
}
</style>
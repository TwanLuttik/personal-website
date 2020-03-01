<template>
  <div id="navbar">
    <div class="container">
      <p class="title" @click="$router.push('/')">Twan Luttik</p>
      <p @click="$router.push('projects')">Projects</p>
      <p @click="$router.push('about')">About</p>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#navbar {
  width: 100%;
  border-bottom: solid 1px #75fa807e;
  padding-bottom: 1px;
  margin-bottom: 20px;

  p {
    margin: 0 15px;
    cursor: pointer;

    transition: opacity .1s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
  .title {
    font-size: 50px;
    color: #75fa80;
    font-variant-caps: all-small-caps;
    letter-spacing: 1.5px;
    padding-bottom: 10px;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: 50px;
    @media only screen and (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
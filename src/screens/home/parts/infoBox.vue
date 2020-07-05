<template>
  <div class="infoBox">
    <p class="title" v-if="title">{{title}}:</p>
    <p v-if="desc">{{desc}}</p>
    <Icon size="30" :name="icon" v-if="icon"/>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'icon']

}
</script>

<style lang="scss" scoped>
.infoBox {
  display: flex;
  align-items: center;
  flex-direction: flex;
  padding: 10px;
  background-color: #F2F2FA;
  width: fit-content;
  border-radius: 22px;
  margin: 20px 0;

  .title {
    text-align: left;
  }

  /* .icon {
    height: 20px;
    width: 20px;
  } */


  transition: transform .2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
}
</style>
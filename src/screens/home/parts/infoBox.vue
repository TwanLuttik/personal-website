<template>
  <div class="infoBox">
    <Icon size="20" :name="icon" v-if="icon" iconColor="#414358"/>
    <div v-if="icon && title" style="width: 8px"/>
    <p v-if="title" class="title">{{title}}</p>
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
  padding: 10px;
  background-color: #F2F2FA;
  width: fit-content;
  border-radius: 22px;
  margin: 10px 5px;


  transition: transform .2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:active {
    cursor: pointer;
    transform: scale(1.2);
  }
  .title {
    user-select: none;
  }
}
</style>
<template>
  <div id="Home">
    <Icon name="github" />
    <Icon name="linkedin"/>
    <!-- <Icon /> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#Home {
  display: flex;
  justify-content: center;
  button {
    margin: 10px;
    border-radius: 3px;
    font-size: 18px;
    padding: 5px 15px;
    outline: none;
    border: none;
    background: rgb(235, 235, 235);
    cursor: pointer;
    &:hover {
      background: rgb(196, 196, 196);
    }
  }
  .svg {
    height: 40px;
    width: 40px;
  }
}
</style>
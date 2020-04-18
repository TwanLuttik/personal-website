<template>
  <div id="Home">
    <Icon class="icon" name="github" />
    <Icon class="icon" name="linkedin" />
    <!-- <Icon /> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Home {
  display: flex;
  justify-content: center;
  padding-top: 20px;  
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
  .icon {
    height: fit-content;

    transition: opacity 0.2s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
// color: #0077b5;
</style>
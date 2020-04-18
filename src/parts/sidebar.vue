<template>
  <div id="sidebar">
    <p class="title" @click="$current_tab = 'projects'">Twan Luttik</p>
    <br />

    <p
      class="sub"
      v-for="(item, index) in tabs"
      :key="index"
      :class="{ active: current_tab === item.route }"
      @click="$router.push(item.route)"
    >
      {{ item.name }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ...this.mapData({
        current_tab: "base/current_tab",
      }),
      tabs: [
        {
          name: "Home",
          route: "",
        },
        {
          name: "Projects",
          route: "projects",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  text-align: left;
  background: #26272b;
  color: rgb(233, 233, 233);
  height: 100%;
  width: 300px;
  padding-bottom: 1px;
  padding-left: 20px;
  box-shadow: 5px 0px 20px 6px #0000002e;
  margin-right: 50px;

  .title {
    padding-top: 50px;
    font-size: 20px;
  }
  .sub {
    cursor: pointer;
    color: rgb(122, 122, 122);
    padding: 5px 0;
    padding-left: 10px;
    font-size: 16px;
    transition: color 0.2s ease;
    &:hover {
      color: rgb(233, 233, 233);
    }
  }
  .active {
    color: rgb(233, 233, 233);
  }
}
</style>

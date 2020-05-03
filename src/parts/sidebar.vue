<template>
  <div id="sidebar">
    <Terminal></Terminal>
  </div>
</template>

<script>
import Terminal from '../parts/Terminal/Terminal';

export default {
  components: { Terminal },
  data() {
    return {
      ...this.mapData({
        current_tab: "base/current_tab",
      }),
      
    };
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  background: red;
}
</style>

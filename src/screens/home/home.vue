<template>
  <div id="home">
    <!-- <Terminal style="margin: 0 auto;" /> -->
    <div>
      <p>Twan Luttik</p>
    </div>
    
  </div>
</template>

<script>
// import Terminal from '@/parts/Terminal/Terminal';

export default {
  // components: { Terminal }, 
  data() {
    return {
      lastPressed: ''
    }
  },
  methods: {
    
  },
  mounted() {
    // document.addEventListener('keydown', this.keyHandler);
  }

}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  align-items: center;;
}
</style>
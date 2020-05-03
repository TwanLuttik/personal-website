<template>
  <div id="terminal">




    <!-- <p>{{ lastPressed }} | {{current}}</p> -->

    <!-- <div class="terminal-header-container">
      <div
        v-for="(item, index) in current_menu_options" 
        :key="index"
        class="line"
      >
        <p class="key">{{ index }}:</p>
        <p class="value">{{ typeof item == 'object' ? typeof item : item }}</p>
      </div>

    </div> -->
      <div class="terminal-container">
        <div
          v-for="(item, index) in current_menu" 
          :key="index"
          :class="{ 'active': current == index }"
          class="line"
        >
          <p class="key">{{ index }}:</p>
          <!-- <p class="value">{{ typeof item == 'object' ? typeof item : item }}</p> -->
        </div>
        <!-- {{ menu }} -->
      </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      ...this.mapData({
        menu: 'terminal/menu'
      }),
      current_menu: {},
      current_menu_options: {},
      lastPressed: '-',
      current: 'projects',
      obj_menu: ''
    }
  },
  methods: {

    /**
     * Translate event to key name
     */
    keyHandler() {
      const key = event.keyCode;
      // console.log(key)
      const keys = {
        91: 'left',
        39: 'right',
        38: 'up',
        40: 'down',
        13: 'enter',
        27: 'esc'
      }
      if (!keys[key]) return;
      this.lastPressed = keys[key];

      this.TerminalHandler(keys[key]);
    },


    TerminalHandler(keyPress) {
      const getObjectKeyNames = Object.getOwnPropertyNames(this.current_menu).filter(v => v !== '__ob__');
      const current_index = getObjectKeyNames.indexOf(this.current);
      const key = getObjectKeyNames[current_index];

      // console.log('current_index', current_index)
      // console.log('getObjectKeyNames', getObjectKeyNames)
      // console.log('getObjectKeyNames length', getObjectKeyNames.length)
      // console.log('current', this.current)

      if (keyPress == 'down') {

        // Check if we can go 1 down
        if (current_index === (getObjectKeyNames.length - 1)) {
          // console.log('Cannot go down')
          return;
        }
        
        this.current = getObjectKeyNames[current_index + 1];
        return;
      }

      if (keyPress == 'up') {

        // Check if we can go 1 down
        if (current_index === 0) {
          // console.log('Cannot go up')
          return;
        }
        
        this.current = getObjectKeyNames[current_index - 1];
        return;
      }

      if (keyPress == 'enter') {

        // Check if its a folder(object)
        if (typeof this.current_menu[key] != 'object') {
          // console.log('das')
          return
        }

        this.current_menu = this.menu[key];
        // this.current_menu_options = this.current_menu._options
        // delete this.current_menu._options;
        this.current = Object.getOwnPropertyNames(this.current_menu).filter(v => !v.includes('__ob__'))[0];
        return
      }

      if (keyPress == 'esc') {


        this.current_menu = this.menu;
        // this.current_menu_options = this.current_menu._options
        // delete this.current_menu._options;
        this.current = Object.getOwnPropertyNames(this.current_menu).filter(v => !v.includes('__ob__'))[0];
        return
      }
    }



  },
  mounted() {

    this.current_menu = this.menu;
    document.addEventListener('keydown', this.keyHandler);
  },
  destroyed() {
    document.removeEventListener('keydown');
  }

}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#terminal {
  height: 500px;
  width: 300px;
  font-family: 'Dank Mono';
  font-size: 16px;
  /* font-family: 'Open Sans', sans-serif; */
  

  
  font-weight: normal;
  
  /* border: solid 1px white; */

  .terminal-container {
    /* border-top: solid 1px white; */
    height: 100%;
    color: var(--terminal-text);
    background: var(--terminal-background);
    border: solid 2px var(--terminal-text);
    padding: 5px;
    /* font-variant: all-petite-caps; */
    /* font-size: 20px; */

    .line {
      display: flex;
      /* background: red; */
      /* padding: 2px 10px; */
      &.active {
        background: var(--terminal-highlight);
        border-radius: 2px;
        animation-name: tick;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
    
    .key {
      margin-right: 10px;
    }
    .value {
      opacity: 0.4;
    }

  }

  .terminal-header-container {
    margin-top: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    height: 60px;
    color: var(--terminal-text);
    background: var(--terminal-background);
    border: solid 1px var(--terminal-text);
  }


  .line {
    display: flex;
    padding: 3px 10px;
    &.active {
      background: var(--terminal-highlight);
      border-radius: 2px;
      animation-name: tick;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
  
  .key {
    margin-right: 10px;
  }
  .value {
    opacity: 0.4;
  }

}


@keyframes tick {
  100% { background: var(--terminal-backgorund); }
  50% { background: var(--terminal-highlight); } 
  0% { background: var(--terminal-backgorund); } 
}
</style>
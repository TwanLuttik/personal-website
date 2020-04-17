import Pulse from 'pulse-framework'
import vue from 'vue';

export default new Pulse({
  config: {
    framework: vue
  },
  data: {
    current_tab: 'Projects'
  }
})
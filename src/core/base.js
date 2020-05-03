import Pulse from 'pulse-framework'
import vue from 'vue';

import theme from './util/theme';

export default new Pulse({
  collections: {
  },
  config: {
    framework: vue
  },
  data: {
    current_tab: 'projects',
    theme
  }
})

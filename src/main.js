import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

document.title = 'Twan'

const pulse = require('./core/core.js');
Vue.use(pulse)

import Icon from './Icons/Icon.vue';
Vue.component('Icon', Icon);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

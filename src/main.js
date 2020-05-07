import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

document.title = 'Twan'


import pulse from './core/core';
Vue.use(pulse);

import Icon from './Icons/Icon.vue';
Vue.component('Icon', Icon);

import SquarIcon from './parts/root/SquarIcon.vue';
Vue.component('SquarIcon', SquarIcon);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

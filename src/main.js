import Vue from 'vue'
import App from './App.vue'
import './styles/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    document.documentElement.classList.add("dark");
  },
  destroyed() {
    document.documentElement.classList.remove("dark");
  }

}).$mount('#app')

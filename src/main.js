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
    // if (
    //   localStorage.getItem('color-theme') === 'dark' ||
    //   (!('color-theme' in localStorage) &&
    //     window.matchMedia('(prefers-color-scheme: dark)').matches)
    // ) {
    //   document.documentElement.classList.add('dark');
    // } else {
    //   document.documentElement.classList.remove('dark');
    // }
    document.documentElement.classList.add('dark');
  },
  destroyed() {
    document.documentElement.classList.remove("dark");
  }

}).$mount('#app')

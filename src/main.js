import Vue from 'vue'
import App from './App.vue'
import './styles/main.css'

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

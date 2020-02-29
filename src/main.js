import Vue from 'vue'
import { Button, Progress, Input } from 'ant-design-vue';
import App from './App.vue'
import router from './router'

Vue.component(Progress.name, Progress)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

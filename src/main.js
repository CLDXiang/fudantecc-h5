import Vue from 'vue'
import { Button, Progress, Input, Icon } from 'ant-design-vue';
import App from './App.vue'

Vue.component(Progress.name, Progress)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
// Vue.component('view-loading', Loading)
// Vue.component('view-home', Home)
// Vue.component('view-department', Department)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

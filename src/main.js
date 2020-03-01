import Vue from 'vue'
import { Button, Progress, Input } from 'ant-design-vue';
import App from './App.vue'
import Loading from './views/Loading.vue'
import Home from './views/Home.vue'
import Department from './views/Department.vue'

Vue.component(Progress.name, Progress)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component('view-loading', Loading)
Vue.component('view-home', Home)
Vue.component('view-department', Department)

Vue.config.productionTip = false

new Vue({
  data: function() {
    return {
      view: 'loading',
      dep: '',
      nickname: ''
    }
  },
  methods: {
    changeRoutes: function(routes) {
      console.log(routes);
      this.view = routes.view || this.view;
      this.dep = routes.dep || this.dep;
      this.nickname = routes.nickname || this.nickname;
    }
  },
  render: h => h(App)
}).$mount('#app')

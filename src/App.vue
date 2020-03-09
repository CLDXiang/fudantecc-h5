<template>
  <div id="app" >
    <transition-group name="list" >
      <Loading v-show="view==='loading'" @change-routes="changeRoutes" key="loading"/>
      <Home v-show="view==='home'" :nick="nickname" @change-routes="changeRoutes" key="home"/>
      <Department v-show="view==='department'" :dpname="dep" :nickname="nickname" :view="view" @change-routes="changeRoutes" key="department"/>
    </transition-group>
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import Home from './components/Home.vue'
import Department from './components/Department.vue'

export default {
  name: 'App',
  data: function() {
    return {
      view: 'loading',
      dep: '',
      nickname: ''
    }
  },
  components: {
    Loading,
    Home,
    Department
  },
  methods: {
    changeRoutes: function(routes) {
      this.view = routes.view || this.view;
      this.dep = routes.dep || this.dep;
      this.nickname = routes.nickname || this.nickname;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

.list-enter, .list-leave-to {
  opacity: 0;
}

.list-enter-to {
  opacity: 1;
}

.list-enter-active {
  transition: opacity 2s;
}

</style>

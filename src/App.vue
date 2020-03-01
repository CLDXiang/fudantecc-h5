<template>
  <div id="app" @change-routes="changeRoutes">
    <transition mode="out-in" >
      <view-loading v-if="view==='loading'" />
      <view-home v-else-if="view==='home'" />
      <view-department v-else-if="view==='department'" :dep="dep" :nickname="nickname"/>
    </transition>
  </div>
</template>

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

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active{
  transition: all 0.5s;
}
</style>

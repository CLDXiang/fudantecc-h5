<template>
  <div id="app">
    <transition mode="out-in" >
      <router-view />
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

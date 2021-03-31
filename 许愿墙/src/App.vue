<template>
  <div id="app">
    <transition name="scale" >
      <router-view class="page" />
    </transition>
  </div>
</template> 

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;

}
body {
  margin: 0;
}
.page{
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  height: 100%;
}
.scale-enter{
  transform: translate(100%);
}
.scale-enter-active{
  transition: all 1s;
  // transform: translate(0);
}
.scale-leave-active{
  transition: all 1s;
  transform: translate(-100%) rotate(180deg) scale(0);
  opacity: 0;
}

</style>

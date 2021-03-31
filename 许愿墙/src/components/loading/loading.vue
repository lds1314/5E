<template>
  <div id="loading" v-show="show">
    <div>{{msg}}</div>
  </div>
</template>

<script> 
export default {
    props: {
      show: Boolean,
      msg: String
    }
 }
</script>

<style scoped lang="scss">
#loading{
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    background-color: rgba($color: #000000, $alpha: .8);
    color: #fff;
    padding: 8px 20px;
    border-radius: 5px;
  }
}
</style>
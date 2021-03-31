<template>
  <div id="my-header">
    <slot></slot>
  </div>
</template>

<script>
export default {}; 
</script>

<style lang="scss" scoped>
#my-header {
  width: 100%;
  height: 60px;
  background-color: purple;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
</style>

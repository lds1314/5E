<template>
  <div id="my-input">
    <input type="text" placeholder="请输入您的心愿" :value="value" @input="inputChange" />
  </div>
</template>

<script>
export default {
    props:["value"],
    methods: { 
        inputChange(e){
            this.$emit("input",e.target.value)
        }
    },
};
</script>

<style lang='scss' scoped>
#my-input {
  margin-top: 20px;
  margin-left: 10px;
}
#my-input input {
  width: 250px;
  height: 35px;
  padding-left: 10px;
}
</style>

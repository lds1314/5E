<template>
    <div class=''>
      <my-header>登录页面</my-header>
      <my-form class="my-form"></my-form>
    </div>
</template>

<script>
import myHeader from "../components/header/myHeader" 
import myForm from "../components/form/myForm"
export default {
  components:{
    myHeader,
    myForm,
  }
};
</script>

<style lang='scss' scoped>
.my-form{
  margin-top: 150px;
  padding-left: 30px;
}
</style>

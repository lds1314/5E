<template>
  <span id="getCode" @click="getCode">
    <em v-show="isTimeDown">倒计时(</em>
    {{ content }}
    <em v-show="isTimeDown">)</em>
  </span>
</template> 

<script>
const regMobile = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
export default {
  props: ["mobile"],
  data() {
    return {
      content: "发送验证码",
      //   倒计时为隐藏
      isTimeDown: false,
    };
  },
  methods: {
    showLoading(msg) {
      this.$loading.show(msg);
      setTimeout(() => {
        this.$loading.hide();
      }, 1000);
    },
    //   验证码
    getCode() {
      if (this.mobile) {
        if (!regMobile.test(this.mobile)) {
          this.showLoading("请输入正确的手机号");
          return;
        }
        let timer;
        this.content = 60;
        this.isTimeDown = true;
        clearInterval(timer);
        timer = setInterval(() => {
          if (this.content > 1) { m
            this.content--;
          } else {
            clearInterval(timer);
            this.content = "发送验证码";
            this.isTimeDown = false;
          }
        }, 1000);
        this.$emit("getCode", true);
      } else {
        this.showLoading("请输入手机号");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#getCode {
  display: inline-block;
  vertical-align: middle;
  width: 100px;
  background-color: #eee;
  color: #333;
  text-align: center;
  border-radius: 4px;
  em {
    font-style: normal;
  }
}
</style>

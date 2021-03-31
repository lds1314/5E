<template>
  <div id="my-form">
    <form @submit.prevent="submit"> 
      <div>
        <label for="mobile">手机号</label>
        <input type="text" name="mobile" v-model="mobile" placeholder="请输入手机号" />
      </div>
      <div>
        <label for="code">验证码</label>
        <input type="text" name="code" v-model="code" placeholder="请输入验证码" />
        <my-Code @getCode="getCode" :mobile="mobile"></my-Code>
      </div>
      <input type="submit" class="btn" :disabled="disabled" value="登录" />
    </form>
  </div>
</template>

<script>
// 验证码
import myCode from "../../components/sendCode/myCode";
const regCode = /^\d{4}$/;
export default {
  data() {
    return {
      mobile: "",
      code: "",
      disabled: true,
      hasCode: false
    };
  },
  components: {
    myCode
  },
  methods: {
    showLoading(msg) {
      this.$loading.show(msg);
      setTimeout(() => {
        this.$loading.hide();
      }, 1000);
    },
    checkLogin() {
      if (this.mobile && this.code && this.hasCode) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    getCode(flag) {
      this.hasCode = flag;
    },
    submit() {
      if (!regCode.test(this.code)) {
        this.showLoading("验证码不正确");
        return;
      }
      this.showLoading("登录成功");
      this.$router.push("/about");
    }
  },
  watch: {
    mobile() {
      this.checkLogin();
    },
    code() {
      this.checkLogin();
    }
  }
};
</script>

<style lang="scss" scoped>
#my-form {
  text-align: center;
}
#my-form div {
  margin-bottom: 20px;
  text-align: left;
}
.btn {
  background-color: green;
  border: none;
  padding: 5px 15px;
  border-radius: 3px;
}
input[disabled] {
  background-color: #ccc;
  color: #eee;
}
</style>

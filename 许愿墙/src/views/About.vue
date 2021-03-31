<template>
  <div class="about">
    <my-header>许愿墙</my-header>
    <my-input v-model="dream"></my-input>
    <selectimg @sendimg="getImg" :num="num"></selectimg>
    <button class="btn" :disabled="disabled" @click="addDream">
      {{ text }}
    </button>
    <div class="dream-box">
      <ul>
        <li
          v-for="(item, i) in dreamList"
          :key="item.id"
          :style="{
            backgroundImage: 'url(' + item.backimg + ')',
            left: item.left,
            top: item.top,
          }"
          @click="edit(item)"
          @touchstart="touchStart($event, i)"
          @touchmove="touchMove($event, i)"
          @touchend="touchEnd"
        >
          {{ item.content }}
          <span @click.stop="del(i)">X</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import myHeader from "../components/header/myHeader";
import myInput from "../components/input/myInput";
import selectimg from "../components/selectImg/selectimg";
export default {
  data() {
    return {
      dream: "",
      text: "再想想",
      disabled: true,
      img: "",
      dreamList: [],
      startX: 0,
      startY: 0,
      isEdit: false,
      editDream: {},
      num: -2,
    };
  },
  created() {
    this.dreamList = JSON.parse(localStorage.getItem("dreams")) || [];
  },
  methods: {
    checkClick() {
      if (this.isEdit) {
        this.disabled = false;
        this.text = "修改";
      } else {
        if (this.dream && this.img) {
          this.disabled = false;
          this.text = "许愿";
        } else {
          this.disabled = true;
          this.text = "再想想";
        }
      }
    },
    getImg(img) {
      this.img = img;
      if (this.isEdit) {
        this.editDream.backimg = img;
      } else {
        this.checkClick();
      }
    },
    addDream() {
      if (this.isEdit) {
        this.editDream.content = this.dream;
        this.dream = "";
        this.isEdit = false;
        this.disabled = true;
      } else {
        const obj = {
          content: this.dream,
          backimg: this.img,
          left: Math.random() * 375 + "px",
          top: Math.random() * 400 + "px",
          id: new Date().getTime(),
        };
        if (this.dreamList.length < 6) {
          this.dreamList.push(obj);
          this.dream = "";
          this.disabled = true;
        } else {
          this.$loading.show("愿望上限");
          setTimeout(() => {
            this.$loading.hide();
          }, 1000);
        }
      }
      this.num = this.num === -1 ? -2 : -1;
      localStorage.setItem("dreams", JSON.stringify(this.dreamList));
    },
    // 拖拽
    touchStart(e, i) {
      this.startX = e.touches[0].pageX - parseFloat(this.dreamList[i].left);
      this.startY = e.touches[0].pageY - parseFloat(this.dreamList[i].top);
    },
    touchMove(e, i) {
      this.dreamList[i].left = e.touches[0].pageX - this.startX + "px";
      this.dreamList[i].top = e.touches[0].pageY - this.startY + "px";
    },
    touchEnd() {
      localStorage.setItem("dreams", JSON.stringify(this.dreamList));
    },
    del(i) {
      this.dreamList.splice(i, 1);
      localStorage.setItem("dreams", JSON.stringify(this.dreamList));
    },
    edit(item) {
      this.dream = item.content;
      this.isEdit = true;
      this.editDream = item;
      localStorage.setItem("dreams", JSON.stringify(this.dreamList));
    },
  },
  watch: {
    dream() {
      this.checkClick();
    },
  },
  components: {
    myHeader,
    myInput,
    selectimg,
  },
};
</script>

<style lang='scss' scoped>
.btn {
  display: block;
  width: 60px;
  text-align: center;
  border-radius: 4px;
  line-height: 30px;
  border: none;
  background-color: green;
  color: #fff;
  margin: 20px auto;
}
.btn[disabled] {
  background-color: #ccc;
  color: #eee;
}

.dream-box {
  position: relative;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    position: absolute;
    width: 80px;
    height: 80px;
    background-repeat: none;
    background-size: 100% 100%;
    background-position: center center;
    line-height: 80px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    span {
      position: absolute;
      right: 1px;
      top: 1px;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      background-color: #ccc;
    }
  }
}
</style>

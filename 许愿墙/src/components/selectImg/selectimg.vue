<template>
  <div id="select-img">
    <ul>
      <li
        :class="current === i ? 'active' : ''"
        v-for="(item, i) in imgs"
        :key="i"
        @click="choseDream(item, i)" 
      >
        <img :src="item" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";

export default {
  props: ["num"],
  data() {
    return {
      imgs: [img1, img2, img3, img4, img5], 
      current: -1,
      isChose: false 
    };
  },
  mounted() {},
  methods: {
    choseDream(item, i) {
      this.isChose = true;
      this.current = i;
      this.$emit("sendimg", item);
    }
  },
  watch: {
    num() {
      this.current = this.num;
    }
  }
};
</script>

<style lang="scss" scoped>
#select-img {
  margin-top: 20px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    li {
      width: 60px;
      height: 100px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .active {
      border: 3px solid red;
    }
  }
}
</style>

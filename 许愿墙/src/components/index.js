import Vue from "vue";
import loading from "../components/loading/loading";

const CreateLoading = Vue.extend(loading);

const instence = new CreateLoading({
  el: document.createElement("div"),
}); 

instence.show = false;

const $loading = {
  show(msg) {
    instence.show = true;
    instence.msg = msg;
    document.body.appendChild(instence.$el);
  },

  hide() {
    instence.show = false;
  },
};

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$loading = $loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      },
    });
  },
};

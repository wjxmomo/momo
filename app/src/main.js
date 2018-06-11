import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3, 
  // 请求的地址 出错的时候 就会加载 error 里的图片
  error: require ("@/assets/images/chaoshi.jpg"),
  loading:require ("@/assets/images/Loading.min.gif"),
  attempt: 1
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

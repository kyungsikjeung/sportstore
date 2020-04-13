import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false


// 외부 라이브러리 가져오기 (부트스트랩, 폰트 어썸)
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

// 테스트 데이터 가져오기
import store from "./store"

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

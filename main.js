import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.serverUrl = "https://www.256it.com/wp-json/wp/v2";			// 生产环境
// Vue.prototype.serverUrl = "https://www.256it.com/wp-json/wp/v2";		// 开发环境

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

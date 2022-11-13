import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import VueCookies from 'vue-cookies'
import { store } from './store'

require('dotenv').config()

Vue.use(Vuetify)
Vue.use(VueCookies)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  vuetify: new Vuetify(),
  template: '<App/>'
}).$mount('#app')

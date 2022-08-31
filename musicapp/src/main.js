import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// import rem from '../public/js/rem.js'

// Vue.use(rem)

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')


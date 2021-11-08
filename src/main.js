import { createApp, h } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import { createVueWait } from 'vue-wait'
import './styles/index.css'

require('dotenv').config()

const VueWait = createVueWait()

const app = createApp({
  render: ()=>h(App)
})

app.config.productionTip = false

app.use(router)
app.use(store)
app.use(VueWait)

app.mount('#app')

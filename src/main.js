import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import 'bulma'
import './assets/main.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')

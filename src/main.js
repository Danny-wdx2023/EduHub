import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "remixicon/fonts/remixicon.css"
import "./assets/main.css"
import { getData } from "./utils/api.js"
const app = createApp(App)

app.provide("getData", getData);
app.use(router)
app.mount('#app')

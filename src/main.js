import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App);

app.use(ElementPlus)
app.use(router)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlus)) {
    app.component(key, component)
}



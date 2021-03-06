import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import installElementPlus from './plugins/element'

const app = createApp(App)
app.use(router)
installElementPlus(app)
app.mount('#app')

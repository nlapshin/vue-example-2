import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.config.compilerOptions.isCustomElement = tag => {
//   console.log(tag);

//   return false
// }

app.use(router)

app.mount('#app')

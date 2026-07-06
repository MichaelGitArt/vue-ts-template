import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'
import gitart from './plugins/gitart'

import '@mdi/font/css/materialdesignicons.css'
import './styles/tailwind.css'
import './scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(gitart)
app.use(router)
app.use(createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  defaults: {
    VBtn: {
      variant: 'flat',
    },
  },
}))

app.mount('#app')

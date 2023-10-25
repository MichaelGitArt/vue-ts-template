import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  defaults: {
    VBtn: {
      variant: 'flat',
    },
  },
}))

app.mount('#app')

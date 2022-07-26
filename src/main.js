import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Oruga Componente Library
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

// prettier-ignore
createApp(App)
  .use(router)
  .use(Oruga)
  .mount('#app')

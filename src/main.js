import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'
import Icon from '@/directives/icon'
import i18n from '@/includes/i18n'
import GlobalComponents from '@/includes/_globals'
import progressBar from '@/includes/progress-bar'
// import { registerSw } from 'virtual:pwa-register'

import './assets/base.css'
import './assets/main.css'
import 'nprogress/nprogress.css'

// registerSw({ immediate: true })
progressBar(router)

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(i18n)
    app.use(VeeValidatePlugin)
    app.directive('icon', Icon)
    app.use(GlobalComponents)

    app.mount('#app')
  }
})

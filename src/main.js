import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { applyTheme } from './config/theme'
import './style.css'

const themeId =
  new URLSearchParams(window.location.search).get('theme') ||
  import.meta.env.VITE_THEME ||
  'default'
applyTheme(themeId)

createApp(App).use(router).mount('#app')

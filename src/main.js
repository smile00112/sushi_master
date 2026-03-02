import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { applyTheme, getRequestedThemeId } from './config/theme'
import './style.css'

const themeId = getRequestedThemeId()
applyTheme(themeId)

createApp(App).use(router).mount('#app')

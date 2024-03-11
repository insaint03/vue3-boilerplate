import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import plugins from '@/plugins'

const app = createApp(App)
app.use(createPinia())
plugins(app);
app.mount('#app')

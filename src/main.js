import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import plugins from '@/plugins'

// create application instance
const app = createApp(App)
// initiate store
app.use(createPinia())
// register plugins
plugins(app);

// start & mount
app.mount('#app')

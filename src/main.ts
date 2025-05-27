import { createApp, h } from 'vue'
import { RouterView } from 'vue-router'
import { createPinia } from 'pinia'

import router from './router'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from './icons'

import './assets/scss/app.scss';

const app = createApp( () => h(RouterView) )

app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')

/* Set up using Vue 2 */
import Vue from 'vue'
import App from './App'

import { createApp } from 'vue-demi'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faMagnifyingGlass)
library.add(faBell)
library.add(faForwardStep)
library.add(faBackwardStep)
library.add(faStar)

import { MotionPlugin } from '@vueuse/motion'

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


const app = createApp(App)

app.use(MotionPlugin)
app.mount('#app')






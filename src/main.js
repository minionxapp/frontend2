import { createApp, markRaw} from 'vue'
import App from './App.vue'
import router from './router'

//prie
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Editor from 'primevue/editor';
import Dropdown from 'primevue/dropdown';

import ConfirmationService from 'primevue/confirmationservice';

import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia()

// app.use(PrimeVue, {
//     theme: {
//         preset: Aura
//     }
// });

app.use(PrimeVue)
app.use(router)
app.use(pinia)
app.use(ConfirmationService);
pinia.use(({store})=>{
    store.ro
})

app.component('InputText',InputText)
app.component('Dialog',Dialog)
app.component('Button',Button)
app.component('Editor',Editor)
app.component('Dropdown',Dropdown)

app.mount('#app')

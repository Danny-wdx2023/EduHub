import { createApp } from 'vue';
import App from '@/App.vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useNowPageStore } from '@/stores/nowPage';
import router from '@/router';
import { getData } from "@/utils/api.js";

import "remixicon/fonts/remixicon.css";
import "@/assets/main.css";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);
app.provide("getData", getData);


pinia.use(piniaPluginPersistedstate);
const nowPage = useNowPageStore();
router.afterEach((to, from) => {
    nowPage.nowPage = to.name;
})


app.mount('#app');
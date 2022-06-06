import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Tabbar, TabbarItem, Swipe, SwipeItem, Tab, Tabs, Progress, Search, Cell, CellGroup, Uploader} from "vant";

createApp(App)
    .use(store)
    .use(router)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Swipe)
    .use(SwipeItem)
    .use(Tab)
    .use(Tabs)
    .use(Progress)
    .use(Search)
    .use(Cell)
    .use(CellGroup)
    .use(Uploader)
    .mount('#app')

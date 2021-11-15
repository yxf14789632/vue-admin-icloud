/*
 * @Author: mavon
 * @Date: 2021-11-10 23:28:37
 * @LastEditTime: 2021-11-11 15:07:18
 * @LastEditors: mavon
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {store, key} from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'

const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(ElementPlus);
app.mount('#app');

// 全局注册图标
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key])
})
/*
 * @Author: mavon
 * @Date: 2021-11-10 23:45:03
 * @LastEditTime: 2021-11-15 16:08:06
 * @LastEditors: mavon
 * @Description: 
 */
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'

const routes : Array<RouteRecordRaw> = [
    {
        path : '/',
        redirect: '/index',
        component : Layout,
        children : [
            {
                path : 'index',
                name : "Index",
                component : () => import('@/view/home/index.vue'),
                meta : {
                    icon: '',
                    title : '首页'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router
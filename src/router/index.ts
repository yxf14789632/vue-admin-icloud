/*
 * @Author: mavon
 * @Date: 2021-11-10 23:45:03
 * @LastEditTime: 2021-11-17 16:14:11
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
                    icon: 'home',
                    title : '首页'
                },
            },
            {
                path : 'dashbord',
                name : "Dashbord",
                component : () => import('@/view/dashbord/Index.vue'),
                meta : {
                    icon: 'dashboard',
                    title : '看板'
                },
            },
            {
                path : 'workbench',
                name : "Workbench",
                component : () => import('@/view/home/index.vue'),
                meta : {
                    icon: 'workbench',
                    title : '工作台'
                },
            }
        ]
    },
    {
        path : '/host/',
        redirect: '/index',
        component : Layout,
        children : [
            {
                path : 'host',
                name : "host",
                component : () => import('@/view/home/index.vue'),
                meta : {
                    icon: 'host',
                    title : '主机'
                },
            },
            {
                path : 'ip',
                name : "ip",
                component : () => import('@/view/home/index.vue'),
                meta : {
                    icon: 'ip',
                    title : 'IP'
                },
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router
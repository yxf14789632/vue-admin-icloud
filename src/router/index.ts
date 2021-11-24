/*
 * @Author: mavon
 * @Date: 2021-11-10 23:45:03
 * @LastEditTime: 2021-11-24 14:44:14
 * @LastEditors: mavon
 * @Description: 
 */
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'

const routes : Array<RouteRecordRaw> = [
    {
        path : '/',
        redirect: '/index',
        name : "首页",
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
                path : 'dashboard/',
                name : "Dashboard",
                component : () => import('@/view/dashboard/Index.vue'),
                meta : {
                    icon: 'dashboard',
                    title : '看板'
                },
                children: [
                    {
                        path : 'alert',
                        name : "alert",
                        component : () => import('@/view/home/index.vue'),
                        meta : {
                            icon: 'alert',
                            title : '告警'
                        },
                    }
                ]
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
        path : '/resource/',
        redirect: '/host',
        name : "资源",
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
                children : [
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
            },
        ]
    },
    {
        path : '/resource/db/',
        name : "数据库",
        component : Layout,
        meta : {
            icon: 'dashboard',
            title : '数据库'
        },
        children : [
            {
                path : 'oracle',
                name : "oracle",
                component : () => import('@/view/db/oracle/index.vue'),
                meta : {
                    icon: 'oracle',
                    title : 'Oracle'
                },
            },
            {
                path : 'mysql',
                name : "mysql",
                component : () => import('@/view/db/mysql/index.vue'),
                meta : {
                    icon: 'mysql',
                    title : 'Mysql'
                },
            },
            {
                path : 'mongodb',
                name : "mongodb",
                component : () => import('@/view/db/mongodb/index.vue'),
                meta : {
                    icon: 'mongodb',
                    title : 'MongoDB'
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
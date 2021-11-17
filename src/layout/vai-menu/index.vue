<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:48:05
 * @LastEditTime: 2021-11-17 16:11:52
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" router>
        <el-divider>首页</el-divider>
        <MenuItem :menuList= 'menuList' > </MenuItem>
    </el-menu>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import {reactive, ref} from 'vue'

// 动态菜单数据
let menuList = reactive([
    {
        path : '/dashbord',
        component : 'Layout',
        meta : {
            title : '首页',
            icon : 'el-icon-s-home'
        },
        children : []
    },
    {
        path : '/prop',
        component : 'Layout',
        meta : {
            title : '组件',
            icon : 'el-icon-s-home'
        },
        children : [
            {
                path : '/test',
                component : 'Layout',
                meta : {
                    title : '组件1',
                    icon : 'el-icon-document'
                }
            },
            {
                path : '/test1',
                component : 'Layout',
                meta : {
                    title : '组件2',
                    icon : 'el-icon-s-custom'
                }
            },
        
        ]
    }
])

const isCollapse = ref(true)
const handleOpen = () => {

}
const handleClose = () => {

}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
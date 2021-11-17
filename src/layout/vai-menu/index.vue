<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:48:05
 * @LastEditTime: 2021-11-18 00:03:57
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" router>
        <el-divider>首页</el-divider>
        <MenuItem :menuList= "store.getters['getRoutes']" > </MenuItem>
    </el-menu>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import {useStore} from '@/store'

const store = useStore();

console.log(store.getters['getRoutes']);

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
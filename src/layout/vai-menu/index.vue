<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:48:05
 * @LastEditTime: 2021-11-18 10:50:29
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-menu :default-active="route.path" :default-openeds="openeds" @open="handleOpen" @close="handleClose" router>
        <el-divider>{{store.getters['getSideTab'].title}}</el-divider>
        <MenuItem :menuList= "store.getters['getRoutes']" > </MenuItem>
    </el-menu>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import {useStore} from '@/store'
import {useRoute} from 'vue-router'
import {ref} from 'vue'

const store = useStore();
const route = useRoute();

const openeds = ref([] as string[])
const routes = store.getters['getRoutes'];
const expandRoutes = routes.filter((item: { children: string | any[]; }) => item.children && item.children.length > 0);
expandRoutes.forEach((item: { path: any; }) => openeds.value.push(item.path as string));


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
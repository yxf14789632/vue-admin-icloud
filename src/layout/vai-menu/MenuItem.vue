<!--
 * @Author: mavon
 * @Date: 2021-11-16 14:10:05
 * @LastEditTime: 2021-11-17 22:31:15
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <template v-for="menu in menuList" :key='menu.path'>
        <template v-if="!menu.meta.sideTab">
            <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
                <template #title>
                    <i :class="menu.meta.icon"></i>
                    <span>{{menu.meta.title}}</span>
                </template>
                <menu-item :menuList='menu.children'></menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="menu.path">
                <i :class="menu.meta.icon"></i>
                <template #title>{{ menu.meta.title }}</template>
            </el-menu-item>
        </template>
        <template v-else>
            <menu-item :menuList='menu.children'></menu-item>
        </template>
    </template>
</template>

<script setup lang="ts">
// 获取父组件传值
defineProps(['menuList']);
</script>

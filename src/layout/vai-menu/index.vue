<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:48:05
 * @LastEditTime: 2021-11-15 16:49:17
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose">
        <el-divider>首页</el-divider>
        <el-sub-menu index="1">
        <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">
            item one
        </el-menu-item>
        <el-menu-item index="1-2">
            item one
        </el-menu-item>

        <el-menu-item index="1-3">
            item three
        </el-menu-item>
        <el-sub-menu index="1-4">
            <template #title>
            item four
            </template>
            <el-menu-item index="1-4-1">
            item one
            </el-menu-item>
        </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item
        index="3"
        >
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import {
Location,
Document,
Menu as IconMenu,
Setting
} from '@element-plus/icons'

const handleOpen = () => {

}
const handleClose = () => {

}
</script>
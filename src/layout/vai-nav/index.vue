<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:51:15
 * @LastEditTime: 2021-11-15 16:52:31
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <div class="vai-nav">
        <el-row :gutter="15">
            <el-col :span="24" :xs="4" :sm="12" :md="12" :lg="12" :xl="12" >
            <div class="left-panel">
                <el-icon style="margin-right: 20px;"><fold /></el-icon>
                <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">
                <el-icon :size="16" class="vai-breadcrumb-icon">
                <home-filled />
                </el-icon>
                首页
                </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            </el-col>
            <el-col :span="24" :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="right-panel">
                <el-icon class="vai-icon-fullcreen"><full-screen /></el-icon>
                <el-icon class="vai-icon-refresh"><refresh /></el-icon>
                <el-dropdown>
                    <span class="avatar-dropdown">
                    <el-avatar class="user-avatar"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    ></el-avatar>
                    
                    <span class="user-name">
                    admin
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                    </span>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                </el-dropdown>
            </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts"></script>
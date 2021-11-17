<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:43:09
 * @LastEditTime: 2021-11-17 17:50:33
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-tabs class="vai-left-tabs"  tab-position="left">
        <el-tab-pane label="User">
        <template #label>
            <span class="vai-column-grid">
            <el-icon color="#FFF" :size="16" style="margin-top: 6px;" >
                <home-filled />
            </el-icon>
            <span>首页</span>
            </span>
        </template>
        </el-tab-pane>
        <el-tab-pane label="Config">
        <template #label>
            <span class="vai-column-grid">
            <el-icon color="#FFF" :size="16" style="margin-top: 6px;" >
                <platform />
            </el-icon>
            <span>主机</span>
            </span>
        </template>
        </el-tab-pane>
        <el-tab-pane label="Role">
        <template #label>
            <span class="vai-column-grid">
            <el-icon color="#FFF" :size="16" style="margin-top: 6px;" >
                <list />
            </el-icon>
            <span>数据库</span>
            </span>
        </template>
        </el-tab-pane>
        <el-tab-pane label="Task">
        <template #label>
            <span class="vai-column-grid">
            <el-icon color="#FFF" :size="16" style="margin-top: 6px;" >
                <tickets />
            </el-icon>
            <span>业务</span>
            </span>
        </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.vai-left-tabs {
    position: fixed;
    height: 100%;
}

.vai-left-tabs .el-tabs__header .el-tabs__item {
    padding: 5px!important;
}

vai-left-tabs .el-tabs--left .el-tabs__header.is-left {
float: left;
margin-bottom: 0;
margin-right: 10px;
}

.el-tabs__nav-wrap.is-left {
    background: #282c34!important;
}

.el-tabs__nav-wrap::after {
    background: #282c34!important;
}

.el-tabs--left .el-tabs__header.is-left, .el-tabs--left .el-tabs__header.is-right, .el-tabs--left .el-tabs__nav-scroll, .el-tabs--left .el-tabs__nav-wrap.is-left, .el-tabs--left .el-tabs__nav-wrap.is-right, .el-tabs--right .el-tabs__header.is-left, .el-tabs--right .el-tabs__header.is-right, .el-tabs--right .el-tabs__nav-scroll, .el-tabs--right .el-tabs__nav-wrap.is-left, .el-tabs--right .el-tabs__nav-wrap.is-right {
    height: 100%;
}

.vai-left-tabs .el-tabs__header.is-left .el-tabs__nav-wrap.is-left .el-tabs__nav-scroll {
    height: 100%;
    overflow-y: auto;
}

.el-tabs__active-bar.is-left {
    display: none;
    width: 2px;
    top: 0;
    bottom: auto;
}

.vai-left-tabs .el-tabs__item {
    height: auto;
    padding: 0;

    span {
        color : #FFF;
    }
}
.vai-left-tabs .el-tabs--left .el-tabs__header.is-left {
    float: left;
    margin-bottom: 0;
    margin-right: 10px;
}

.el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 0 15px;
}

.el-tabs+.el-menu {
    left: 74px;
    width: 182px;
}

.vai-column-grid {
    width: 54px!important;
    height: 54px!important;
    border-radius: 5px;
}

.el-tabs .el-tabs__item.is-active .vai-column-grid {
    background: #1890ff!important;
    color: #FFF;
}

.vai-column-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 64px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    line-height: 32px;
}

.vai-column-grid-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
}
</style>
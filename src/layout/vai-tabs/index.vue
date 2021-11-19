<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:43:09
 * @LastEditTime: 2021-11-19 10:30:49
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-tabs class="vai-left-tabs"  tab-position="left" @tab-click='changeSideTab'>
        <template v-for="menu in menuList" :key='menu.path'>
            <el-tab-pane v-if="menu.meta.sideTab && menu.meta.sideTab" :label="menu.meta.title">
                <template #label>
                    <span class="vai-column-grid">
                        <i :class="menu.meta.icon"></i>
                        <span>{{ menu.meta.title }}</span>
                    </span>
                </template>
            </el-tab-pane>
        </template>
    </el-tabs>
</template>

<script setup lang="ts">
import {useStore} from '@/store'
import {ref} from 'vue'
import { IVaiTab } from '@/store/type';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const prop = defineProps(['menuList']);

const changeSideTab = (tab : any) => {
    // 根据tab的选择来进行调整路由和选择默认路由
    const {props} = tab;
    const sideTabName = props.label;
    let sideTab = prop.menuList.filter((item: { meta: { title: any; }; }) => item.meta.title === sideTabName);
    if(sideTab && sideTab.length > 0) {
        const routeList = sideTab[0].children;
        const activeSideTab : IVaiTab =  {title : sideTab[0].meta.title, path : sideTab[0].path};
        // 默认跳转到路由的第一个
        router.push({path : routeList[0].path})
        store.commit('setActiveSideTab', activeSideTab);
        store.commit('setRoutes', routeList);
    }
}
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

    i {
        font-size: 16px;
        margin-top: 6px;
    }
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
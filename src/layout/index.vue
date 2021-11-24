<template>
  <div class="vue-admin-icloud-wrapper">
    <div class="vai-layout-column">
      <el-scrollbar class="vai-column-bar-container">
        <!-- logo 标签 -->
        <vai-logo></vai-logo>
        <!-- 左侧的tab标签 -->
        <vai-tabs :menuList="menuList"></vai-tabs>
        <!-- 菜单 -->
        <vai-menu></vai-menu>
      </el-scrollbar>

      <div class="vai-main vai-main-card">
        <div class="vai-layout-header fixed-header">
            <vai-nav></vai-nav>
          <div class="vai-tabs">
            <vai-nav-tabs></vai-nav-tabs>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-menu"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>关闭其他</el-dropdown-item>
                  <el-dropdown-item>关闭左侧</el-dropdown-item>
                  <el-dropdown-item>关闭右侧</el-dropdown-item>
                  <el-dropdown-item>关闭全部</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        
        <div class="vai-app-main">
          <!-- 加载主要视图路由 --> 
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VaiLogo from './vai-logo/index.vue'
import VaiTabs from './vai-tabs/index.vue'
import VaiMenu from './vai-menu/index.vue'
import VaiNav from './vai-nav/index.vue'
import VaiNavTabs from './vai-nav-tabs/index.vue'

import { useRoute } from 'vue-router'
import {useStore} from '@/store'
import { IVaiTab } from '@/store/type'
import { onMounted, reactive } from 'vue'

// 动态菜单数据
let menuList = reactive([
    {
        path : '/',
        component : 'Layout',
        meta : {
            title : '首页',
            sideTab: true,    // 最左侧的tab
            icon : 'el-icon-s-home'
        },
        children : [
          {
            path : '/index',
            component : 'Layout',
            meta : {
                title : '首页',
                icon : 'el-icon-s-home'
            },
          },
          {
            path : '/dashboard',
            component : 'Layout',
            meta : {
              title : '看板',
              icon : 'el-icon-discount'
            },
            children : [
              {
                path : '/dashboard/alert',
                component : 'Layout',
                meta : {
                    title : '告警',
                    icon : 'el-icon-s-home'
                },
            }]
          },
          {
            path : '/workbench',
            component : 'Layout',
            meta : {
              title : '工作台',
              icon : 'el-icon-s-grid'
            }
          }
        ]
    },
    {
        path : '/resource',
        component : 'Layout',
        meta : {
            title : '资源',
            sideTab: true,    // 最左侧的tab
            icon : 'el-icon-s-home'
        },
        children : [
          {
            path : '/resource/db/oracle',
            component : 'Layout',
            meta : {
                title : '数据库',
                icon : 'el-icon-s-home'
            },
            children : [
              {
                path : '/resource/db/oracle',
                component : 'Layout',
                meta : {
                    title : 'Oracle',
                    icon : 'el-icon-s-home'
                },
              },
              {
                path : '/resource/db/mysql',
                component : 'Layout',
                meta : {
                  title : 'Mysql',
                  icon : 'el-icon-discount'
                }
              },
              {
                path : '/resource/db/mongodb',
                component : 'Layout',
                meta : {
                  title : 'MongoDB',
                  icon : 'el-icon-s-grid'
                }
              }]
        }]
    },
])

const route = useRoute();
const store = useStore();
const {path, meta} = route;

// 将首页添加到tabs
const tab : IVaiTab = {
    path : path,
    title : meta.title as string
};
store.commit('addTab', tab);

// 刚开始加载 设置第一个route
store.commit('setRoutes', menuList[0].children);
store.commit('setUserMenuList', menuList);
</script>

<style lang="scss">
.vue-admin-icloud-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .vai-layout-column {
      padding-top: 110px;

      .vai-column-bar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 266px;
        height: 100vh;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

        .ri-home-2-line:before {
          content: "\ee19";
        }

        .el-tabs+.el-menu {
          left: 74px;
          width: 182px;
        }

        .el-menu .el-divider {
          margin: 0 0 20px 0;
          background-color: #f6f6f6;
        }

        .el-menu {
          border: 0;
        }
      }

      .vai-main {
        position: relative;
        width: auto;
        min-height: 100%;
        margin-left: 266px;
        .fixed-header {
          left: 266px;
          width: calc(100% - 266px);
        }

        .fixed-header {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1998;
          width: 100%;
        }

        .fixed-header {
          left: 266px;
          width: calc(100% - 266px);
        }

        .vai-layout-header {
          .vai-nav {
            position: relative;
            height: 60px;
            padding-right: 20px;
            padding-left: 20px;
            overflow: hidden;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background: #fff;
            box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

            .left-panel{
                display: flex;
                align-items: center;
                justify-items: center;
                height: 60px;
            }

            .vai-breadcrumb-icon {
              display: inline-block;
              font-size: 16px;
              text-align: center;
              vertical-align: -3.5px;
            }

            .right-panel {
              display: flex;
              align-content: center;
              align-items: center;
              justify-content: flex-end;
              height: 60px;

              > [class*="vai-icon-"] {
                margin-left: 20px;
                color: rgba(0,0,0,.65);
                cursor: pointer;
              }

              > [class*="vai-icon-"] {
                display: inline-block;
                font-size: 16px;
                text-align: center;
                vertical-align: -3.5px;
              }

              .avatar-dropdown{
                display: flex;
                align-content: center;
                align-items: center;
                justify-content: center;
                justify-items: center;

                .user-avatar {
                  width: 40px;
                  height: 40px;
                  margin-left: 15px;
                  cursor: pointer;
                  border-radius: 50%;
                }

                .user-name {
                  position: relative;
                  display: flex;
                  align-content: center;
                  align-items: center;
                  height: 40px;
                  margin-left: 6px;
                  line-height: 40px;
                  cursor: pointer;
                }
              }
            }
          }

          .vai-tabs {
            position: relative;
            box-sizing: border-box;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: space-between;
            min-height: 50px;
            padding-right: 20px;
            padding-left: 20px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background: #fff;
            border-top: 1px solid #f6f6f6;
          }
        }

        .vai-app-main {
          width: 100%;
          padding: 20px;
          overflow: hidden;
          transition: all .3s cubic-bezier(.645,.045,.355,1),border 0s,color .1s,font-size 0s;
        }
      }

    }
}
</style>
<!--
 * @Author: mavon
 * @Date: 2021-11-15 17:18:41
 * @LastEditTime: 2021-11-17 16:35:58
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-tabs class="vai-tabs-content vai-tabs-content-smooth" v-model="activeTab" @tab-click='clickBtn' type="card" closeable @tab-remove="removeTab">
        <el-tab-pane v-for="item in tabList" :key="item.path" :label="item.title" :name="item.path"></el-tab-pane>
    </el-tabs>

</template>
<script setup lang="ts">
import { ref, computed ,watch, onMounted} from 'vue';
import {useStore} from '@/store'
import { useRoute, useRouter } from 'vue-router';
import { IVaiTab } from '@/store/type';

const route = useRoute();
const router = useRouter();
const store = useStore();

const tabList = computed(() => {
    return store.getters['getTabs']
});

const activeTab = ref('');
const setActiveTab = () => {
    activeTab.value = route.path;
}

const addTab = () => {
    const {path, meta} = route;
    const tab : IVaiTab = {
        path : path,
        title : meta.title as string
    };
    store.commit('addTab', tab);
}

const removeTab = (targetName : string) => {
    if(targetName === '/index') return;
    const tabs = tabList.value;
    let activeName = activeTab.value;

    if (activeName === targetName) {
        tabs.forEach((tab : IVaiTab, index: number) => {
            if (tab.path === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.path
                }
            }
        })
    }

    activeTab.value = activeName
    store.state.tabList = tabs.filter((tab : IVaiTab) => tab.path !== targetName)

    router.push({path : activeName})
};

watch(() => route.path, ()=> {
    setActiveTab();
    // 将当前路由添加到选项卡
    addTab();
});

const beforeRefresh = () => {
    window.addEventListener('beforeunload', ()=> {
        sessionStorage.setItem('tabsView', JSON.stringify(tabList.value));
    })
    let tabSession = sessionStorage.getItem('tabsView');
    if(tabSession) {
        let oldTabs = JSON.parse(tabSession);
        if(oldTabs.length > 0) {
            store.state.tabList = oldTabs;
        }
    }

}

onMounted(() => {
    beforeRefresh();
    setActiveTab();
    // 将当前路由添加到选项卡
    addTab();
})

const clickBtn = (tab : any) => {
    const {props} = tab;
    // 跳转路由
    router.push({path : props.name})
}

</script>

<style lang="scss">
.vai-tabs-content-smooth {
        height: 38px;
}
.vai-tabs-content {
    width: calc(100% - 40px);
}
</style>
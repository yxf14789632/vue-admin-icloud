<!--
 * @Author: mavon
 * @Date: 2021-11-15 17:18:41
 * @LastEditTime: 2021-11-15 18:01:58
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <el-tabs class="vai-tabs-content vai-tabs-content-smooth" v-model="activeTab" type="card" closeable @tab-remove="removeTab">
        <el-tab-pane v-for="item in tabList" :key="item.path" :label="item.title" :name="item.path"></el-tab-pane>
    </el-tabs>

</template>
<script setup lang="ts">
import { ref, computed ,watch} from 'vue';
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

const removeTab = () => {

};

watch(() => route.path, ()=> {
    setActiveTab();
    // 将当前路由添加到选项卡
    addTab();
});


</script>

<style lang="scss">
.vai-tabs-content-smooth {
        height: 38px;
}
.vai-tabs-content {
    width: calc(100% - 40px);
}
</style>
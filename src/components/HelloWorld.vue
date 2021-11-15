<!--
 * @Author: mavon
 * @Date: 2021-11-10 23:28:37
 * @LastEditTime: 2021-11-11 00:44:51
 * @LastEditors: mavon
 * @Description: 
-->
<script setup lang="ts">
import { ref, computed } from 'vue'
import  {useStore} from '@/store'

const store = useStore();
const count = ref(0)
const showcount = computed(() => {
  return store.getters['getCount']
})
const addBtn = () => {
  store.commit('setCount', ++count.value)

}
</script>

<template>
  <h1>{{ showcount }}</h1>
  <button type="button" @click="addBtn">新增</button>
  <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
</template>

<style scoped>
</style>

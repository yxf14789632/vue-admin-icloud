/*
 * @Author: mavon
 * @Date: 2021-11-10 23:56:45
 * @LastEditTime: 2021-11-18 09:41:19
 * @LastEditors: mavon
 * @Description:  
 */
// store.ts
import { InjectionKey, reactive } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import {IVaiTab} from './type/index'

export interface State {
  count: number,
  collapse : boolean,
  tabList: Array<IVaiTab>,
  routes : [],
  activeSideTab : IVaiTab
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    collapse: false,
    tabList: [],    // 用于存储navTab
    routes : [],
    activeSideTab : {}
  },
  mutations : {
    setCount(state: State, count : number) {
        state.count = count;
    },
    setRoutes(state : State, routes: []) {
      state.routes = routes;
    },
    setActiveSideTab(state : State, vaitab : IVaiTab) {
      state.activeSideTab = vaitab;
    },
    addTab : (state: State, tab: IVaiTab) => {
      if(state.tabList.some(item => item.path === tab.path)) return;
      state.tabList.push(tab);
    }
  },
  getters : {
    getCount(state : State) {
        return state.count;
    },
    getTabs: (state : State) => {
      return state.tabList;
    },
    getRoutes: (state : State) => {
      return state.routes;
    },
    getSideTab:(state : State) => {
      return state.activeSideTab;
    }
  },
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
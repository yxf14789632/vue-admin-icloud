/*
 * @Author: mavon
 * @Date: 2021-11-10 23:28:37
 * @LastEditTime: 2021-11-10 23:35:34
 * @LastEditors: mavon
 * @Description: 
 */
 import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  },
  resolve : {
    alias : [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})

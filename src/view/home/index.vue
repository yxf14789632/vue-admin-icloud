<!--
 * @Author: mavon
 * @Date: 2021-11-15 16:02:06
 * @LastEditTime: 2021-11-19 10:41:50
 * @LastEditors: mavon
 * @Description: 
-->
<template>
    <div ref="myChart" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script lang="ts">
import { ref } from "vue";
import * as echarts from "echarts";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default {
    name: "Home",
    setup() {
        const myChart = ref<HTMLElement>();  //也可以用const myChart = ref<any>(); 

        console.log(myChart);
        const myCharts = ref<any>();
        setTimeout(() => {
        // 绘制图表
        myCharts.value = echarts.init(myChart.value!);
        myCharts.value.setOption({
            title: { text: "测试" },
            tooltip: {},
            xAxis: {
            data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
            },
            yAxis: {},
            series: [
            {
                name: "用户量",
                type: "line",
                data: [5, 20, 36, 10, 10, 20],
            },
            ],
        });
        }, 10);

        return {
        myChart,
        };
    },
};
</script>
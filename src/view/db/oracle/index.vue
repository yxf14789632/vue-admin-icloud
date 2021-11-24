<!--
 * @Author: mavon
 * @Date: 2021-11-19 14:47:20
 * @LastEditTime: 2021-11-20 14:22:38
 * @LastEditors: mavon
 * @Description: 
-->
<template>
<div>
    <el-row :gutter="12">
        <el-col :span="7">
            <el-card class="box-card">
                <template #header>
                    <i class="el-icon-data-line"></i> 访问量 
                    <span class="card-header-tag el-tag el-tag--success el-tag--small el-tag--light">日</span>
                </template>
                <div class="echarts" ref="myChart"></div>
            </el-card>
        </el-col>
        <el-col :span="7">
            <el-card class="box-card">
                <template #header>
                    <i class="el-icon-data-line"></i> 访问量 
                    <span class="card-header-tag el-tag el-tag--success el-tag--small el-tag--light">日</span>
                </template>
                <div class="echarts"></div>
            </el-card>
        </el-col>
        <el-col :span="10">
            <el-card class="box-card">
            <template #header>
                <i class="el-icon-data-line"></i> 指标 
                <span class="card-header-tag el-tag el-tag--success el-tag--small el-tag--light">日</span>
            </template>
            <div>
                <el-table :data="tableData" style="width: 100%" height="200" size="small">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script  setup lang="ts">
import { ref } from "vue";
import * as echarts from "echarts";

const myChart = ref<HTMLElement>();  //也可以用const myChart = ref<any>(); 

console.log(myChart);
const myCharts = ref<any>();
setTimeout(() => {
// 绘制图表
myCharts.value = echarts.init(myChart.value!, "" ,{renderer: 'svg'});
myCharts.value.setOption({
    tooltip: {},
    grid: {
        top: '4%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    }, 
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
    type: 'value'
    },
    series: [
        {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
        }
    ]
});
}, 10);

const tableData = [
{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189,',
},
{
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189',
},
{
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189',
},
{
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189',
},]

</script>

<style lang="scss">
.box-card .el-card__header {
    position: relative;
}

.box-card .el-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
}

.box-card .el-card__body {
    position: relative;
    padding: 20px;
}

.box-card .el-card__header .card-header-tag {
    position: absolute;
    top: 15px;
    right: 20px;
}

.box-card .el-card__body .echarts {
    width: 100%;
    height: 200px;
}
</style>
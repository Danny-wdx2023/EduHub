<template>
<div class="rank">
    <a-table :columns="columns" :data="rank" row-key="rank">
        <template #name-filter="{ filterValue, setFilterValue, handleFilterConfirm, handleFilterReset}">
            <div class="name-filter">
                <a-space direction="vertical">
                <a-input placeholder="输入学生名..." :model-value="filterValue[0]" @input="(value)=>setFilterValue([value])" />
                <div class="name-filter-control">
                    <a-button @click="handleFilterConfirm">确认</a-button>
                    <a-button @click="handleFilterReset">重置</a-button>
                </div>
                </a-space>
            </div>
        </template>
    </a-table>
</div>
</template>
<script setup>

import { IconSearch } from '@arco-design/web-vue/es/icon';
import { ref, inject, h } from 'vue';
let rank = ref([]);
const columns = [
        { title: "排名", dataIndex: "rank" }, 
        { title: "姓名", dataIndex: "name",
            filterable: {
                filter: (val, row) => row.name.includes(val),
                icon: () => h(IconSearch),
                slotName: "name-filter",
            }
        }, 
        { title: "语文", dataIndex: "chinese", sortable: { sortDirections: ['descend'] } }, 
        { title: "数学", dataIndex: "maths", sortable: { sortDirections: ['descend'] } }, 
        { title: "英语", dataIndex: "english", sortable: { sortDirections: ['descend'] } }, 
        { title: "科学1", dataIndex: "physics", sortable: { sortDirections: ['descend'] } },
        { title: "科学二", dataIndex: "chemistry", sortable: { sortDirections: ['descend'] } },
        { title: "总分", dataIndex: "total" }
            
    ]
const getData = inject("getData");
getData("/api/getRank", rank)();
</script>
<style scoped>
    .name-filter {
        padding: 20px;
        background: var(--color-bg-5);
        border: 1px solid var(--color-neutral-3);
        border-radius: var(--border-radius-medium);
        box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    }

    .name-filter-control {
        display: flex;
        justify-content: space-between;
    }
</style>
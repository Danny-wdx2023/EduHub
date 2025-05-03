<script setup>
    import Todo from "@/components/Campus/Todo.vue";
    import Calendar from "@/components/Campus/Calendar.vue";
</script>
<template>
    <div id="campus-root">
        <a-tabs position="left">
            <a-tab-pane key="1">
                <template #title><div><i class="ri-checkbox-line"></i> 今日待办</div></template>
                <Todo></Todo>
            </a-tab-pane>
            <a-tab-pane key="2">
                <template #title><div><i class="ri-calendar-line"></i> 日程安排</div></template>
                <Calendar></Calendar>
            </a-tab-pane>
            <a-tab-pane key="3">
                <template #title><div><i class="ri-video-line"></i> 临境会议</div></template>
            </a-tab-pane>
            <a-tab-pane key="4">
                <template #title><div><i class="ri-quill-pen-line"></i> 自习时间</div></template>
            </a-tab-pane>
            <a-tab-pane key="5">
                <template #title><div><i class="ri-cloud-line"></i> 云盘文件</div></template>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<style scoped>
    #campus-root {
        position: absolute;
        left: 2vw;
        right: 2vw;
        top: 2vh;
        bottom: 2vh;
    }
    :deep(.arco-tabs-tab-title) {
        font-size: large;
        text-align: center;
    }
</style>
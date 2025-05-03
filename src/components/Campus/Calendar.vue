<template>
    <div id="calendar-root">
        <a-date-picker hide-trigger style="width: 268px;" v-model="selectedDate" format="YYYY-MM-DD"></a-date-picker>
        <div id="summary">
            <a-list size="small">
                <a-list-item v-for="task in schedule[selectedDate]">
                    <a-tooltip :content="task.detail" position="left" background-color="dodgerblue">
                        <a-typography-text>{{ task.name }}</a-typography-text>
                        <a-typography-text type="secondary"></a-typography-text>
                    </a-tooltip>
                </a-list-item>
            </a-list>
        </div>
        <div id="detail">
            <a-typography-title :heading="3" style="margin: 10px;">{{ selectedDate }}</a-typography-title>
        </div>
    </div>
</template>
<style scoped>
    #calendar-root {
        display: grid;
        grid-template-columns: 268px 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 32px;
        row-gap: 12px;
        grid-auto-flow: column;
    }
    #summary {
        background-color: var(--color-bg-4);
    }
    #detail {
        grid-row: 1 / 3;
        background-color: var(--color-bg-4);
    }
</style>
<script setup>
    import { ref, inject } from "vue";
    const getData = inject("getData");
    const today = new Date();
    const selectedDate = ref(`${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,0)}-${today.getDate().toString().padStart(2,0)}`), schedule = ref({});
    getData("/api/getSchedule", schedule)();
</script>
<template>
    <div id="todo">
        <a-card v-for="subject in Object.keys(todoList)">
            <template #title>{{ subject }}</template>
            <div>
                <a-tooltip :content="hw.detail" v-for="hw in todoList[subject]" position="bottom" mini background-color="dodgerblue">
                    <a-checkbox v-model="done[hw.id]">
                        <a-typography-text :delete="done[hw.id]" :type="done[hw.id] ? 'secondary' : ''">{{ hw.name }}</a-typography-text>
                    </a-checkbox>
                </a-tooltip>
            </div>
        </a-card>
    </div>
</template>
<script setup>
    import { ref, inject } from "vue";
    const todoList = ref([]), getData = inject("getData"), done = ref({});
    getData("/api/getTodo", todoList)();
</script>
<style scoped lang="scss">
    #todo {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    div.arco-card-body > div {
        display: flex;
        flex-direction: column;
    }
</style>
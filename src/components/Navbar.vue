<template>
    <a-drawer :visible="visible" @cancel="collapseMenu(undefined, undefined)" :footer="false" :width="320" placement="left" >
    <template #title>菜单</template>
    <a-menu :selected-keys="[nowPage.nowPage]">
        <a-menu-item key="home" @click="collapseMenu('/')">
            <template #icon><i class="ri-home-4-line"></i></template>
            主页
        </a-menu-item>
        <a-menu-item key="flowlib" @click="collapseMenu('/flowlib')">
            <template #icon><i class="ri-book-shelf-line"></i></template>
            流阅
        </a-menu-item>
        <a-menu-item key="campus" @click="collapseMenu('/campus')">
            <template #icon><i class="ri-graduation-cap-line"></i></template>
            班级
        </a-menu-item>
        <a-menu-item key="class5" @click="collapseMenu('/class5')">
            <template #icon><i class="ri-movie-line"></i></template>
            微课
        </a-menu-item>
        <!-- <RouterLink to="/chat" @click="collapseMenu" data-id="chat"> -->
        <a-menu-item key="chat" @click="collapseMenu('/chat')">
            <template #icon><i class="ri-message-2-line"></i></template>
            交流
        </a-menu-item>
        <!-- </RouterLink> -->
        <!-- <RouterLink to="/about" @click="collapseMenu" data-id="about"> -->
        <a-menu-item key="about" @click="collapseMenu('/about')">
            <template #icon><i class="ri-information-line"></i></template>
            关于
        </a-menu-item>
        <!-- </RouterLink> -->
        <!-- <RouterLink to="/personal" @click="collapseMenu" data-id="personal"> -->
        <a-menu-item key="personal" @click="collapseMenu('/personal')">
            <template #icon><i class="ri-user-line"></i></template>
            个人信息
        </a-menu-item>
        <!-- </RouterLink> -->
        <a-divider>插件</a-divider>
        <!-- <RouterLink v-for="plugin in plugins" :to="'/plugin/'+plugin.name" @click="collapseMenu" :data-id="'plugin-'+plugin.name"> -->
        <a-menu-item v-for="plugin in plugins" :key="'plugin-'+plugin.name" @click="collapseMenu('/plugin/'+plugin.name)">
            <template #icon><i :class="plugin.icon"></i></template>
            {{ plugin.zh_name }}
        </a-menu-item>
        <!-- </RouterLink> -->
        <a-divider>专区</a-divider>
        <RouterLink to="/zone/dev" @click="collapseMenu" data-id="zone-dev">
        <a-menu-item key="zone-dev" @click="collapseMenu('/zone/dev')">
            <template #icon><i class="ri-terminal-box-line"></i></template>
            开发者专区
        </a-menu-item>
        </RouterLink>
    </a-menu>
    </a-drawer>
    <a-button @click="uncollapseMenu"><i class="ri-menu-fold-2-line"></i></a-button>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
    import { ref, inject } from 'vue';
    import { useNowPageStore } from '@/stores/nowPage';
    import { useRouter, useRoute } from 'vue-router';
    
    const getData = inject("getData");
    const router = useRouter(), route = useRoute();
    let visible = ref(false), plugins = ref([]), nowPage = useNowPageStore();
    let uncollapseMenu = () => { visible.value = true; }
    let collapseMenu = (url) => { 
        visible.value = false; 
        if (url != undefined) {
            router.push(url);
        }
    }
    getData("/api/getPlugins", plugins)();
</script>
<style scoped>
    .arco-btn {
        position: fixed;
        top: calc(50vh - 20px);
        height: 30px;
        background-color: skyblue
    }
    .arco-btn:hover{
      background-color: lightsteelblue;
    }
</style>
<template>
    <a-drawer :visible="visible" @cancel="collapseMenu" :footer="false" :width="320" placement="left" >
    <template #title>菜单</template>
    <a-menu :default-selected-keys="['1']">
        <RouterLink to="/" @click="collapseMenu">
        <a-menu-item key="1">
          <template #icon><i class="ri-home-4-line"></i></template>
          主页
        </a-menu-item>
        </RouterLink>
        <RouterLink to="/flowlib" @click="collapseMenu">
        <a-menu-item key="2">
          <template #icon><i class="ri-book-shelf-line"></i></template>
          流阅
        </a-menu-item>
        </RouterLink>
        <RouterLink to="/campus" @click="collapseMenu">
        <a-menu-item key="3">
          <template #icon><i class="ri-graduation-cap-line"></i></template>
          班级
        </a-menu-item>
        </RouterLink>
        <RouterLink to="/class5" @click="collapseMenu">
        <a-menu-item key="4">
          <template #icon><i class="ri-movie-line"></i></template>
          微课
        </a-menu-item>
        </RouterLink>
        <RouterLink to="/chat" @click="collapseMenu">
        <a-menu-item key="54">
          <template #icon><i class="ri-message-2-line"></i></template>
          交流
        </a-menu-item>
        </RouterLink>
        <RouterLink to="/plugin/marketplace" @click="collapseMenu">
        <a-menu-item key="6">
          <template #icon><i class="ri-puzzle-line"></i></template>
          插件
        </a-menu-item>
        </RouterLink>
        <RouterLink to="/about" @click="collapseMenu">
        <a-menu-item key="7">
          <template #icon><i class="ri-information-line"></i></template>
          关于
        </a-menu-item>
        </RouterLink>
        <RouterLink to="/personal" @click="collapseMenu">
        <a-menu-item key="8">
          <template #icon><i class="ri-user-line"></i></template>
          个人信息
        </a-menu-item>
        </RouterLink>
        <a-divider>专区</a-divider>
        <RouterLink to="/zone/dev" @click="collapseMenu">
        <a-menu-item key="9">
          <template #icon><i class="ri-terminal-box-line"></i></template>
          开发者专区
        </a-menu-item>
        </RouterLink>
      </a-menu>
    </a-drawer>
    <a-button @click="uncollapseMenu"><i class="ri-menu-fold-2-line"></i></a-button>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'
    let visible = ref(false)
    let uncollapseMenu = () => { visible.value = true }
    let collapseMenu = () => { visible.value = false }
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
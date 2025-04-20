<template>
    <div id="about-root">
        <a-typography-title><i class="ri-information-line"></i> 关于</a-typography-title>
        <a-typography-title :heading="6"><i class="ri-quill-pen-line"></i>&nbsp;学习是心海上的灯塔，照亮未知的暗礁与浅滩。每一本书都是潮汐，轻轻拍打着求知的岸。我们在字里行间播种，让思想的藤蔓沿着时光攀爬。那些默默耕耘的晨昏，终将收获知识的繁花。&nbsp;</a-typography-title>
        <a-typography-title :heading="3">EduHub是什么？</a-typography-title>
        <div>EduHub是一个目标用户为师生的系统，结合了图书管理、微课发布、班级管理、交流研讨等功能，并允许开发插件。</div>
        <img src="/about/edu.svg" alt="E-Edu" class="edu">
    </div>
</template>
<style scoped>
    div#about-root{
        position: absolute;
        left: 2vw;
    }
    img.edu {
        position: absolute;
        right: 0;
        top: 160px;
        width: 30%;
    }
</style>
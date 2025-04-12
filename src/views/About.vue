<template>
    <div id="about-root">
    <h1><i class="ri-information-line"> 关于</i></h1>
    <blockquote>
        &#x3000;&#x3000;学习是心海上的灯塔，照亮未知的暗礁与浅滩。每一本书都是潮汐，轻轻拍打着求知的岸。我们在字里行间播种，让思想的藤蔓沿着时光攀爬。那些默默耕耘的晨昏，终将收获知识的繁花。
    </blockquote>
    <h3>EduHub是什么？</h3>
    <div>EduHub是一个目标用户为师生的系统，结合了图书管理、微课发布、班级管理、交流研讨等功能，并允许开发插件。通过借鉴GitHub的经验，我们还开发了edu命令行工具，可以帮助学生与老师进行各类操作。</div>
    </div>
</template>
<style scoped>
    div#about-root{
        position: absolute;
        left: 2vw;
    }
    blockquote{
        width: 370px;
        font-size: 16px;
        background-color: white;
        padding: 10px;
    }
    blockquote::before{
        content: "";
        position: absolute;
        width: 10px;
        height: 93px;
        margin-top: -10px;
        margin-left: -20px;
        background-color: skyblue;
    }
</style>
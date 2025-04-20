<template>
    <div id="flowlib-root">
        <nav>
            <input type="radio" name="function" id="select-search" checked>
            <label for="select-search">图书检索</label>
            <input type="radio" name="function" id="select-recommend">
            <label for="select-recommend">新书推荐</label>
            <span class="glider"></span>
        </nav>
        <main>
            <Search></Search>
            <Recommend></Recommend>
        </main>
    </div>
</template>
<script setup>
    import Search from '@/components/FlowLib/Search.vue'
    import Recommend from '@/components/FlowLib/Recommend.vue';
</script>
<style scoped lang="scss">
    div#flowlib-root {
        position: absolute;
        left: 2vw;
        right: 2vw;
    }
    nav {
        position: fixed;
        top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: skyblue;
        border-radius: 5px;
        padding: 2px 6px;
    }
    label[for] {
        margin: 10px;
        font-size: 20px;
        z-index: 2;
        transition: color .5s;
        width: 80px;
        text-align: center;
        cursor: pointer;
    }
    input[type="radio"] {
        display: none;
    }
    span.glider {
        position: absolute;
        width: 100px;
        background-color: rgba(255, 255, 255, 0.8);
        height: 36px;
        border-radius: 5px;
        transition: transform .5s;
    }
    input:checked + label {
        color: steelblue;
    }
    input#select-search:checked ~ span.glider {
        transform: translate(0);
    }
    input#select-recommend:checked ~ span.glider {
        transform: translate(100%);
    }
    main {
        transition: transform .5s;
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        padding: 0 4vw;
    }
    nav:has(input#select-recommend:checked) + main {
        transform: translate(-100%);
    }

</style>

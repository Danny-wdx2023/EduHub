<template>
    <div id="flowlib-root">
        <nav>
            <input type="radio" name="function" id="select-search">
            <label for="select-search">图书检索</label>
            <input type="radio" name="function" id="select-recommend">
            <label for="select-recommend">新书推荐</label>
            <span class="glider"></span>
        </nav>
        <main>
            <div class="search">
                <a-form layout="inline">
                    <a-form-item tooltip="可输入书籍名/ 作者名/ ISBN/ ..." label="关键词">
                        <a-input placeholder="请输入关键词" name="kw"></a-input>
                    </a-form-item>
                    <a-button :loading="loading" @click="search"><template #icon><i class="ri-search-line"></i></template>搜索</a-button>
                </a-form>
                <a-table :data="searchRes" :columns="columns"></a-table>
            </div>
            <div class="recommend"></div>
        </main>
    </div>
</template>
<script setup>
    import { ref, inject, watch } from 'vue';
    const getData = inject("getData");
    let searchRes = ref([]), loading = ref(false);
    const columns = [
        { title: '书名', dataIndex: 'name', key: 'name' },
        { title: '作者', dataIndex: 'author', key: 'author' },
        { title: '出版社', dataIndex: 'publisher', key: 'publisher' },
        { title: '出版日期', dataIndex: 'pubdate', key: 'pubdate' },
        { title: '检索号', dataIndex: 'searchId', key: 'searchId'},
        { title: 'ISBN', dataIndex: 'isbn', key: 'isbn' },
    ]
    watch(searchRes, function (){
        this.$nextTick(() => {
            loading.value = false;
            // setTimeout(() => {
            //     loading.value = false;
            // }, 2000);
        })
    }

    );
    const search = () => {
        loading.value = true;
        getData('/api/getBookData', searchRes)();
    }
</script>
<style scoped>
    div#flowlib-root{
        position: absolute;
        left: 2vw;
        right: 2vw;
    }
    nav{
        position: absolute;
        top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: skyblue;
        border-radius: 5px;
        padding: 2px 6px;
    }
    label[for]{
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
    span.glider{
        position: absolute;
        width: 100px;
        background-color: rgba(255, 255, 255, 0.8);
        height: 36px;
        border-radius: 5px;
        transition: transform .5s;
    }
    input:checked + label{
        color: steelblue;
    }
    input#select-search:checked ~ span.glider{
        transform: translate(0);
    }
    input#select-recommend:checked ~ span.glider{
        transform: translate(100%);
    }
    main{
        transition: transform .5s;
    }
    nav:has(input#select-search:checked) + main{
        transform: translate(0);
    } 
    nav:has(input#select-recommend:checked) + main{
        transform: translate(-100%);
    }
    div.search{
        position: absolute;
        top: 100px;
    }
    div.search :is(.arco-btn, .arco-input-wrapper){
        background-color: lightskyblue;
    }
    div.search .arco-btn:not(.arco-btn-loading):active{
        background-color: dodgerblue;
    }
    div.arco-tooltip{
        width: 1000px;
    }
</style>

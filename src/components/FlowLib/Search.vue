<template>
    <div class="search">
        <a-form layout="inline">
            <a-form-item>
                <template #label>
                    关键词
                    <a-tooltip content="可输入书籍名/ 作者名/ ISBN/ ..." background-color="dodgerblue">
                        <i class="ri-question-line" style="color: gray; font-size: small;"></i>
                    </a-tooltip>
                </template>
                <a-input placeholder="请输入关键词" name="kw"></a-input>
            </a-form-item>
            <a-button @click="search"><template #icon><i class="ri-search-line"></i></template>搜索</a-button>
        </a-form>
        <a-table :data="searchRes" :columns="columns" :loading="loading"></a-table>
    </div>
</template>

<script setup>
    import { ref, inject, watch } from 'vue';
    const getData = inject("getData");
    let searchRes = ref([]), loading = ref(false)
    const columns = [
        { title: '书名', dataIndex: 'name', key: 'name' },
        { title: '作者', dataIndex: 'author', key: 'author' },
        { title: '出版社', dataIndex: 'publisher', key: 'publisher' },
        { title: '出版日期', dataIndex: 'pubdate', key: 'pubdate' },
        { title: '检索号', dataIndex: 'searchId', key: 'searchId'},
        { title: 'ISBN', dataIndex: 'isbn', key: 'isbn' },
    ]
    watch(searchRes, function(){
        loading.value = false;
    })
    const search = (first = false) => {
        if (first) loading.value = true;
        getData(`/api/getBookData`, searchRes)();
    }
    search(true);
</script>
<style>
    div.search {
        .arco-btn, .arco-input-wrapper{
            background-color: var(--color-primary-light-4);
        }
        .arco-btn:hover{
            background-color: var(--color-primary-light-3);
        }
        .arco-btn:not(.arco-btn-loading):active{
            background-color: var(--color-primary-light-2);
        }
        .arco-table{
            margin-top: 20px;
        }
    }
</style>
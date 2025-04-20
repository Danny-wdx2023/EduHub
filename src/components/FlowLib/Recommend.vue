<template>
    <a-scrollbar style="height: 80vh; overflow: auto;">
    <div class="recommend">
        <a-card :key="book.isbn" v-for="book in recommend">
            <template #cover>
                <div v-if="book.label == ''">
                    <img :src="`/bookpic/${book.isbn}.png`" :alt="book.title">
                </div>
                <div v-else>
                    <a-badge :text="book.label" :offset="[-20, 5]">
                        <img :src="`/bookpic/${book.isbn}.png`" :alt="book.title">
                    </a-badge>
                </div>
            </template>
            <a-card-meta>
                <template #title><div>
                    <a-typography-text>{{ book.title }}</a-typography-text>
                    <a-typography-text type="secondary">{{ book.extra }}</a-typography-text>
                </div></template>
                <template #description>
                    <a-typography-text :ellipsis="{ rows: 3/*, expandable: true*/ }">{{ book.desc }}</a-typography-text>
                </template>
            </a-card-meta>
            <template #actions>
                <div @click="book.cart[1] = !book.cart[1]" :title="book.cart[1] ? '从书架中删除' : '加入书架'"><i :class="`ri-shopping-cart-${book.cart[1] ? 'fill' : 'line'}`"></i> {{ book.cart[0] + book.cart[1] }}</div>
                <div @click="book.star[1] = !book.star[1]" :title="book.star[1] ? '取消收藏' : '收藏'"><i :class="`ri-heart-${book.star[1] ? 'fill' : 'line'}`"></i> {{ book.star[0] + book.star[1] }}</div>
                <a :href="`/bookDetail/${book.isbn}`"><i class="ri-arrow-right-line" title="了解更多..."></i></a>
            </template>
        </a-card>
    </div>
    </a-scrollbar>
</template>
<script setup>
    import { ref, inject } from 'vue';
    const getData = inject("getData");
    let recommend = ref([]);

    getData("/api/getRecommendBook", recommend)();
</script>
<style scoped lang="scss">
    .arco-scrollbar{
        position: absolute;
        top: 0;
        bottom: 20vh;
        left: 104vw;
        right: -96vw;
    }
    div.recommend {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 50px;
    }
    .arco-card {
        .arco-card-cover > div {
            padding: 10px 0;
            img {
                width: 100%;
            }
        }
    }
    div.arco-card-meta {
        div.arco-card-meta-title > div {
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            :nth-child(1) {
                font-size: large;
            }
            :nth-child(2) {
                font-size: xx-small;
            }
        }
        div.desc {
            white-space: wrap;
        }
    }
</style>
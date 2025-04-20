<template>
    <div id="home-root">
        <div class="announcement ri-megaphone-line"> 站长公告：本站开业！</div>
        <div class="carousel">
            <a-carousel :style="{width: '100%', height: '100%'}" show-arrow="hover" indicator-type="line" :auto-play="true">
                <a-carousel-item><img src="/img1.webp" alt="img1" :style="{width: '100%', height: '100%'}"></a-carousel-item>
                <a-carousel-item><img src="/img1.webp" alt="img1" :style="{width: '100%', height: '100%'}"></a-carousel-item>
                <a-carousel-item><img src="/img1.webp" alt="img1" :style="{width: '100%', height: '100%'}"></a-carousel-item>
                <a-carousel-item><img src="/img1.webp" alt="img1" :style="{width: '100%', height: '100%'}"></a-carousel-item>
            </a-carousel>
        </div>
        <div class="rightSide">
            <div class="welcome">欢迎回来，<RouterLink to="/personal">{{ userData.name }}</RouterLink></div>
            <div class="now">{{ Date().substring(4,10) }}</div>
            <div class="dayLeftContainer">
                <div v-for="item in events.slice(0,2)"><div>距 </div>{{ item.event }}<div> 还有 </div><div class="dayLeft" :day="item.dayLeft"> 天</div></div>
            </div>
            <a-button type="outline" size="large" @click="getOracle()" v-if="isEmptyObj(oracle)">求签</a-button>
            <div class="oracle" v-else>
                <div v-for="yes in oracle.yes">
                    <div>宜：{{ yes.name }}</div>
                    <div style="color: var(--color-neutral-6)">{{ yes.detail }}</div>
                </div>
                <div v-for="no in oracle.no">
                    <div>忌：{{ no.name }}</div>
                    <div style="color: var(--color-neutral-6)">{{ no.detail }}</div>
                </div>
            </div>
        </div>
        <Rank></Rank>
    </div>
</template>
<script setup>
    import Rank from "@/components/HomeView/Rank.vue";
    import { ref, inject } from "vue";
    import { RouterLink } from "vue-router";
    let oracle = ref({}), userData = ref({}), events = ref([]);
    const isEmptyObj = (obj) => Object.keys(obj).length == 0;
    const getData = inject("getData");
    let getOracle = getData("/api/getOracle", oracle);
    getData("/api/getUserData", userData)();
    getData("/api/getEvents", events)();
</script>
<style scoped lang="scss">
    div#home-root{
        position: absolute;
        left: 2vw;
        right: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        padding: 70px;
        column-gap: 80px;
        row-gap: 40px;
    }
    div.announcement{
        grid-column: 1 / 6;
    }
    div.carousel{
        grid-column: 1 / 4;
    }
    div.rightSide{
        grid-column: 4 / 6;
    }
    div.rank{
        grid-column: 1 / 6;
    }
    div.announcement{
        font-size: larger;
        background-color: lightseagreen;
        padding: 5px;
        border-radius: 6px;
    }
    div.carousel img{
        object-fit: cover;
        object-position: center;
    }
    div.rightSide{
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
    }
    div.welcome{
        font-size: 28px;
    }
    a {
        color: dodgerblue;
    }
    div.now{
        color: green;
        font-weight: bold;
        font-size: 72px;
    }
    
    div.dayLeftContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;

        & > div > div{
            display: inline;
            color: gray;
        }
    }
    div.dayLeft::before{
        content: attr(day);
        color: initial;
    }
    div.rightSide > .arco-btn{
        font-size: 18px;
        margin: 26px;
    }
    div.oracle{
        font-size: 16px;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-auto-flow: column;
        row-gap: 20px;
        column-gap: 40px;

        & > div{
            display: flex;
            flex-direction: column;
            align-items: center;

            &:is(:nth-child(1), :nth-child(2)) > :nth-child(1){
                color: red;
            }

            & > div:nth-child(2){
                color: var(--color-neutral-6);
                font-size: 14px;
            }
        }
    }
    .name-filter {
        padding: 20px;
        background: var(--color-bg-5);
        border: 1px solid var(--color-neutral-3);
        border-radius: var(--border-radius-medium);
        box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    }

    .name-filter-control {
        display: flex;
        justify-content: space-between;
    }
</style>
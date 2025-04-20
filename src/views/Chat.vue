<template>
    <div id="chat-root">
        <a-list id="friends" scrollbar :max-height="600">
            <template #header><i class="ri-chat-smile-2-line"></i> 好友列表</template>
            <a-list-item v-for="friend in friends" :key="friend.id"  @click="changeActiveFriend(friend)"
                :style="{ order: friend.skipUp ? 1 : 2, background: friend.skipUp ? 'linear-gradient(to right, transparent 1%, azure 1%, azure 99%, transparent 99%)' : 'initial' }"
            >
                <a-list-item-meta :title="friend.name" :description="friend.signature">
                    <template #avatar>
                        <a-avatar shape="square">
                            <img alt="avatar" src="/img1.webp">
                        </a-avatar>
                    </template>
                    <template #title>
                        {{ friend.name }}
                        <i class="ri-skip-up-line" v-show="friend.skipUp"></i>
                    </template>
                </a-list-item-meta>
                <template #actions>
                    <a-space>
                        <i :class="friend.notification ? 'ri-notification-4-line' : 'ri-notification-off-line'"></i>
                    </a-space>
                </template>
            </a-list-item>
        </a-list>
        <div id="chat">
            <div id="chat-heading">
                <a-typography-title :heading="3">{{ activeFriend.name ? activeFriend.name : '聊天' }}</a-typography-title>

                <a-divider></a-divider>
            </div>
            <div id="chat-history">
                <a-comment v-for="record in chatHistory" :dir="getAuthor(record.name)=='我' ? 'rtl' : 'ltr'">
                    <template #author>
                        <a-typography-text type="secondary" dir="ltr">{{ getAuthor(record.name) }}</a-typography-text>
                    </template>
                    <template #content>
                        <a-typography-text dir="ltr">{{ record.msg }}</a-typography-text>
                    </template>
                    <template #avatar>
                    <a-avatar>
                        <img alt="avatar" src="/img1.webp"/>
                    </a-avatar>
                    </template>
                </a-comment>
            </div>
            <div id="generate-msg" v-if="activeFriend.name != undefined">
                <a-textarea placeholder="请输入消息..." :max-length="1000" allow-clear show-word-limit :auto-size="{ minRows: 3, maxRows: 6 }" />
                <div id="msg-option-control">
                    <a-checkbox value="P2P" default-checked>P2P</a-checkbox>
                    <a-tooltip content="该功能为VIP功能"><a-checkbox value="crypt" ><div vip>加密</div></a-checkbox></a-tooltip>
                    <a-button type="text">发送</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, inject, reactive, computed } from "vue";
    const friends = ref([]), activeFriend = reactive({}), chatHistory = ref([]);
    const getData = inject("getData");
    const changeActiveFriend = (friend) => {
        Object.assign(activeFriend, friend);
        getData("/api/getConversationHistory", chatHistory)({ "me": "bricteria", "other": friend.id });
    }
    const getAuthor = computed(() => {
        const friendsMap = {};
        friends.value.forEach(friend => {
            friendsMap[friend.id] = friend.name;
        });
        return name => friendsMap[name] || "我";
    });
    getData("/api/getFriends", friends)();
</script>
<style scoped>
    div#chat-root {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 80px 10vw 100px 10vw;
        display: grid;
        grid-template-columns: 3fr 7fr;
        grid-auto-flow: column;
        align-items: center;
    }
    #friends {
        width: 100%;
        height: 600px;
        background-color: white;
    }
    :deep(.arco-list-content) {
        display: flex;
        flex-direction: column;
    }
    .arco-list-item:hover {
        background: linear-gradient(to right, transparent 1%, lightgray 1%, lightgray 99%, transparent 99%) !important;
    }
    #chat {
        margin-right: 0;
        height: 600px;
        background-color: #fff;
        display: grid;
        grid-template-rows: 100px 3fr 1fr;
    }
    h3 {
        text-align: center;
        margin: 20px;
        font-size: 30px;
    }
    .arco-comment {
        gap: 6px;
    }
    :deep(.arco-comment-avatar) {
        margin: 0 6px;
    }
    div#generate-msg{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    #msg-option-control {
        display: flex;
        gap: 20px;
    }
    .arco-btn {
        width: fit-content;
        margin-left: auto;
    }
</style>
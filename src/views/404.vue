<template>
  <a-result status="404" title="404" subtitle="你仿佛来到了没有知识存在的荒原……">
    <template #extra>
      <a-space>
        <a-button type="primary" @click="backward">回到上一页</a-button>
        <a-button type="primary" @click="gohome">回到首页</a-button>
      </a-space>
    </template>
  </a-result>
</template>
<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
  const gohome = () => {
    router.push("/");
  }
  const backward = () => {
    router.go(-1);
  }
</script>
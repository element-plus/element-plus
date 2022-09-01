<template>
  <div class="demo-image">
    <div
      v-for="fit in fits"
      :key="fit"
      class="block"
      style="
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--el-border-color);
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        vertical-align: top;
      "
    >
      <span
        class="demonstration"
        style="
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        "
        >{{ fit }}</span
      >
      <el-image style="width: 100px; height: 100px" :url="url" :fit="fit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

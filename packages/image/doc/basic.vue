/* eslint-disable vue/html-self-closing */
/* eslint-disable vue/html-self-closing */
<template>
  <div class="demo-image">
    <div class="block" v-for="fit in fits" :key="fit">
      <div class="demonstration">{{ fit }}</div>
      <br>
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"
      />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>

<style scoped>
  .demo-image {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .block {
    margin: 0 20px;
    text-align: center;
  }
  .demo-image .demonstration {
      margin-bottom: 20px;
  }
</style>
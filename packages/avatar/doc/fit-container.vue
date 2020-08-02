<template>
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <el-avatar
        shape="square"
        :size="100"
        :fit="fit"
        :src="url"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },
}
</script>

<style>
.demo-fit {
  display:flex;
  text-align:center;
  justify-content:space-between
}
.demo-fit .block {
  flex:1;
  display:flex;
  flex-direction:column;
  flex-grow:0
}
.demo-fit .title {
  margin-bottom:10px;
  font-size:14px;
  color:#8492a6
}
</style>

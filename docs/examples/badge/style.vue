<template>
  <el-badge class="item" :value="10" :style="{ color: '#299a47' }">
    <el-button>color</el-button>
  </el-badge>
  <el-badge class="item" :value="100" :style="{ backgroundColor: '#f9c01c' }">
    <el-button>backgroundColor</el-button>
  </el-badge>
  <el-badge
    class="item"
    :value="1000"
    :style="{ backgroundColor: '#f9c01c', color: '#299a47' }"
  >
    <el-button>style</el-button>
  </el-badge>
</template>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>

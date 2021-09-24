<template>
  <div class="demo-type">
    <div>
      <el-avatar :icon="User"></el-avatar>
    </div>
    <div>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { User } from '@element-plus/icons'

export default defineComponent({
  setup() {
    return {
      User,
    }
  },
})
</script>

<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1" />
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <el-slider v-model="value2" />
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false" />
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip" />
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <el-slider v-model="value5" disabled />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const values = reactive({
      value1: 30,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
    })
    const formatTooltip = (val:number) => `当前: ${val}`
    return {
      ...toRefs(values),
      formatTooltip,
    }
  },
}
</script>
<style>
.block{
  padding: 30px 24px;
  overflow: hidden;
  border-bottom: 1px solid #eff2f6;
}
.demonstration{
  font-size: 14px;
  color: #8492a6;
  line-height: 44px;
}
</style>

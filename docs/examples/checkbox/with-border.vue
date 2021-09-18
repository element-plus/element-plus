<template>
  <div>
    <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>
    <el-checkbox v-model="checked2" label="Option2" border></el-checkbox>
  </div>
  <div class="demo-with-border">
    <el-checkbox
      v-model="checked3"
      label="Option1"
      border
      size="medium"
    ></el-checkbox>
    <el-checkbox
      v-model="checked4"
      label="Option2"
      border
      size="medium"
    ></el-checkbox>
  </div>
  <div class="demo-with-border">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border disabled></el-checkbox>
    </el-checkbox-group>
  </div>
  <div class="demo-with-border">
    <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: [],
    })

    return toRefs(state)
  },
})
</script>

<style scoped>
.demo-with-border {
  margin-top: 24px;
}
</style>

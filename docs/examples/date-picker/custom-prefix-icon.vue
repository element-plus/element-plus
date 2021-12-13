<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">set prefix-icon</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        :prefix-icon="customPrefix"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, shallowRef, h } from 'vue'

export default defineComponent({
  setup() {
    const customPrefix = shallowRef({
      render() {
        return h('p', 'pre')
      },
    })
    const state = reactive({
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      value1: '',
    })

    return {
      ...toRefs(state),
      customPrefix,
    }
  },
})
</script>

<template>
  <div v-if="visible" class="target" style="height:400px; overflow-y: auto">
    <div style="height: 1000px; width: 100%">
      <el-backtop target=".target">
        <div
          style="{
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }"
        >
          UP
        </div>
      </el-backtop>
      <el-backtop target=".target" :bottom="100" />
    </div>
  </div>
</template>

<script>
import { onMounted, defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    onMounted(() => {
      visible.value = true
    })

    return {
      visible,
    }
  },
})
</script>

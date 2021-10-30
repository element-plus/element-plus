<template>
  <el-switch
    v-model="value1"
    :loading="loading1"
    :before-change="beforeChange1"
  />
  <el-switch
    v-model="value2"
    :loading="loading2"
    :before-change="beforeChange2"
  />
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  setup() {
    const status1 = reactive({
      value1: false,
      loading1: false,
    })

    const beforeChange1 = () => {
      status1.loading1 = true
      return new Promise((resolve) => {
        setTimeout(() => {
          status1.loading1 = false
          ElMessage.success('Switch success')
          return resolve(true)
        }, 1000)
      })
    }

    const status2 = reactive({
      value2: false,
      loading2: false,
    })

    const beforeChange2 = () => {
      status2.loading2 = true
      return new Promise((_, reject) => {
        setTimeout(() => {
          status2.loading2 = false
          ElMessage.error('Switch failed')
          return reject(new Error('Error'))
        }, 1000)
      })
    }

    return {
      ...toRefs(status1),
      ...toRefs(status2),
      beforeChange1,
      beforeChange2,
    }
  },
}
</script>

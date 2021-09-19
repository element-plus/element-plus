<template>
  <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc',
    }"
    :data="data"
  >
  </el-transfer>
</template>

<script lang="ts">
export default {
  data() {
    const generateData = (_) => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `Option ${i}`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: [],
    }
  },
}
</script>

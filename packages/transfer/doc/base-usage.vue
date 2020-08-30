<template>
  <el-transfer
    v-model="value"
    :data="data"
  />
</template>

<script>
export default {
  data() {
    const generateData = () => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i + '',
          label: `Option ${ i }`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: ['1', '4'],
    }
  },
}
</script>

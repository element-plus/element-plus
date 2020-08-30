<template>
  <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
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
          value: i + '',
          desc: `Option ${ i }`,
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

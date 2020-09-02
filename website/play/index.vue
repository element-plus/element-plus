<template>
  <div>
    <el-color-picker v-model="color" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#333333',
    }
  },
}
</script>

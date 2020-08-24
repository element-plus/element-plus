<template>
  <div>
    <div>accordion: false</div>
    <el-collapse v-model="activeNames" @update:modelValue="handleChange">
      <el-collapse-item title="title1" name="1">
        <div>content 1</div>
      </el-collapse-item>
      <el-collapse-item title="title2" name="2">
        <div>content 2</div>
      </el-collapse-item>
      <el-collapse-item title="title3" name="3">
        <div>content 3</div>
      </el-collapse-item>
      <el-collapse-item title="title4">
        <div>content 4</div>
        <div>content 4-1</div>
      </el-collapse-item>
    </el-collapse>
    <hr>
    <div>accordion: true</div>
    <el-collapse v-model="activeNames2" accordion>
      <el-collapse-item title="title1" name="1">
        <div>content 1</div>
      </el-collapse-item>
      <el-collapse-item title="title2" name="2">
        <div>content 2</div>
      </el-collapse-item>
      <el-collapse-item title="title3" name="3">
        <div>content 3</div>
      </el-collapse-item>
      <el-collapse-item title="title4">
        <div>content 4</div>
        <div>content 4-1</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      activeNames2: ['1'],
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
  },
}
</script>

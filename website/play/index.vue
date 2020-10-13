<template>
  <el-popover title="标题" ref="popover" width="300px" trigger='hover' >
    <el-popover title="nested" content="我是内嵌的">
      <template #reference>
        <el-button>1</el-button>
      </template>
    </el-popover>
    
  </el-popover>

  <el-button v-popover:popover>I am reference</el-button>
</template>

<script>
export default {
}
</script>

<template>
  <div>
    <!-- <el-tooltip>
      <div>
        trigger
      </div>
      <template #content>
        content
      </template>
    </el-tooltip> -->
    <el-popper v-model:visible="visible" :trigger="['click']">
      <template #trigger>
        <template v-for="i in 3" :key="i">
          <div>
            <div v-for="j in 3" :key="j">{{ j }}</div>
          </div>
        </template>
      </template>
      <!-- <template #trigger>
      </template> -->
      <div>
        I am popper content
        <el-button @click="visible = false">
          toggle visible
        </el-button>
      </div>
    </el-popper>
    <el-button @click="shouldShow = !shouldShow">I am not trigger</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shouldShow: false,
      visible: true,
    }
  },
  watch: {
    shouldShow(val) {
      console.log(val)
    },
  },
}
</script>

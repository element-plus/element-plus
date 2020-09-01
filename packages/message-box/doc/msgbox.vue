<template>
  <el-button type="text" @click="open">
    点击打开 Message Box
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { h } from 'vue'

export default {
  name: 'Msgbox',
  methods: {
    open() {
      console.log(this.$slots)
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        },
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action,
        })
      })
    },
  },
}
</script>

<style scoped>

</style>

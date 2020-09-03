<template>
  <div>
    <h1>自定义</h1>
    <el-button type="text" @click="open">
      点击打开 Message Box
    </el-button>
  </div>
</template>

<script lang="ts">
import { h } from 'vue'

export default {
  name: 'Msgbox',
  methods: {
    open() {
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
          console.log(action)
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
        alert('action: ' + action)
      })
    },
  },
}
</script>

<style scoped>

</style>

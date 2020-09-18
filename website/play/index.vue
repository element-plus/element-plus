<template>
  <div>
    <el-button @click="show">显示</el-button>
  </div>
</template>

<script>
import { h } from 'vue'

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
  methods: {
    show() {
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
        alert('action: ' + action)
      })
    },
  },
}
</script>

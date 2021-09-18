<template>
  <el-cascader :props="props" />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

let id = 0

export default defineComponent({
  setup() {
    const state = reactive({
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map((item) => ({
              value: ++id,
              label: `Option - ${id}`,
              leaf: level >= 2,
            }))
            // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
            resolve(nodes)
          }, 1000)
        },
      },
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

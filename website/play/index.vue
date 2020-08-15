<template>
  <div ref="OutterRef">
    <el-button ref="innerRef" @click="onCLick">TEST</el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  computed,
} from 'vue'

export default defineComponent({
  setup(props, ctx) {
    const innerRef: Ref<Nullable<HTMLElement>> = ref(null)
    const OutterRef: Ref<Nullable<HTMLElement>> = ref(null)
    const onCLick = () => {
      console.log('innerRef', innerRef.value)
      console.log('OutterRef', OutterRef.value)
    }
    return {
      innerRef,
      OutterRef,
      onCLick,
    }
  },
})
</script>

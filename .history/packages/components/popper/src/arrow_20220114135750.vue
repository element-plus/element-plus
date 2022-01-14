<template>
  <span ref="arrowRef" class="el-popper__arrow" data-popper-arrow="" />
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  unref,
} from 'vue'
import { usePopperArrowProps } from './popper'
import { POPPER_CONTENT_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElPopperArrow',
  props: usePopperArrowProps,
  setup(props) {
    const arrowRef = ref<HTMLSpanElement | null>(null)
    const popperContentInjection = inject(
      POPPER_CONTENT_INJECTION_KEY,
      undefined
    )!

    watch(
      () => props.arrowOffset,
      (val) => {
        popperContentInjection.arrowOffset.value = val
      }
    )

    onMounted(() => {
      popperContentInjection.arrowRef.value = unref(arrowRef)
    })

    onBeforeUnmount(() => {
      popperContentInjection.arrowRef.value = null
    })

    return {
      arrowRef,
    }
  },
})
</script>

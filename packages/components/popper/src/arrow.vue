<template>
  <span ref="arrowRef" :class="ns.e('arrow')" data-popper-arrow="" />
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
import { useNamespace } from '@element-plus/hooks'
import { usePopperArrowProps } from './popper'
import { POPPER_CONTENT_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElPopperArrow',
  props: usePopperArrowProps,
  setup(props) {
    const ns = useNamespace('popper')
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
      ns,
      arrowRef,
    }
  },
})
</script>

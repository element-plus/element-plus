<template>
  <slot />
</template>

<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { useId } from '@element-plus/hooks'
import { isNumber, isPropAbsent } from '@element-plus/utils'
import { TOOLTIP_V2_OPEN, tooltipV2RootKey } from '@element-plus/tokens'
import { tooltipV2RootProps } from './root'

const props = defineProps(tooltipV2RootProps)

const _open = ref(props.defaultOpen)

const open = computed<boolean>({
  get: () => (isPropAbsent(props.open) ? _open.value : props.open),
  set: (open) => {
    _open.value = open
    props['onUpdate:open']?.(open)
  },
})

const isOpenDelayed = computed(
  () => isNumber(props.delayDuration) && props.delayDuration > 0
)

const { start: onDelayedOpen, stop: clearTimer } = useTimeoutFn(
  () => {
    open.value = true
  },
  computed(() => props.delayDuration)
)

const contentId = useId()

const onNormalOpen = () => {
  clearTimer()
  open.value = true
}

const onDelayOpen = () => {
  unref(isOpenDelayed) ? onDelayedOpen() : onNormalOpen()
}

const onOpen = onNormalOpen

const onClose = () => {
  clearTimer()
  open.value = false
}

const onChange = (open: boolean) => {
  //

  if (open) {
    document.dispatchEvent(new CustomEvent(TOOLTIP_V2_OPEN))
    onOpen()
  }

  props.onOpenChange?.(open)
}

watch(open, onChange)

onMounted(() => {
  // Keeps only 1 tooltip open at a time
  document.addEventListener(TOOLTIP_V2_OPEN, onClose)
})

onBeforeUnmount(() => {
  clearTimer()
  document.removeEventListener(TOOLTIP_V2_OPEN, onClose)
})

provide(tooltipV2RootKey, {
  contentId,

  onClose,
  onDelayOpen,
  onOpen,
})

defineExpose({
  /**
   * @description open tooltip programmatically
   */
  onOpen,

  /**
   * @description close tooltip programmatically
   */
  onClose,
})
</script>

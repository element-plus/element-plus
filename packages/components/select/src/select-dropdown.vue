<template>
  <div
    :class="[ns.b('dropdown'), ns.is('multiple', isMultiple), popperClass]"
    :style="{ [isFitInputWidth ? 'width' : 'minWidth']: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  ref,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { addResizeListener, removeResizeListener } from '@element-plus/utils-v2'
import { selectKey } from './token'
import type { ResizableElement } from '@element-plus/utils-v2'

export default defineComponent({
  name: 'ElSelectDropdown',

  componentName: 'ElSelectDropdown',

  setup() {
    const select = inject(selectKey)!
    const ns = useNamespace('select')

    // computed
    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)
    const isFitInputWidth = computed(() => select.props.fitInputWidth)
    const minWidth = ref('')

    function updateMinWidth() {
      minWidth.value = `${
        select.selectWrapper?.getBoundingClientRect().width
      }px`
    }

    onMounted(() => {
      // TODO: updatePopper
      // popper.value.update()
      updateMinWidth()
      addResizeListener(
        select.selectWrapper as ResizableElement,
        updateMinWidth
      )
    })

    onBeforeUnmount(() => {
      removeResizeListener(
        select.selectWrapper as ResizableElement,
        updateMinWidth
      )
    })

    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth,
    }
  },
})
</script>

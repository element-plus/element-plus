<template>
  <div
    class="el-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
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
import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'
import { selectContextKey } from '@element-plus/tokens'
import { throwError } from '@element-plus/utils/error'
import type { ResizableElement } from '@element-plus/utils/resize-event'

const COMPONENT_NAME = 'ElSelectDropdown'
export default defineComponent({
  name: COMPONENT_NAME,
  setup() {
    const select = inject(selectContextKey)
    if (!select) throwError(COMPONENT_NAME, 'must be nested inside ElSelect')

    // computed
    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)
    const isFitInputWidth = computed(() => select.props.fitInputWidth)
    const minWidth = ref('')

    const updateMinWidth = () => {
      minWidth.value = `${
        select.selectWrapper?.getBoundingClientRect().width
      }px`
    }

    onMounted(() => {
      // TODO: updatePopper
      // popper.value.update()

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
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth,
    }
  },
})
</script>

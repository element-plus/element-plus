<template>
  <div
    class="el-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script  lang="ts">
import {
  computed,
  onMounted,
  inject,
} from 'vue'
import {
  selectKey,
} from './token'

export default {
  name: 'ElSelectDropdown',

  componentName: 'ElSelectDropdown',

  setup() {
    const select = inject(selectKey)

    // computed
    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)
    const minWidth = computed(() => select.selectWrapper?.getBoundingClientRect().width + 'px')

    onMounted(() => {
      // TODO: updatePopper
      // popper.value.update()
    })

    return {
      minWidth,
      popperClass,
      isMultiple,
    }
  },
}
</script>

<template>
  <div
    class="el-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  inject,
  ref,
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
    const minWidth = ref('')

    onMounted(() => {
      // TODO: updatePopper
      // popper.value.update()

      setTimeout(() => {
        minWidth.value = select.selectWrapper?.getBoundingClientRect().width + 'px'
      })
    })

    return {
      minWidth,
      popperClass,
      isMultiple,
    }
  },
}
</script>

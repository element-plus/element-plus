<template>
  <div
    :class="[ns.b('dropdown'), ns.is('multiple', isMultiple), popperClass]"
    :style="{ [isFitInputWidth ? 'width' : 'minWidth']: minWidth }"
  >
    <div v-if="$slots.header" :class="ns.be('dropdown', 'header')">
      <slot name="header" />
    </div>
    <slot />
    <div v-if="$slots.footer" :class="ns.be('dropdown', 'footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'
import { selectKey } from './token'

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
      minWidth.value = `${select.selectRef?.offsetWidth}px`
    }

    onMounted(() => {
      // TODO: updatePopper
      // popper.value.update()
      updateMinWidth()
      useResizeObserver(select.selectRef, updateMinWidth)
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

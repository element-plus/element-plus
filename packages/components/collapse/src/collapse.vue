<template>
  <div :class="ns.b()" role="tablist" aria-multiselectable="true">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, provide } from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'
import { collapseProps, collapseEmits } from './collapse'
import type { CollapseProvider } from './collapse.type'

defineOptions({
  name: 'ElCollapse',
})
const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const ns = useNamespace('collapse')
const activeNames = ref(Array<string | number>().concat(props.modelValue))

const setActiveNames = (_activeNames) => {
  activeNames.value = [].concat(_activeNames)
  const value = props.accordion ? activeNames.value[0] : activeNames.value
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
}

const handleItemClick = (name) => {
  if (props.accordion) {
    setActiveNames(
      (activeNames.value[0] || activeNames.value[0] === 0) &&
        activeNames.value[0] === name
        ? ''
        : name
    )
  } else {
    const _activeNames = activeNames.value.slice(0)
    const index = _activeNames.indexOf(name)

    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(name)
    }
    setActiveNames(_activeNames)
  }
}

watch(
  () => props.modelValue,
  () => {
    activeNames.value = Array<string | number>().concat(props.modelValue)
  },
  {
    deep: true,
  }
)

provide<CollapseProvider>('collapse', {
  activeNames,
  handleItemClick,
})

defineExpose({
  /** @description active names */
  activeNames,
  /** @description set active names */
  setActiveNames,
})
</script>

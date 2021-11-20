<template>
  <ul v-show="visible" class="el-select-group__wrap">
    <li class="el-select-group__title">{{ label }}</li>
    <li>
      <ul class="el-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  inject,
  ref,
  reactive,
  toRefs,
  getCurrentInstance,
  onMounted,
  watch,
  toRaw,
} from 'vue'
import { optionGroupContextKey, selectContextKey } from '@element-plus/tokens'
import { throwError } from '@element-plus/utils/error'
import { optionGroupProps } from './option-group'
import type { Ref } from 'vue'
import type { OptionInstance } from './option'

const COMPONENT_NAME = 'ElOptionGroup'

export default defineComponent({
  name: COMPONENT_NAME,
  props: optionGroupProps,
  setup(props) {
    const instance = getCurrentInstance()!

    const selectContext = inject(selectContextKey)
    if (!selectContext)
      throwError(COMPONENT_NAME, 'must be nested inside ElSelect')

    const visible = ref(true)
    const children: Ref<OptionInstance[]> = ref([])

    provide(
      optionGroupContextKey,
      reactive({
        ...toRefs(props),
      })
    )

    onMounted(() => {
      children.value = flattedChildren(instance.subTree)
    })

    // get all instances of options
    const flattedChildren = (node) => {
      const children: OptionInstance[] = []
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          if (
            child.type &&
            child.type.name === 'ElOption' &&
            child.component &&
            child.component.proxy
          ) {
            children.push(child.component.proxy)
          } else if (child.children?.length) {
            children.push(...flattedChildren(child))
          }
        })
      }
      return children
    }

    const { groupQueryChange } = toRaw(selectContext)
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true)
    })

    return {
      visible,
      children,
    }
  },
})
</script>

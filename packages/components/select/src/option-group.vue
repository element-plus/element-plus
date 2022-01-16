<template>
  <ul v-show="visible" :class="`${selectGroupPrefixClass}__wrap`">
    <li :class="`${selectGroupPrefixClass}__title`">{{ label }}</li>
    <li>
      <ul :class="selectGroupPrefixClass">
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
import { usePrefixClass } from '@element-plus/hooks'
import { selectGroupKey, selectKey } from './token'

export default defineComponent({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const selectGroupPrefixClass = usePrefixClass('select-group')
    const visible = ref(true)
    const instance = getCurrentInstance()
    const children = ref([])

    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props),
      })
    )

    const select = inject(selectKey)

    onMounted(() => {
      children.value = flattedChildren(instance.subTree)
    })

    // get all instances of options
    const flattedChildren = (node) => {
      const children = []
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

    const { groupQueryChange } = toRaw(select)
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true)
    })

    return {
      selectGroupPrefixClass,
      visible,
    }
  },
})
</script>

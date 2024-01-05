<template>
  <ul v-show="visible" :class="ns.be('group', 'wrap')">
    <li :class="ns.be('group', 'title')">{{ label }}</li>
    <li>
      <ul :class="ns.b('group')">
        <slot />
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { selectGroupKey } from './token'

export default defineComponent({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',

  props: {
    /**
     * @description name of the group
     */
    label: String,
    /**
     * @description whether to disable all options in this group
     */
    disabled: Boolean,
  },
  setup(props) {
    const ns = useNamespace('select')
    const instance = getCurrentInstance()
    const children = ref([])

    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props),
      })
    )

    const visible = computed(() =>
      children.value.some((option) => option.visible === true)
    )

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

    return {
      visible,
      ns,
    }
  },
})
</script>

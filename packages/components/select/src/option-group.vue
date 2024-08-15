<template>
  <ul v-show="visible" ref="groupRef" :class="ns.be('group', 'wrap')">
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
import { useMutationObserver } from '@vueuse/core'
import { ensureArray } from '@element-plus/utils'
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
    const groupRef = ref(null)
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

    const isOption = (node) =>
      node.type?.name === 'ElOption' && !!node.component?.proxy

    // get all instances of options
    const flattedChildren = (node) => {
      const Nodes = ensureArray(node)
      const children = []

      Nodes.forEach((child) => {
        if (isOption(child)) {
          children.push(child.component.proxy)
        } else if (child.children?.length) {
          children.push(...flattedChildren(child.children))
        } else if (child.component?.subTree) {
          children.push(...flattedChildren(child.component.subTree))
        }
      })

      return children
    }

    const updateChildren = () => {
      children.value = flattedChildren(instance.subTree)
    }

    onMounted(() => {
      updateChildren()
    })

    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true,
    })

    return {
      groupRef,
      visible,
      ns,
    }
  },
})
</script>

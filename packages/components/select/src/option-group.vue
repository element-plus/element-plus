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
import {
  computed,
  defineComponent,
  getCurrentInstance,
  isVNode,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
} from 'vue'
import { useMutationObserver } from '@vueuse/core'
import { ensureArray, isArray } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { selectGroupKey } from './token'

import type { Component, VNode, VNodeArrayChildren } from 'vue'
import type { OptionInternalInstance, OptionPublicInstance } from './type'

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
    const groupRef = ref<HTMLElement>()
    const instance = getCurrentInstance()!
    const children = ref<OptionPublicInstance[]>([])

    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props),
      })
    )

    const visible = computed(() =>
      children.value.some((option) => option.visible === true)
    )

    const isOption = (
      node: VNode
    ): node is VNode & { component: OptionInternalInstance } =>
      (node.type as Component).name === 'ElOption' && !!node.component?.proxy

    // get all instances of options
    const flattedChildren = (node: VNode | VNodeArrayChildren) => {
      const nodes = ensureArray(node) as VNode[] | VNodeArrayChildren
      const children: OptionPublicInstance[] = []

      nodes.forEach((child) => {
        if (!isVNode(child)) return

        if (isOption(child)) {
          children.push(child.component.proxy)
        } else if (isArray(child.children) && child.children.length) {
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

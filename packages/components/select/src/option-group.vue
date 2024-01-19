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
import { isArray } from '@vue/shared'
import { useMutationObserver } from '@vueuse/core'
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

    // get all instances of options
    const flattedChildren = (node) => {
      const children = []
      if (isArray(node.children)) {
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

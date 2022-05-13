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

<script lang="ts" setup>
import {
  getCurrentInstance,
  inject,
  onMounted,
  provide,
  reactive,
  ref,
  toRaw,
  toRefs,
  watch,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { selectGroupKey, selectKey } from './token'

defineOptions({
  name: 'ElOptionGroup',
})

const props = defineProps({
  label: String,
  disabled: {
    type: Boolean,
    default: false,
  },
})

const ns = useNamespace('select')
const visible = ref(true)
const instance = getCurrentInstance()!
const children = ref<any[]>([])

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
  const children = [] as any[]
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

const { groupQueryChange } = toRaw(select)!
watch(groupQueryChange, () => {
  visible.value = children.value.some((option) => option.visible === true)
})
</script>

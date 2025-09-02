<template>
  <div
    v-if="
      base.dragPlaceholderInd.value === index &&
      index !== base.draggedInd.value &&
      index - 1 !== base.draggedInd.value
    "
    :class="ns.e('placeholder')"
  />
  <el-tag
    :closable="props.closable"
    :effect="base!.currentItem.value === name ? 'light' : 'plain'"
    :class="[
      ns.b(),
      {
        [ns.m('dragging')]: base!.draggedItemName.value === name,
        [ns.m('active')]: base!.currentItem.value === name,
      }
    ]"
    draggable="true"
    @close="handleClose"
    @click="handleClick"
    @dragstart="handleDragStart(name)"
    @dragover="handleDragOver($event)"
    @dragend="handleDrop"
    @drop="handleDrop"
  >
    {{ props.title }}
  </el-tag>
  <div
    v-if="
      base.dragPlaceholderInd.value === base.tagListRef.value.length &&
      index === base.tagListRef.value.length - 1 &&
      base.draggedInd.value !== index
    "
    :class="ns.e('placeholder')"
  />
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  reactive,
  ref,
  watch,
} from 'vue'
import { tagNavContextKey } from '@element-plus/components/tag-nav/src/constants'
import {
  tagNavItemEmits,
  tagNavItemProps,
} from '@element-plus/components/tag-nav/src/tag-nav-item'
import ElTag from '@element-plus/components/tag/src/tag.vue'
import { useNamespace } from '@element-plus/hooks'
import { throwError } from '@element-plus/utils'

import type { TagNavItemContext } from '@element-plus/components/tag-nav/src/constants'
import type { Router } from 'vue-router'

const COMPONENT_NAME = 'ElTagNavItem'

defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(tagNavItemProps)
const base = inject(tagNavContextKey)
if (!base)
  throwError(
    COMPONENT_NAME,
    'usage: <el-tag-nav><el-tag-nav-item /></el-tag-nav/>'
  )

const instance = getCurrentInstance()!

const router = instance.appContext.config.globalProperties.$router as Router
const ns = useNamespace('tag-nav-item')

const emit = defineEmits(tagNavItemEmits)

const name = ref<string>(props.name!)
const index = computed(() =>
  base.tagListRef.value.findIndex((item) => item.tagName === name.value)
)

const handleClose = () => {
  emit('tagRemove', name.value)
}

const handleClick = () => {
  emit('tagClick', name.value)
  const to = props.to
  if (to && base?.props.routing !== false) {
    router.push(to)
  }
}

const handleDragStart = (name: string) => {
  base.draggedItemName.value = name
  base.draggedInd.value = base.tagListRef.value.findIndex(
    (item) => item.tagName === name
  )
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  if (base.draggedInd.value === null) return
  const container = base.containerRef.value
  if (!container) return
  const containerRect = container.getBoundingClientRect()
  const x = e.clientX - containerRect.left + container.scrollLeft
  let newIndex = 0
  let accumulatedWidth = 0
  const tagItems = container.querySelectorAll(`.${ns.b()}`)
  tagItems.forEach((item: Element, index: number) => {
    const tagRect = item.getBoundingClientRect()
    const tagWidthGap = tagRect.width + (base.props.gap || 6)
    if (x > accumulatedWidth + tagWidthGap / 2) newIndex = index + 1
    accumulatedWidth += tagWidthGap
  })
  base.dragPlaceholderInd.value = Math.max(
    0,
    Math.min(newIndex, tagItems.length)
  ) // ensure not below zero or ubound
}

const handleDrop = () => {
  if (base.draggedInd.value === null || base.dragPlaceholderInd.value === null)
    return
  const source = base.draggedInd.value
  let target = base.dragPlaceholderInd.value
  if (target > source) {
    target -= 1 // fix ubound
  }
  if (source === target) {
    base.draggedInd.value = null
    base.dragPlaceholderInd.value = null
    return
  }
  const newList = [...base.tagListRef.value]
  const [draggedItem] = newList.splice(source, 1)
  newList.splice(target, 0, draggedItem)
  base.tagListRef.value = newList
  base.draggedInd.value = null
  base.dragPlaceholderInd.value = null
}

watch(
  () => props,
  () => (name.value = props.name || '')
)

const tagItem = reactive<TagNavItemContext>({
  uid: instance.uid,
  getVnode: () => instance.vnode,
  tagName: name.value,
  props,
})

base.registerItem(tagItem)

onBeforeUnmount(() => {
  base.unregisterItem(tagItem)
})
</script>

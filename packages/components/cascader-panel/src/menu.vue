<template>
  <template v-if="virtualScroll">
    <div
      :key="menuId"
      :class="ns.b()"
      @mousemove="handleMouseMove"
      @mouseleave="clearHoverZone"
    >
      <el-fixed-size-list
        ref="virtualListRef"
        :height="height"
        :item-size="itemSize"
        :data="nodes"
        :total="nodes.length"
        inner-element="ul"
        :inner-props="{
          role: 'menu',
          class: [ns.e('list'), ns.is('empty', isEmpty)],
        }"
      >
        <template #default="{ data, index: nodeIndex, style }">
          <el-cascader-node
            :key="data[nodeIndex].uid"
            :node="data[nodeIndex]"
            :menu-id="menuId"
            :style="style"
            @expand="handleExpand"
          />
        </template>
      </el-fixed-size-list>
      <div v-if="isLoading" :class="ns.e('empty-text')">
        <ElIcon :size="14" :class="ns.is('loading')">
          <Loading />
        </ElIcon>
        {{ t('el.cascader.loading') }}
      </div>
      <div v-else-if="isEmpty" :class="ns.e('empty-text')">
        <slot name="empty">{{ t('el.cascader.noData') }}</slot>
      </div>
      <!-- eslint-disable vue/html-self-closing -->
      <svg
        v-else-if="panel?.isHoverMenu"
        ref="hoverZone"
        :class="ns.e('hover-zone')"
      ></svg>
      <!-- eslint-enable vue/html-self-closing -->
    </div>
  </template>

  <template v-else>
    <el-scrollbar
      :key="menuId"
      tag="ul"
      role="menu"
      :class="ns.b()"
      :wrap-class="ns.e('wrap')"
      :view-class="[ns.e('list'), ns.is('empty', isEmpty)]"
      @mousemove="handleMouseMove"
      @mouseleave="clearHoverZone"
    >
      <el-cascader-node
        v-for="node in nodes"
        :key="node.uid"
        :node="node"
        :menu-id="menuId"
        @expand="handleExpand"
      />
      <div v-if="isLoading" :class="ns.e('empty-text')">
        <ElIcon :size="14" :class="ns.is('loading')">
          <Loading />
        </ElIcon>
        {{ t('el.cascader.loading') }}
      </div>
      <div v-else-if="isEmpty" :class="ns.e('empty-text')">
        <slot name="empty">{{ t('el.cascader.noData') }}</slot>
      </div>
      <!-- eslint-disable vue/html-self-closing -->
      <svg
        v-else-if="panel?.isHoverMenu"
        ref="hoverZone"
        :class="ns.e('hover-zone')"
      ></svg>
      <!-- eslint-enable vue/html-self-closing -->
    </el-scrollbar>
  </template>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, inject, nextTick, ref } from 'vue'
import ElScrollbar from '@element-plus/components/scrollbar'
import { FixedSizeList as ElFixedSizeList } from '@element-plus/components/virtual-list'
import { useId, useLocale, useNamespace } from '@element-plus/hooks'
import { Loading } from '@element-plus/icons-vue'
import ElIcon from '@element-plus/components/icon'
import { focusNode } from '@element-plus/utils'
import ElCascaderNode from './node.vue'
import { CASCADER_PANEL_INJECTION_KEY } from './types'

import type { CascaderNode } from './types'
import type { PropType } from 'vue'
import type { FixedSizeListInstance } from '@element-plus/components/virtual-list'

defineOptions({
  name: 'ElCascaderMenu',
})

const props = defineProps({
  nodes: {
    type: Array as PropType<CascaderNode[]>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  virtualScroll: {
    type: Boolean,
    default: false,
  },
  itemSize: {
    type: Number,
    default: 34,
  },
  height: {
    type: Number,
    default: 204,
  },
})

const instance = getCurrentInstance()!
const ns = useNamespace('cascader-menu')

const { t } = useLocale()
const id = useId()
let activeNode: HTMLElement
let hoverTimer: number | undefined

const panel = inject(CASCADER_PANEL_INJECTION_KEY)!

const hoverZone = ref<SVGSVGElement>()
const virtualListRef = ref<FixedSizeListInstance>()

const isEmpty = computed(() => !props.nodes.length)
const isLoading = computed(() => !panel.initialLoaded)
const menuId = computed(() => `${id.value}-${props.index}`)

const getActiveNodeIndex = () => {
  const expandingNodeLevel = panel.expandingNode?.level ?? 0

  if (props.index < expandingNodeLevel) {
    // parent menu: use the node at this level from the expanding path
    const activeNodeId = panel.expandingNode?.pathNodes[props.index]?.uid
    return props.nodes.findIndex((node) => node.uid === activeNodeId)
  } else if (
    props.index === expandingNodeLevel &&
    panel.checkedNodes.length > 0
  ) {
    // leaf menu: use checkedNodes to find the active node at this level
    const checkedNode = panel.checkedNodes[0]
    const activeNodeId = checkedNode?.pathNodes[props.index]?.uid
    return props.nodes.findIndex((node) => node.uid === activeNodeId)
  }

  return -1
}

const getNodeIndexById = (nodeId: string | undefined) => {
  if (!nodeId) return -1
  return props.nodes.findIndex(
    (node) => `${menuId.value}-${node.uid}` === nodeId
  )
}

const scrollToItem = (index: number) => {
  const targetIndex = Math.max(0, Math.min(index, props.nodes.length - 1))
  virtualListRef.value?.scrollToItem(targetIndex)
}

const focusNodeAt = (index: number) => {
  if (!props.nodes.length) return
  const targetIndex = Math.max(0, Math.min(index, props.nodes.length - 1))
  scrollToItem(targetIndex)
  nextTick(() => {
    const node = (instance.vnode.el as HTMLElement).querySelector(
      `#${menuId.value}-${props.nodes[targetIndex].uid}`
    ) as HTMLElement | null
    if (node) focusNode(node)
  })
}

const handleExpand = (e: MouseEvent) => {
  activeNode = e.target as HTMLElement
}

const handleMouseMove = (e: MouseEvent) => {
  if (!panel.isHoverMenu || !activeNode || !hoverZone.value) return

  if (activeNode.contains(e.target as HTMLElement)) {
    clearHoverTimer()

    const el = instance.vnode.el as HTMLElement
    const { left } = el.getBoundingClientRect()
    const { offsetWidth, offsetHeight } = el
    const startX = e.clientX - left
    const top = activeNode.offsetTop
    const bottom = top + activeNode.offsetHeight

    const scrollTop = props.virtualScroll
      ? virtualListRef.value?.states?.scrollOffset || 0
      : el.querySelector(`.${ns.e('wrap')}`)?.scrollTop || 0

    hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} ${scrollTop} V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight + scrollTop} V${bottom} Z" />
        `
  } else if (!hoverTimer) {
    hoverTimer = window.setTimeout(clearHoverZone, panel.config.hoverThreshold)
  }
}

const clearHoverTimer = () => {
  if (!hoverTimer) return
  clearTimeout(hoverTimer)
  hoverTimer = undefined
}

const clearHoverZone = () => {
  if (!hoverZone.value) return
  hoverZone.value.innerHTML = ''
  clearHoverTimer()
}

defineExpose({
  getActiveNodeIndex,
  getNodeIndexById,
  scrollToItem,
  focusNodeAt,
  get $el() {
    return instance.vnode.el as HTMLElement
  },
})
</script>

<template>
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
    <li
      v-if="multiple"
      :class="[
        'el-cascader-node',
        (nodes.every((i) => i.checked)
          ? true
          : nodes.some((i) => i.indeterminate) ||
            nodes.some((i) => i.checked)) && 'in-active-path',
      ]"
    >
      <el-checkbox
        :model-value="nodes.every((i) => i.checked)"
        :indeterminate="
          nodes.every((i) => i.checked)
            ? false
            : nodes.some((i) => i.indeterminate) || nodes.some((i) => i.checked)
        "
        @click.stop
        @update:model-value="handleSelectCheck"
      />
      <span class="el-cascader-node__label">{{
        t('el.cascader.selectAll')
      }}</span>
    </li>
    <el-cascader-node
      v-for="node in nodes"
      :key="node.uid"
      :node="node"
      :menu-id="menuId"
      @expand="handleExpand"
    />
    <div v-if="isLoading" :class="ns.e('empty-text')">
      <el-icon size="14" :class="ns.is('loading')">
        <loading />
      </el-icon>
      {{ t('el.cascader.loading') }}
    </div>
    <div v-else-if="isEmpty" :class="ns.e('empty-text')">
      {{ t('el.cascader.noData') }}
    </div>
    <svg
      v-else-if="panel?.isHoverMenu"
      ref="hoverZone"
      :class="ns.e('hover-zone')"
    />
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, ref } from 'vue'
import ElScrollbar from '@element-plus/components/scrollbar'
import { useId, useLocale, useNamespace } from '@element-plus/hooks'
import { Loading } from '@element-plus/icons-vue'
import ElIcon from '@element-plus/components/icon'
import ElCheckbox from '@element-plus/components/checkbox'
import ElCascaderNode from './node.vue'
import { CASCADER_PANEL_INJECTION_KEY } from './types'

import type { default as CascaderNode } from './node'
import type { PropType } from 'vue'
import type { Nullable } from '@element-plus/utils'

export default defineComponent({
  name: 'ElCascaderMenu',

  components: {
    Loading,
    ElIcon,
    ElScrollbar,
    ElCheckbox,
    ElCascaderNode,
  },

  props: {
    nodes: {
      type: Array as PropType<CascaderNode[]>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const instance = getCurrentInstance()!
    const ns = useNamespace('cascader-menu')

    const { t } = useLocale()
    const id = useId()
    let activeNode: Nullable<HTMLElement> = null
    let hoverTimer: Nullable<number> = null

    const panel = inject(CASCADER_PANEL_INJECTION_KEY)!

    const hoverZone = ref<null | SVGSVGElement>(null)

    const multiple = computed(() => panel.config.multiple)
    const isEmpty = computed(() => !props.nodes.length)
    const isLoading = computed(() => !panel.initialLoaded)
    const menuId = computed(() => `${id.value}-${props.index}`)

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

        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `
      } else if (!hoverTimer) {
        hoverTimer = window.setTimeout(
          clearHoverZone,
          panel.config.hoverThreshold
        )
      }
    }

    const clearHoverTimer = () => {
      if (!hoverTimer) return
      clearTimeout(hoverTimer)
      hoverTimer = null
    }

    const clearHoverZone = () => {
      if (!hoverZone.value) return
      hoverZone.value.innerHTML = ''
      clearHoverTimer()
    }

    const handleSelectCheck = () => {
      if (props.nodes.every((i) => i.checked)) {
        panel.handleCheckChangeAll(false, props.index)
        return
      }
      panel.handleCheckChangeAll(true, props.index)
    }

    return {
      ns,
      panel,
      multiple,
      hoverZone,
      isEmpty,
      isLoading,
      menuId,
      t,
      handleExpand,
      handleMouseMove,
      clearHoverZone,
      handleSelectCheck,
    }
  },
})
</script>

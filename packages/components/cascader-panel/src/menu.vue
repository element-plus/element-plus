<template>
  <el-scrollbar
    :key="menuId"
    tag="ul"
    role="menu"
    class="el-cascader-menu"
    wrap-class="el-cascader-menu__wrap"
    :view-class="['el-cascader-menu__list', isEmpty && 'is-empty']"
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
    <div v-if="isLoading" class="el-cascader-menu__empty-text">
      <el-icon size="14" class="is-loading">
        <loading />
      </el-icon>
      {{ t('el.cascader.loading') }}
    </div>
    <div v-else-if="isEmpty" class="el-cascader-menu__empty-text">
      {{ t('el.cascader.noData') }}
    </div>
    <svg
      v-else-if="panel?.isHoverMenu"
      ref="hoverZone"
      class="el-cascader-menu__hover-zone"
    ></svg>
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, ref } from 'vue'
import ElScrollbar from '@element-plus/components/scrollbar'
import { useLocale } from '@element-plus/hooks'
import { generateId } from '@element-plus/utils-v2'
import { Loading } from '@element-plus/icons-vue'
import ElIcon from '@element-plus/components/icon'
import ElCascaderNode from './node.vue'
import { CASCADER_PANEL_INJECTION_KEY } from './types'

import type { default as CascaderNode } from './node'
import type { PropType } from 'vue'
import type { Nullable } from '@element-plus/utils-v2'

export default defineComponent({
  name: 'ElCascaderMenu',

  components: {
    Loading,
    ElIcon,
    ElScrollbar,
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
    const { t } = useLocale()
    const id = generateId()
    let activeNode: Nullable<HTMLElement> = null
    let hoverTimer: Nullable<number> = null

    const panel = inject(CASCADER_PANEL_INJECTION_KEY)!

    const hoverZone = ref<null | SVGSVGElement>(null)

    const isEmpty = computed(() => !props.nodes.length)
    const isLoading = computed(() => !panel.initialLoaded)
    const menuId = computed(() => `cascader-menu-${id}-${props.index}`)

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
    return {
      panel,
      hoverZone,
      isEmpty,
      isLoading,
      menuId,
      t,
      handleExpand,
      handleMouseMove,
      clearHoverZone,
    }
  },
})
</script>

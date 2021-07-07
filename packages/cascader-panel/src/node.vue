<template>
  <li
    :id="`${menuId}-${node.uid}`"
    role="menuitem"
    :aria-haspopup="!isLeaf"
    :aria-owns="isLeaf ? null : menuId"
    :aria-expanded="inExpandingPath"
    :tabindex="expandable ? -1 : null"
    :class="[
      'el-cascader-node',
      checkStrictly && 'is-selectable',
      inExpandingPath && 'in-active-path',
      inCheckedPath && 'in-checked-path',
      node.checked && 'is-active',
      !expandable && 'is-disabled'
    ]"
    @mouseenter="handleHoverExpand"
    @focus="handleHoverExpand"
    @click="handleClick"
  >
    <!-- prefix -->
    <el-checkbox
      v-if="multiple"
      :model-value="node.checked"
      :indeterminate="node.indeterminate"
      :disabled="isDisabled"
      @click.stop
      @update:model-value="handleCheck"
    />
    <el-radio
      v-else-if="checkStrictly"
      :model-value="checkedNodeId"
      :label="node.uid"
      :disabled="isDisabled"
      @update:model-value="handleCheck"
      @click.stop
    >
      <!--
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      -->
      <span></span>
    </el-radio>
    <i v-else-if="isLeaf && node.checked" class="el-icon-check el-cascader-node__prefix"></i>

    <!-- content -->
    <node-content />

    <!-- postfix -->
    <template v-if="!isLeaf">
      <i v-if="node.loading" class="el-icon-loading el-cascader-node__postfix"></i>
      <i v-else class="el-icon-arrow-right el-cascader-node__postfix"></i>
    </template>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject, h } from 'vue'
import ElCheckbox from '@element-plus/checkbox'
import ElRadio from '@element-plus/radio'
import {
  CascaderNode,
  CASCADER_PANEL_INJECTION_KEY,
} from './types'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElCascaderNode',

  components: {
    ElCheckbox,
    ElRadio,
    NodeContent: {
      render () {
        const { node, panel } = this.$parent
        const { data, label } = node
        const { renderLabelFn } = panel
        return h(
          'span',
          { class: 'el-cascader-node__label' },
          renderLabelFn ? renderLabelFn({ node, data }) : label,
        )
      },
    },
  },

  props: {
    node: {
      type: Object as PropType<CascaderNode>,
      required: true,
    },
    menuId: String,
  },

  emits: ['expand'],

  setup (props, { emit }) {
    const panel = inject(CASCADER_PANEL_INJECTION_KEY)

    const isHoverMenu = computed(() => panel.isHoverMenu)
    const multiple = computed(() => panel.config.multiple)
    const checkStrictly = computed(() => panel.config.checkStrictly)
    const checkedNodeId = computed(() => panel.checkedNodes[0]?.uid)
    const isDisabled = computed(() => props.node.isDisabled)
    const isLeaf = computed(() => props.node.isLeaf)
    const expandable = computed(() => checkStrictly.value && !isLeaf.value || !isDisabled.value)
    const inExpandingPath = computed(() => isInPath(panel.expandingNode))
    // only useful in check-strictly mode
    const inCheckedPath = computed(() => checkStrictly.value && panel.checkedNodes.some(isInPath))

    const isInPath = (node: CascaderNode) => {
      const { level, uid } = props.node
      return node?.pathNodes[level - 1]?.uid === uid
    }

    const doExpand = () => {
      if (inExpandingPath.value) return
      panel.expandNode(props.node)
    }

    const doCheck = (checked: boolean) => {
      const { node } = props
      if (checked === node.checked) return
      panel.handleCheckChange(node, checked)
    }

    const doLoad = () => {
      panel.lazyLoad(props.node, () => {
        if (!isLeaf.value) doExpand()
      })
    }

    const handleHoverExpand = (e: Event) => {
      if (!isHoverMenu.value) return
      handleExpand()
      !isLeaf.value && emit('expand', e)
    }

    const handleExpand = () => {
      const { node } = props
      // do not exclude leaf node because the menus expanded might have to reset
      if (!expandable.value || node.loading) return
      node.loaded ? doExpand() : doLoad()
    }

    const handleClick = () => {
      if (isHoverMenu.value && !isLeaf.value) return

      if (isLeaf.value && !isDisabled.value && !checkStrictly.value && !multiple.value) {
        handleCheck(true)
      } else {
        handleExpand()
      }
    }

    const handleCheck = (checked: boolean) => {
      if (!props.node.loaded) {
        doLoad()
      } else {
        doCheck(checked)
        !checkStrictly.value && doExpand()
      }
    }

    return {
      panel,
      isHoverMenu,
      multiple,
      checkStrictly,
      checkedNodeId,
      isDisabled,
      isLeaf,
      expandable,
      inExpandingPath,
      inCheckedPath,
      handleHoverExpand,
      handleExpand,
      handleClick,
      handleCheck,
    }
  },
})
</script>

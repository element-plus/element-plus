<template>
  <li
    :id="`${menuId}-${node.uid}`"
    role="menuitem"
    :aria-haspopup="!isLeaf"
    :aria-owns="isLeaf ? undefined : menuId"
    :aria-expanded="inExpandingPath"
    :tabindex="expandable ? -1 : undefined"
    :class="[
      ns.b(),
      ns.is('selectable', checkStrictly),
      ns.is('active', node.checked),
      ns.is('disabled', !expandable),
      inExpandingPath && 'in-active-path',
      inCheckedPath && 'in-checked-path',
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
      @update:model-value="handleSelectCheck"
    />
    <el-radio
      v-else-if="checkStrictly"
      :model-value="checkedNodeId"
      :label="node.uid"
      :disabled="isDisabled"
      @update:model-value="handleSelectCheck"
      @click.stop
    >
      <!--
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      -->
      <span />
    </el-radio>
    <el-icon v-else-if="isLeaf && node.checked" :class="ns.e('prefix')">
      <check />
    </el-icon>

    <!-- content -->
    <node-content />

    <!-- postfix -->
    <template v-if="!isLeaf">
      <el-icon v-if="node.loading" :class="[ns.is('loading'), ns.e('postfix')]">
        <loading />
      </el-icon>
      <el-icon v-else :class="['arrow-right', ns.e('postfix')]">
        <arrow-right />
      </el-icon>
    </template>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import ElCheckbox from '@element-plus/components/checkbox'
import ElRadio from '@element-plus/components/radio'
import ElIcon from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { ArrowRight, Check, Loading } from '@element-plus/icons-vue'
import NodeContent from './node-content'
import { CASCADER_PANEL_INJECTION_KEY } from './types'
import type { default as CascaderNode } from './node'
import type { PropType } from 'vue'
import type { CheckboxValueType } from '@element-plus/components/checkbox'

export default defineComponent({
  name: 'ElCascaderNode',

  components: {
    ElCheckbox,
    ElRadio,
    NodeContent,
    ElIcon,
    Check,
    Loading,
    ArrowRight,
  },

  props: {
    node: {
      type: Object as PropType<CascaderNode>,
      required: true,
    },
    menuId: String,
  },

  emits: ['expand'],

  setup(props, { emit }) {
    const panel = inject(CASCADER_PANEL_INJECTION_KEY)!

    const ns = useNamespace('cascader-node')
    const isHoverMenu = computed(() => panel.isHoverMenu)
    const multiple = computed(() => panel.config.multiple)
    const checkStrictly = computed(() => panel.config.checkStrictly)
    const checkedNodeId = computed(() => panel.checkedNodes[0]?.uid)
    const isDisabled = computed(() => props.node.isDisabled)
    const isLeaf = computed(() => props.node.isLeaf)
    const expandable = computed(
      () => (checkStrictly.value && !isLeaf.value) || !isDisabled.value
    )
    const inExpandingPath = computed(() => isInPath(panel.expandingNode!))
    // only useful in check-strictly mode
    const inCheckedPath = computed(
      () => checkStrictly.value && panel.checkedNodes.some(isInPath)
    )

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

      if (
        isLeaf.value &&
        !isDisabled.value &&
        !checkStrictly.value &&
        !multiple.value
      ) {
        handleCheck(true)
      } else {
        handleExpand()
      }
    }

    const handleSelectCheck = (checked: CheckboxValueType | undefined) => {
      if (checkStrictly.value) {
        doCheck(checked as boolean)
        if (props.node.loaded) {
          doExpand()
        }
      } else {
        handleCheck(checked as boolean)
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
      ns,
      handleHoverExpand,
      handleExpand,
      handleClick,
      handleCheck,
      handleSelectCheck,
    }
  },
})
</script>

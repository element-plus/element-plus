<template>
  <div
    :class="['el-cascader-panel', border && 'is-bordered']"
    @keydown="handleKeyDown"
  >
    <el-cascader-menu
      v-for="(menu, index) in menus"
      :key="index"
      :ref="(item) => (menuList[index] = item)"
      :index="index"
      :nodes="menu"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUpdate,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue'
import isEqual from 'lodash/isEqual'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import isServer from '@element-plus/utils/isServer'
import scrollIntoView from '@element-plus/utils/scroll-into-view'
import {
  arrayFlat,
  coerceTruthyValueToArray,
  deduplicate,
  isEmpty,
} from '@element-plus/utils/util'

import ElCascaderMenu from './menu.vue'
import Store from './store'
import Node, { ExpandTrigger } from './node'
import { CommonProps, useCascaderConfig } from './config'
import {
  checkNode,
  focusNode,
  getMenuIndex,
  getSibling,
  sortByOriginalOrder,
} from './utils'
import { CASCADER_PANEL_INJECTION_KEY } from './types'

import type { PropType, Ref } from 'vue'
import type { Nullable } from '@element-plus/utils/types'
import type {
  CascaderValue,
  CascaderNodeValue,
  CascaderOption,
  RenderLabel,
  default as CascaderNode,
} from './node'

import type { ElCascaderPanelContext } from './types'

export default defineComponent({
  name: 'ElCascaderPanel',

  components: {
    ElCascaderMenu,
  },

  props: {
    ...CommonProps,
    border: {
      type: Boolean,
      default: true,
    },
    renderLabel: Function as PropType<RenderLabel>,
  },

  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'close', 'expand-change'],

  setup(props, { emit, slots }) {
    let initialLoaded = true
    // for interrupt sync check status in lazy mode
    let manualChecked = false

    const config = useCascaderConfig(props)

    const store: Ref<Store> = ref(null)
    const menuList = ref([])
    const checkedValue: Ref<Nullable<CascaderValue>> = ref(null)
    const menus: Ref<CascaderNode[][]> = ref([])
    const expandingNode: Ref<Nullable<CascaderNode>> = ref(null)
    const checkedNodes: Ref<CascaderNode[]> = ref([])

    const isHoverMenu = computed(
      () => config.value.expandTrigger === ExpandTrigger.HOVER
    )
    const renderLabelFn = computed(() => props.renderLabel || slots.default)

    let oldConfig: typeof config
    let oldOptions: CascaderOption[]
    const initStore = () => {
      const { options } = props
      const cfg = config.value

      const configTemp = config
      if (
        oldOptions === undefined ||
        oldOptions !== options ||
        oldConfig === undefined ||
        configTemp !== oldConfig
      ) {
        manualChecked = false
        store.value = new Store(options, cfg)
        menus.value = [store.value.getNodes()]

        if (cfg.lazy && isEmpty(props.options)) {
          initialLoaded = false
          lazyLoad(null, () => {
            initialLoaded = true
            syncCheckedValue(false, true)
          })
        } else {
          syncCheckedValue(false, true)
        }
      }

      oldConfig = configTemp
      oldOptions = options
    }

    const lazyLoad: ElCascaderPanelContext['lazyLoad'] = (node, cb) => {
      const cfg = config.value
      node = node || new Node({}, cfg, null, true)
      node.loading = true

      const resolve = (dataList: CascaderOption[]) => {
        const parent = node.root ? null : node
        dataList && store.value.appendNodes(dataList, parent)
        node.loading = false
        node.loaded = true
        node.childrenData = node.childrenData || []
        cb && cb(dataList)
      }

      cfg.lazyLoad(node, resolve)
    }

    const expandNode: ElCascaderPanelContext['expandNode'] = (node, silent) => {
      const { level } = node
      const newMenus = menus.value.slice(0, level)
      let newExpandingNode: Nullable<CascaderNode>

      if (node.isLeaf) {
        newExpandingNode = node.pathNodes[level - 2]
      } else {
        newExpandingNode = node
        newMenus.push(node.children)
      }

      if (expandingNode.value?.uid !== newExpandingNode?.uid) {
        expandingNode.value = node
        menus.value = newMenus
        !silent && emit('expand-change', node?.pathValues || [])
      }
    }

    const handleCheckChange: ElCascaderPanelContext['handleCheckChange'] = (
      node,
      checked,
      emitClose = true
    ) => {
      const { checkStrictly, multiple } = config.value
      const oldNode = checkedNodes.value[0]
      manualChecked = true

      !multiple && oldNode?.doCheck(false)
      node.doCheck(checked)
      calculateCheckedValue()
      emitClose && !multiple && !checkStrictly && emit('close')
    }

    const getFlattedNodes = (leafOnly: boolean) => {
      return store.value.getFlattedNodes(leafOnly)
    }

    const getCheckedNodes = (leafOnly: boolean) => {
      return getFlattedNodes(leafOnly).filter((node) => node.checked !== false)
    }

    const clearCheckedNodes = () => {
      checkedNodes.value.forEach((node) => node.doCheck(false))
      calculateCheckedValue()
    }

    const calculateCheckedValue = () => {
      const { checkStrictly, multiple } = config.value
      const oldNodes = checkedNodes.value
      const newNodes = getCheckedNodes(!checkStrictly)
      // ensure the original order
      const nodes = sortByOriginalOrder(oldNodes, newNodes)
      const values = nodes.map((node) => node.valueByOption)
      checkedNodes.value = nodes
      checkedValue.value = multiple ? values : values[0] ?? null
    }

    const syncCheckedValue = (loaded = false, forced = false) => {
      const { modelValue } = props
      const { lazy, multiple, checkStrictly } = config.value
      const leafOnly = !checkStrictly

      if (
        !initialLoaded ||
        manualChecked ||
        (!forced && isEqual(modelValue, checkedValue.value))
      )
        return

      if (lazy && !loaded) {
        const values: CascaderNodeValue[] = deduplicate(
          arrayFlat(coerceTruthyValueToArray(modelValue))
        )
        const nodes = values
          .map((val) => store.value.getNodeByValue(val))
          .filter((node) => !!node && !node.loaded && !node.loading)

        if (nodes.length) {
          nodes.forEach((node) => {
            lazyLoad(node, () => syncCheckedValue(false, forced))
          })
        } else {
          syncCheckedValue(true, forced)
        }
      } else {
        const values = multiple
          ? coerceTruthyValueToArray(modelValue)
          : [modelValue]
        const nodes = deduplicate(
          values.map((val) => store.value.getNodeByValue(val, leafOnly))
        )
        syncMenuState(nodes, false)
        checkedValue.value = modelValue
      }
    }

    const syncMenuState = (
      newCheckedNodes: CascaderNode[],
      reserveExpandingState = true
    ) => {
      const { checkStrictly } = config.value
      const oldNodes = checkedNodes.value
      const newNodes = newCheckedNodes.filter(
        (node) => !!node && (checkStrictly || node.isLeaf)
      )
      const oldExpandingNode = store.value.getSameNode(expandingNode.value)
      const newExpandingNode =
        (reserveExpandingState && oldExpandingNode) || newNodes[0]

      if (newExpandingNode) {
        newExpandingNode.pathNodes.forEach((node) => expandNode(node, true))
      } else {
        expandingNode.value = null
      }

      oldNodes.forEach((node) => node.doCheck(false))
      newNodes.forEach((node) => node.doCheck(true))

      checkedNodes.value = newNodes
      nextTick(scrollToExpandingNode)
    }

    const scrollToExpandingNode = () => {
      if (isServer) return

      menuList.value.forEach((menu) => {
        const menuElement = menu?.$el
        if (menuElement) {
          const container = menuElement.querySelector('.el-scrollbar__wrap')
          const activeNode =
            menuElement.querySelector('.el-cascader-node.is-active') ||
            menuElement.querySelector('.el-cascader-node.in-active-path')
          scrollIntoView(container, activeNode)
        }
      })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const { code } = e

      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1
          focusNode(getSibling(target, distance))
          break
        }
        case EVENT_CODE.left: {
          const preMenu = menuList.value[getMenuIndex(target) - 1]
          const expandedNode = preMenu?.$el.querySelector(
            '.el-cascader-node[aria-expanded="true"]'
          )
          focusNode(expandedNode)
          break
        }
        case EVENT_CODE.right: {
          const nextMenu = menuList.value[getMenuIndex(target) + 1]
          const firstNode = nextMenu?.$el.querySelector(
            '.el-cascader-node[tabindex="-1"]'
          )
          focusNode(firstNode)
          break
        }
        case EVENT_CODE.enter:
          checkNode(target)
          break
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          emit('close')
          break
      }
    }

    provide(
      CASCADER_PANEL_INJECTION_KEY,
      reactive({
        config,
        expandingNode,
        checkedNodes,
        isHoverMenu,
        renderLabelFn,
        lazyLoad,
        expandNode,
        handleCheckChange,
      })
    )

    watch([config, () => props.options], () => initStore(), {
      deep: true,
      immediate: true,
    })

    watch(
      () => props.modelValue,
      () => {
        manualChecked = false
        syncCheckedValue()
      }
    )

    watch(checkedValue, (val) => {
      if (!isEqual(val, props.modelValue)) {
        emit(UPDATE_MODEL_EVENT, val)
        emit(CHANGE_EVENT, val)
      }
    })

    onBeforeUpdate(() => (menuList.value = []))

    onMounted(() => !isEmpty(props.modelValue) && syncCheckedValue())

    return {
      menuList,
      menus,
      checkedNodes,
      handleKeyDown,
      handleCheckChange,
      getFlattedNodes,
      getCheckedNodes,
      clearCheckedNodes,
      calculateCheckedValue,
      scrollToExpandingNode,
    }
  },
})
</script>

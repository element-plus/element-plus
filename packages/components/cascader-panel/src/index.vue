<template>
  <div
    :class="[ns.b('panel'), ns.is('bordered', border)]"
    @keydown="handleKeyDown"
  >
    <el-cascader-menu
      v-for="(menu, index) in menus"
      :key="index"
      :ref="(item) => (menuList[index] = item)"
      :index="index"
      :nodes="[...menu]"
    >
      <template #empty>
        <slot name="empty" />
      </template>
    </el-cascader-menu>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
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
import { cloneDeep, flattenDeep, isEqual } from 'lodash-unified'
import {
  castArray,
  focusNode,
  getSibling,
  isClient,
  isEmpty,
  scrollIntoView,
  unique,
} from '@element-plus/utils'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'

import ElCascaderMenu from './menu.vue'
import Store from './store'
import Node from './node'
import { CommonProps, useCascaderConfig } from './config'
import { checkNode, getMenuIndex, sortByOriginalOrder } from './utils'
import { CASCADER_PANEL_INJECTION_KEY } from './types'

import type { PropType } from 'vue'
import type { Nullable } from '@element-plus/utils'
import type {
  default as CascaderNode,
  CascaderNodeValue,
  CascaderOption,
  CascaderValue,
  RenderLabel,
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
    // for interrupt sync check status in lazy mode
    let manualChecked = false

    const ns = useNamespace('cascader')
    const config = useCascaderConfig(props)

    let store: Nullable<Store> = null
    const initialLoaded = ref(true)
    const menuList = ref<any[]>([])
    const checkedValue = ref<Nullable<CascaderValue>>(null)
    const menus = ref<CascaderNode[][]>([])
    const expandingNode = ref<Nullable<CascaderNode>>(null)
    const checkedNodes = ref<CascaderNode[]>([])

    const isHoverMenu = computed(() => config.value.expandTrigger === 'hover')
    const renderLabelFn = computed(() => props.renderLabel || slots.default)

    const initStore = () => {
      const { options } = props
      const cfg = config.value

      manualChecked = false
      store = new Store(options, cfg)
      menus.value = [store.getNodes()]

      if (cfg.lazy && isEmpty(props.options)) {
        initialLoaded.value = false
        lazyLoad(undefined, (list) => {
          if (list) {
            store = new Store(list, cfg)
            menus.value = [store.getNodes()]
          }
          initialLoaded.value = true
          syncCheckedValue(false, true)
        })
      } else {
        syncCheckedValue(false, true)
      }
    }

    const lazyLoad: ElCascaderPanelContext['lazyLoad'] = (node, cb) => {
      const cfg = config.value
      node! = node || new Node({}, cfg, undefined, true)
      node.loading = true

      const resolve = (dataList: CascaderOption[]) => {
        const _node = node as Node
        const parent = _node.root ? null : _node
        dataList && store?.appendNodes(dataList, parent as any)
        _node.loading = false
        _node.loaded = true
        _node.childrenData = _node.childrenData || []
        cb && cb(dataList)
      }

      cfg.lazyLoad(node, resolve as any)
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
      !emitClose && !multiple && !checkStrictly && expandParentNode(node)
    }

    const expandParentNode = (node) => {
      if (!node) return
      node = node.parent
      expandParentNode(node)
      node && expandNode(node)
    }

    const getFlattedNodes = (leafOnly: boolean) => {
      return store?.getFlattedNodes(leafOnly)
    }

    const getCheckedNodes = (leafOnly: boolean) => {
      return getFlattedNodes(leafOnly)?.filter((node) => node.checked !== false)
    }

    const clearCheckedNodes = () => {
      checkedNodes.value.forEach((node) => node.doCheck(false))
      calculateCheckedValue()
      menus.value = menus.value.slice(0, 1)
      expandingNode.value = null
      emit('expand-change', [])
    }

    const calculateCheckedValue = () => {
      const { checkStrictly, multiple } = config.value
      const oldNodes = checkedNodes.value
      const newNodes = getCheckedNodes(!checkStrictly)!
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
        !initialLoaded.value ||
        manualChecked ||
        (!forced && isEqual(modelValue, checkedValue.value))
      )
        return

      if (lazy && !loaded) {
        const values: CascaderNodeValue[] = unique(
          flattenDeep(castArray(modelValue))
        )
        const nodes = values
          .map((val) => store?.getNodeByValue(val))
          .filter((node) => !!node && !node.loaded && !node.loading) as Node[]

        if (nodes.length) {
          nodes.forEach((node) => {
            lazyLoad(node, () => syncCheckedValue(false, forced))
          })
        } else {
          syncCheckedValue(true, forced)
        }
      } else {
        const values = multiple ? castArray(modelValue) : [modelValue]
        const nodes = unique(
          values.map((val) => store?.getNodeByValue(val, leafOnly))
        ) as Node[]
        syncMenuState(nodes, forced)
        checkedValue.value = cloneDeep(modelValue)
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
      const oldExpandingNode = store?.getSameNode(expandingNode.value!)
      const newExpandingNode =
        (reserveExpandingState && oldExpandingNode) || newNodes[0]

      if (newExpandingNode) {
        newExpandingNode.pathNodes.forEach((node) => expandNode(node, true))
      } else {
        expandingNode.value = null
      }

      oldNodes.forEach((node) => node.doCheck(false))
      reactive(newNodes).forEach((node) => node.doCheck(true))
      checkedNodes.value = newNodes
      nextTick(scrollToExpandingNode)
    }

    const scrollToExpandingNode = () => {
      if (!isClient) return

      menuList.value.forEach((menu) => {
        const menuElement = menu?.$el
        if (menuElement) {
          const container = menuElement.querySelector(
            `.${ns.namespace.value}-scrollbar__wrap`
          )
          const activeNode =
            menuElement.querySelector(`.${ns.b('node')}.${ns.is('active')}`) ||
            menuElement.querySelector(`.${ns.b('node')}.in-active-path`)
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
          e.preventDefault()
          const distance = code === EVENT_CODE.up ? -1 : 1
          focusNode(
            getSibling(target, distance, `.${ns.b('node')}[tabindex="-1"]`)
          )
          break
        }
        case EVENT_CODE.left: {
          e.preventDefault()
          const preMenu = menuList.value[getMenuIndex(target) - 1]
          const expandedNode = preMenu?.$el.querySelector(
            `.${ns.b('node')}[aria-expanded="true"]`
          )
          focusNode(expandedNode)
          break
        }
        case EVENT_CODE.right: {
          e.preventDefault()
          const nextMenu = menuList.value[getMenuIndex(target) + 1]
          const firstNode = nextMenu?.$el.querySelector(
            `.${ns.b('node')}[tabindex="-1"]`
          )
          focusNode(firstNode)
          break
        }
        case EVENT_CODE.enter:
        case EVENT_CODE.numpadEnter:
          checkNode(target)
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
        initialLoaded,
        renderLabelFn,
        lazyLoad,
        expandNode,
        handleCheckChange,
      })
    )

    watch([config, () => props.options], initStore, {
      deep: true,
      immediate: true,
    })

    watch(
      () => props.modelValue,
      () => {
        manualChecked = false
        syncCheckedValue()
      },
      {
        deep: true,
      }
    )

    watch(
      () => checkedValue.value,
      (val) => {
        if (!isEqual(val, props.modelValue)) {
          emit(UPDATE_MODEL_EVENT, val)
          emit(CHANGE_EVENT, val)
        }
      }
    )

    onBeforeUpdate(() => (menuList.value = []))

    onMounted(() => !isEmpty(props.modelValue) && syncCheckedValue())

    return {
      ns,
      menuList,
      menus,
      checkedNodes,
      handleKeyDown,
      handleCheckChange,
      getFlattedNodes,
      /**
       * @description get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is `false`
       */
      getCheckedNodes,
      /**
       * @description clear checked nodes
       */
      clearCheckedNodes,
      calculateCheckedValue,
      scrollToExpandingNode,
    }
  },
})
</script>

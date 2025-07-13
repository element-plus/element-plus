<template>
  <li
    :class="[
      nsMenuItem.b(),
      nsMenuItem.is('active', active),
      nsMenuItem.is('disabled', disabled),
    ]"
    role="menuitem"
    tabindex="-1"
    @click="handleClick"
  >
    <el-tooltip
      v-if="hasTooltip && tooltipVisible"
      ref="tooltipRef"
      :effect="rootMenu.props.popperEffect"
      placement="right"
      :fallback-placements="['left']"
      :persistent="rootMenu.props.persistent"
      :virtual-triggering="true"
      :virtual-ref="menuItemRef"
      @hide="handleTooltipHide"
    >
      <template #content>
        <slot name="title" />
      </template>
    </el-tooltip>
    <div
      ref="menuItemRef"
      :class="{ [`${nsMenu.be('tooltip', 'trigger')}`]: hasTooltip }"
      @mouseenter="handleMouseenter"
    >
      <slot />
    </div>
    <slot v-if="!hasTooltip" name="title" />
  </li>
</template>

<script lang="ts" setup>
// @ts-nocheck
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRef,
  useSlots,
} from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { debugWarn, isPropAbsent, throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import useMenu from './use-menu'
import { menuItemEmits, menuItemProps } from './menu-item'
import { MENU_INJECTION_KEY, SUB_MENU_INJECTION_KEY } from './tokens'

import type { MenuItemRegistered, MenuProvider, SubMenuProvider } from './types'
import type { TooltipInstance } from '@element-plus/components/tooltip'

const COMPONENT_NAME = 'ElMenuItem'
defineOptions({
  name: COMPONENT_NAME,
})
const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)

isPropAbsent(props.index) &&
  debugWarn(COMPONENT_NAME, 'Missing required prop: "index"')

const instance = getCurrentInstance()!
const rootMenu = inject<MenuProvider>(MENU_INJECTION_KEY)
const nsMenu = useNamespace('menu')
const nsMenuItem = useNamespace('menu-item')
if (!rootMenu) throwError(COMPONENT_NAME, 'can not inject root menu')

const { parentMenu, indexPath } = useMenu(instance, toRef(props, 'index'))

const subMenu = inject<SubMenuProvider>(
  `${SUB_MENU_INJECTION_KEY}${parentMenu.value.uid}`
)
if (!subMenu) throwError(COMPONENT_NAME, 'can not inject sub menu')

const slots = useSlots()
const hasTooltip = computed(() => {
  return (
    parentMenu.value.type?.name === 'ElMenu' &&
    rootMenu.props.collapse &&
    slots.title
  )
})

const menuItemRef = ref<HTMLDivElement>()

const active = computed(() => props.index === rootMenu.activeIndex)
const item: MenuItemRegistered = reactive({
  index: props.index,
  indexPath,
  active,
})

const handleClick = () => {
  if (!props.disabled) {
    rootMenu.handleMenuItemClick({
      index: props.index,
      indexPath: indexPath.value,
      route: props.route,
    })
    emit('click', item)
  }
}

const tooltipVisible = ref(false)
const tooltipRef = ref<TooltipInstance>()
const handleMouseenter = async () => {
  tooltipVisible.value = true
  await nextTick()
  tooltipRef.value?.onOpen()
}

const handleTooltipHide = () => {
  tooltipVisible.value = false
}

onMounted(() => {
  subMenu.addSubMenu(item)
  rootMenu.addMenuItem(item)
})

onBeforeUnmount(() => {
  subMenu.removeSubMenu(item)
  rootMenu.removeMenuItem(item)
})

defineExpose({
  parentMenu,
  rootMenu,
  active,
  nsMenu,
  nsMenuItem,
  handleClick,
})
</script>

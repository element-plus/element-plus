<template>
  <div
    :class="selectIconClass"
    :style="{ 'background-color': props.backgroundColor }"
  >
    <slot name="search" />
    <el-scrollbar v-bind="{ ...props.scrollbar }">
      <div :class="ns.b() + '__default_content'">
        <el-button
          v-for="iconItem in  getPageDataByArrar(props.pagination!.currentPage!, props.pagination!.pageSize!, filterIcons) "
          :key="iconItem.name"
          :color="
            selectValus.includes(iconItem.name)
              ? props.selectedColor
              : props.iconBackgroundColor
          "
          :size="props.iconBackgroundSize"
          @click="selectBtnClick(iconItem)"
        >
          <el-tooltip effect="dark" :content="iconItem.name" placement="top">
            <slot v-if="hasIconSlot" name="icon" :icon-item="iconItem" />
            <component :is="getIcon(iconItem)" v-else />
          </el-tooltip>
        </el-button>
      </div>
    </el-scrollbar>
    <el-pagination
      v-if="!props.hiddenPagination"
      v-bind="{ ...props.pagination }"
      v-model:current-page="props.pagination!.currentPage"
      v-model:page-size="props.pagination!.pageSize"
      :total="filterIcons.length"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, h, useSlots } from 'vue'
import { ElPagination } from '@element-plus/components/pagination'
import { ElIcon } from '@element-plus/components/icon'
import { ElButton } from '@element-plus/components/button'
import { ElScrollbar } from '@element-plus/components/scrollbar'
import { ElTooltip } from '@element-plus/components/tooltip'
import { useNamespace } from '@element-plus/hooks'
import { isString } from '@element-plus/utils'

import * as eleIcons from '@element-plus/icons-vue'
import { selectIconEmits, selectIconProps } from './select-icon'
import type { selectIconPropsIcons } from './types'

defineOptions({
  name: 'ElSelectIcon',
})

const props = defineProps(selectIconProps)
const emit = defineEmits(selectIconEmits)
const slots = useSlots()
const ns = useNamespace('select-icon')
const defaultIcon = computed(() => {
  if (props.useDefaultIcon) {
    const defaultIcon: selectIconPropsIcons[] = []
    for (const eleIconsKey in eleIcons) {
      defaultIcon.push({
        name: `el:${eleIconsKey}`,
        val: '',
        render: (eleIcons as any)[eleIconsKey].render,
      })
    }
    return defaultIcon
  }
  return []
})
const selectValus = computed(() => {
  if (props.multiple) {
    return props.modelValue ?? []
  } else if (isString(props.modelValue)) {
    return [props.modelValue]
  }
  return []
})
const selectIconClass = computed(() => {
  const classList = [ns.b()]
  return classList
})
const hasIconSlot = computed(() => {
  return !!slots.icon
})
const filterIcons = computed((): selectIconPropsIcons[] => {
  if (!props.filter) {
    return [...defaultIcon.value, ...props.icons]
  }
  return (
    [...defaultIcon.value, ...props.icons].filter((item) => {
      return item.name.includes(props.filter)
    }) ?? []
  )
})
const getIcon = (item: selectIconPropsIcons) => {
  if (!item.render) {
    return h(ElIcon, {
      size: props.iconSize,
      color: props.iconColor,
      innerHTML: item.val,
    })
  }
  return h(
    ElIcon,
    { size: props.iconSize, color: props.iconColor },
    { default: () => h(item.render) }
  )
}
const selectBtnClick = (item: selectIconPropsIcons) => {
  if (props.multiple) {
    if (selectValus.value.includes(item.name)) {
      emit(
        'update:modelValue',
        [...selectValus.value].filter((val) => val !== item.name)
      )
    } else {
      emit('update:modelValue', [...selectValus.value, item.name])
    }
  } else {
    emit(
      'update:modelValue',
      selectValus.value.includes(item.name) ? null : item.name
    )
  }
}
const getPageDataByArrar = (
  currentPage: number,
  pageSize: number,
  dataSource: selectIconPropsIcons[]
) => {
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  return dataSource.slice(startIndex, endIndex)
}
</script>

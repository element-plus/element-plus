<template>
  <div :class="rootKls">
    <div
      :id="scopedHeadId"
      :class="headKls"
      :aria-expanded="isActive"
      :aria-controls="scopedContentId"
      :aria-describedby="scopedContentId"
      :aria-disabled="!headerTrigger"
      role="button"
      v-bind="headerProps"
    >
      <span :class="itemTitleKls" v-bind="titleProps">
        <slot name="title" :is-active="isActive">{{ title }}</slot>
      </span>
      <div :class="warpArrowKls" v-bind="iconProps">
        <slot name="icon" :is-active="isActive">
          <el-icon :class="arrowKls">
            <component :is="icon" />
          </el-icon>
        </slot>
      </div>
    </div>

    <el-collapse-transition>
      <div
        v-show="isActive"
        :id="scopedContentId"
        role="region"
        :class="itemWrapperKls"
        :aria-hidden="!isActive"
        :aria-labelledby="scopedHeadId"
      >
        <div :class="itemContentKls">
          <slot />
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import { debugWarn } from '@element-plus/utils'
import ElCollapseTransition from '@element-plus/components/collapse-transition'
import ElIcon from '@element-plus/components/icon'
import { collapseItemProps } from './collapse-item'
import { useCollapseItem, useCollapseItemDOM } from './use-collapse-item'

const COMPONENT_NAME = 'ElCollapseItem'
defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(collapseItemProps)

props.disabled &&
  debugWarn(
    COMPONENT_NAME,
    'disabled prop is deprecated and will be removed in the next major version. Use collapsible="disabled" instead.'
  )

const {
  id,
  isActive,
  disabled,
  headerTrigger,
  iconTrigger,
  titleTrigger,
  headerProps,
  titleProps,
  iconProps,
} = useCollapseItem(props)

const {
  arrowKls,
  headKls,
  rootKls,
  itemTitleKls,
  itemWrapperKls,
  itemContentKls,
  scopedContentId,
  scopedHeadId,
  warpArrowKls,
} = useCollapseItemDOM(props, {
  isActive,
  id,
  disabled,
  headerTrigger,
  iconTrigger,
  titleTrigger,
})

defineExpose({
  /** @description current collapse-item whether active */
  isActive,
})
</script>

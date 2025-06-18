<template>
  <component
    :is="tag"
    ref="_ref"
    v-bind="_props"
    :class="buttonKls"
    :style="buttonStyle"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <el-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </el-icon>
    </template>
    <el-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </el-icon>
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { useButton } from './use-button' // 引入 useButton hook 处理按钮逻辑
import { buttonEmits, buttonProps } from './button' // 引入按钮的 props 和 emits 定义
import { useButtonCustomStyle } from './button-custom' // 引入 useButtonCustomStyle hook 处理自定义样式

// 定义组件名称为ElButton
defineOptions({
  name: 'ElButton',
})

// 定义组件的 props 和 emits
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

// 根据传入的 props 使用 useButtonCustomStyle hook 获取自定义样式
const buttonStyle = useButtonCustomStyle(props)

// 创建命名空间工具，用于生成BEM风格的CSS类名
const ns = useNamespace('button')

// 使用 useButton hook 获取处理后的按钮状态与行为
const {
  _ref,
  _size,
  _type,
  _disabled,
  _props,
  _plain,
  _round,
  shouldAddSpace,
  handleClick,
} = useButton(props, emit)

// 计算按钮的类名，使用BEM命名规范生成类名
const buttonKls = computed(() => [
  ns.b(),
  ns.m(_type.value),
  ns.m(_size.value),
  ns.is('disabled', _disabled.value),
  ns.is('loading', props.loading),
  ns.is('plain', _plain.value),
  ns.is('round', _round.value),
  ns.is('circle', props.circle),
  ns.is('text', props.text),
  ns.is('link', props.link),
  ns.is('has-bg', props.bg),
])

// 定义 ELButton 组件暴露给父组件的属性和方法
defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button size */
  size: _size,
  /** @description button type */
  type: _type,
  /** @description button disabled */
  disabled: _disabled,
  /** @description whether adding space */
  shouldAddSpace,
})
</script>

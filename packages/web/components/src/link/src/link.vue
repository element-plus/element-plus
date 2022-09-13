<template>
  <a
    :class="[
      ns.b(),
      ns.m(type),
      ns.is('disabled', disabled),
      ns.is('underline', underline && !disabled),
    ]"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <el-icon v-if="icon"><component :is="icon" /></el-icon>
    <span v-if="$slots.default" :class="ns.e('inner')">
      <slot />
    </span>

    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang="ts" setup>
import { ElIcon } from '@element-plus/components/src/icon'
import { useNamespace } from '@element-plus/hooks'
import { linkEmits, linkProps } from './link'

defineOptions({
  name: 'ElLink',
})
const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

const ns = useNamespace('link')

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

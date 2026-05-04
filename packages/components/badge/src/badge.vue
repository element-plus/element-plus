<template>
  <div :class="ns.b()">
    <slot />
    <transition :name="`${ns.namespace.value}-zoom-in-center`">
      <sup
        v-if="!hidden && (content || isDot || $slots.content)"
        :class="[
          ns.e('content'),
          ns.em('content', type),
          ns.is('fixed', !!$slots.default),
          ns.is('dot', isDot),
          ns.is('hide-zero', !showZero && value === 0),
          badgeClass,
        ]"
        :style="style"
      >
        <slot name="content" :value="content">
          {{ content }}
        </slot>
      </sup>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { addUnit, isNumber } from '@element-plus/utils'

import type { StyleValue } from 'vue'
import type { BadgeProps } from './badge'

defineOptions({
  name: 'ElBadge',
})

const props = withDefaults(defineProps<BadgeProps>(), {
  badgeStyle: undefined,
  value: '',
  max: 99,
  type: 'danger',
  showZero: true,
  offset: () => [0, 0],
})

const ns = useNamespace('badge')

const content = computed<string>(() => {
  if (props.isDot) return ''
  if (isNumber(props.value) && isNumber(props.max)) {
    return props.max < props.value ? `${props.max}+` : `${props.value}`
  }
  return `${props.value}`
})

const style = computed<StyleValue>(() => {
  return [
    {
      backgroundColor: props.color,
      marginRight: addUnit(-props.offset[0]),
      marginTop: addUnit(props.offset[1]),
    },
    props.badgeStyle ?? {},
  ]
})

defineExpose({
  /** @description badge content */
  content,
})
</script>

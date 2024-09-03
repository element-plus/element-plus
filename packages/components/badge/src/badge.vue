<template>
  <div :class="ns.b()">
    <slot />
    <transition :name="`${ns.namespace.value}-zoom-in-center`">
      <sup
        v-show="!hidden && (content || isDot)"
        :class="[
          ns.e('content'),
          ns.em('content', type),
          ns.is('fixed', !!$slots.default),
          ns.is('dot', isDot),
          badgeClass,
        ]"
        :style="style"
        v-text="content"
      />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { addUnit, isNumber } from '@element-plus/utils'
import { badgeProps } from './badge'
import type { StyleValue } from 'vue'

defineOptions({
  name: 'ElBadge',
})

const props = defineProps(badgeProps)

const ns = useNamespace('badge')

const content = computed<string>(() => {
  if (props.isDot) return ''
  if (isNumber(props.value) && isNumber(props.max)) {
    if (props.max < props.value) {
      return `${props.max}+`
    }
    return props.value === 0 && !props.showZero ? '' : `${props.value}`
  }
  return `${props.value}`
})
const style = computed<StyleValue>(() => {
  return [
    {
      backgroundColor: props.color,
      marginRight: addUnit(-(props.offset?.[0] ?? 0)),
      marginTop: addUnit(props.offset?.[1] ?? 0),
    },
    props.badgeStyle ?? {},
  ]
})

defineExpose({
  /** @description badge content */
  content,
})
</script>

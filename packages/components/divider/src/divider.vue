<template>
  <div
    :class="[
      ns.b(),
      ns.m(direction),
      ns.is('with-text', $slots.default && direction !== 'vertical'),
    ]"
    :style="dividerStyle"
    role="separator"
  >
    <template v-if="$slots.default && direction !== 'vertical'">
      <div
        :class="[
          ns.e('line'),
          ns.is('left'),
          ns.is('short', contentPosition === 'left'),
          ns.is('full', ['right', 'center'].includes(contentPosition)),
        ]"
      />
      <span :class="[ns.e('text'), ns.is(contentPosition)]">
        <slot />
      </span>
      <div
        :class="[
          ns.e('line'),
          ns.is('right'),
          ns.is('short', contentPosition === 'right'),
          ns.is('full', ['left', 'center'].includes(contentPosition)),
        ]"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'
import type { DividerProps } from './divider'

defineOptions({
  name: 'ElDivider',
})
const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  contentPosition: 'center',
  borderStyle: 'solid',
})
const ns = useNamespace('divider')
const dividerStyle = computed(() => {
  return ns.cssVar({
    'border-style': props.borderStyle,
  }) as CSSProperties
})
</script>

<template>
  <div :class="[ns.b('group'), ns.bm('group', props.direction)]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { buttonGroupContextKey } from './constants'

import type { ButtonGroupProps } from './button-group'

defineOptions({
  name: 'GButtonGroup',
})
const props = withDefaults(defineProps<ButtonGroupProps>(), {
  direction: 'horizontal',
  type: '',
})
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)
const ns = useNamespace('button')
</script>

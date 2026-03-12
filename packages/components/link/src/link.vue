<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    :target="disabled || !href ? undefined : target"
    @click="handleClick"
  >
    <g-icon v-if="icon"><component :is="icon" /></g-icon>
    <span v-if="$slots.default" :class="ns.e('inner')">
      <slot />
    </span>

    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { GIcon } from '@element-plus/components/icon'
import { useGlobalConfig } from '@element-plus/components/config-provider'
import { useDeprecated, useNamespace } from '@element-plus/hooks'
import { isBoolean } from '@element-plus/utils'
import { linkEmits } from './link'

import type { LinkProps } from './link'

defineOptions({
  name: 'GLink',
})
const props = withDefaults(defineProps<LinkProps>(), {
  type: undefined,
  underline: undefined,
  href: '',
  target: '_self',
})
const emit = defineEmits(linkEmits)
const globalConfig = useGlobalConfig('link')

useDeprecated(
  {
    scope: 'g-link',
    from: 'The underline option (boolean)',
    replacement: "'always' | 'hover' | 'never'",
    version: '3.0.0',
    ref: 'https://element-plus.org/en-US/component/link.html#underline',
  },
  computed(() => isBoolean(props.underline))
)

const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type ?? globalConfig.value?.type ?? 'default'),
  ns.is('disabled', props.disabled),
  ns.is('underline', underline.value === 'always'),
  ns.is('hover-underline', underline.value === 'hover' && !props.disabled),
])

// Boolean compatibility
const underline = computed(() => {
  if (isBoolean(props.underline)) {
    return props.underline ? 'hover' : 'never'
  } else return props.underline ?? globalConfig.value?.underline ?? 'hover'
})

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

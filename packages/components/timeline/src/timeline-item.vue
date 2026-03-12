<template>
  <li :class="timelineItemKls">
    <div :class="ns.e('tail')" />
    <div
      v-if="!$slots.dot"
      :class="defaultNodeKls"
      :style="{
        backgroundColor: color,
      }"
    >
      <g-icon v-if="icon" :class="ns.e('icon')">
        <component :is="icon" />
      </g-icon>
    </div>
    <div v-if="$slots.dot" :class="ns.e('dot')">
      <slot name="dot" />
    </div>

    <div :class="ns.e('wrapper')">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        :class="[ns.e('timestamp'), ns.is('top')]"
      >
        {{ timestamp }}
      </div>

      <div :class="ns.e('content')">
        <slot />
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        :class="[ns.e('timestamp'), ns.is('bottom')]"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { GIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { TIMELINE_INJECTION_KEY } from './tokens'

import type { TimelineProvider } from './tokens'
import type { TimelineItemProps } from './timeline-item'

defineOptions({
  name: 'GTimelineItem',
})

const props = withDefaults(defineProps<TimelineItemProps>(), {
  timestamp: '',
  placement: 'bottom',
  type: '',
  color: '',
  size: 'normal',
})
const { props: timelineProps } = inject<TimelineProvider>(
  TIMELINE_INJECTION_KEY
)!

const ns = useNamespace('timeline-item')
const defaultNodeKls = computed(() => [
  ns.e('node'),
  ns.em('node', props.size || ''),
  ns.em('node', props.type || ''),
  ns.is('hollow', props.hollow),
])

const timelineItemKls = computed(() => [
  ns.b(),
  { [ns.e('center')]: props.center },
  ns.is(timelineProps.mode),
])
</script>

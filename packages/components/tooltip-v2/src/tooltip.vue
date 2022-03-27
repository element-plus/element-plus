<template>
  <tooltip-v2-root v-bind="rootProps">
    <tooltip-v2-trigger v-bind="triggerProps">
      <slot name="trigger" />
    </tooltip-v2-trigger>
    <tooltip-v2-content v-bind="contentProps">
      <template #arrow="{ style }">
        <tooltip-v2-arrow v-if="showArrow" v-bind="arrowProps" :style="style" />
      </template>
      <slot />
    </tooltip-v2-content>
  </tooltip-v2-root>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import { tooltipV2ArrowProps } from './arrow'
import { tooltipV2ContentProps } from './content'
import { tooltipV2RootProps } from './root'
import { tooltipV2Props } from './tooltip'
import { tooltipV2TriggerProps } from './trigger'
import TooltipV2Root from './root.vue'
import TooltipV2Arrow from './arrow.vue'
import TooltipV2Content from './content.vue'
import TooltipV2Trigger from './trigger.vue'

defineOptions({
  name: 'ElTooltipV2',
})

const props = defineProps(tooltipV2Props)

const refedProps = toRefs(props)

const arrowProps = reactive(pick(refedProps, Object.keys(tooltipV2ArrowProps)))

const contentProps = reactive(
  pick(refedProps, Object.keys(tooltipV2ContentProps))
)

const rootProps = reactive(pick(refedProps, Object.keys(tooltipV2RootProps)))

const triggerProps = reactive(
  pick(refedProps, Object.keys(tooltipV2TriggerProps))
)
</script>

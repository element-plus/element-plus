<template>
  <tooltip-v2-root v-bind="rootProps">
    <template #default="{ open }">
      <tooltip-v2-trigger v-bind="triggerProps" nowrap>
        <slot name="trigger" />
      </tooltip-v2-trigger>
      <el-teleport :to="to" :disabled="!teleported">
        <template v-if="fullTransition">
          <transition v-bind="transitionProps">
            <tooltip-v2-content v-if="alwaysOn || open" v-bind="contentProps">
              <slot />
              <template #arrow="{ style, side }">
                <tooltip-v2-arrow
                  v-if="showArrow"
                  v-bind="arrowProps"
                  :style="style"
                  :side="side"
                />
              </template>
            </tooltip-v2-content>
          </transition>
        </template>
        <template v-else>
          <tooltip-v2-content v-if="alwaysOn || open" v-bind="contentProps">
            <slot />
            <template #arrow="{ style, side }">
              <tooltip-v2-arrow
                v-if="showArrow"
                v-bind="arrowProps"
                :style="style"
                :side="side"
              />
            </template>
          </tooltip-v2-content>
        </template>
      </el-teleport>
    </template>
  </tooltip-v2-root>
</template>

<script setup lang="ts">
// @ts-nocheck
import { reactive, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import ElTeleport from '@element-plus/components/teleport'
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

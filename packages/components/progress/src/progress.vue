<template>
  <div
    :class="[
      ns.b(),
      ns.m(type),
      ns.is(status),
      {
        [ns.m('without-text')]: !showText,
        [ns.m('text-inside')]: textInside,
      },
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div v-if="type === 'line'" :class="ns.b('bar')">
      <div
        :class="ns.be('bar', 'outer')"
        :style="{ height: `${strokeWidth}px` }"
      >
        <div
          :class="[
            ns.be('bar', 'inner'),
            { [ns.bem('bar', 'inner', 'indeterminate')]: indeterminate },
            { [ns.bem('bar', 'inner', 'striped')]: striped },
            { [ns.bem('bar', 'inner', 'striped-flow')]: stripedFlow },
          ]"
          :style="barStyle"
        >
          <div
            v-if="(showText || $slots.default) && textInside"
            :class="ns.be('bar', 'innerText')"
          >
            <slot :percentage="percentage">
              <span>{{ content }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      :class="ns.b('circle')"
      :style="{ height: `${width}px`, width: `${width}px` }"
    >
      <svg viewBox="0 0 100 100">
        <path
          :class="ns.be('circle', 'track')"
          :d="trackPath"
          :stroke="`var(${ns.cssVarName('fill-color-light')}, #e5e9f2)`"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"
        />
        <path
          :class="ns.be('circle', 'path')"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :opacity="percentage ? 1 : 0"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle"
        />
      </svg>
    </div>
    <div
      v-if="(showText || $slots.default) && !textInside"
      :class="ns.e('text')"
      :style="{ fontSize: `${progressTextSize}px` }"
    >
      <slot :percentage="percentage">
        <span v-if="!status">{{ content }}</span>
        <el-icon v-else>
          <component :is="statusIcon" />
        </el-icon>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import {
  Check,
  CircleCheck,
  CircleClose,
  Close,
  WarningFilled,
} from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { isFunction, isString } from '@element-plus/utils'
import { progressProps } from './progress'
import type { CSSProperties } from 'vue'
import type { ProgressColor } from './progress'

defineOptions({
  name: 'ElProgress',
})

const STATUS_COLOR_MAP: Record<string, string> = {
  success: '#13ce66',
  exception: '#ff4949',
  warning: '#e6a23c',
  default: '#20a0ff',
}

const props = defineProps(progressProps)

const ns = useNamespace('progress')

const barStyle = computed<CSSProperties>(() => {
  const barStyle: CSSProperties = {
    width: `${props.percentage}%`,
    animationDuration: `${props.duration}s`,
  }
  const color = getCurrentColor(props.percentage)
  if (color.includes('gradient')) {
    barStyle.background = color
  } else {
    barStyle.backgroundColor = color
  }
  return barStyle
})

const relativeStrokeWidth = computed(() =>
  ((props.strokeWidth / props.width) * 100).toFixed(1)
)

const radius = computed(() => {
  if (['circle', 'dashboard'].includes(props.type)) {
    return Number.parseInt(
      `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
      10
    )
  }
  return 0
})

const trackPath = computed(() => {
  const r = radius.value
  const isDashboard = props.type === 'dashboard'
  return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '-' : ''}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '' : '-'}${r * 2}
          `
})

const perimeter = computed(() => 2 * Math.PI * radius.value)

const rate = computed(() => (props.type === 'dashboard' ? 0.75 : 1))

const strokeDashoffset = computed(() => {
  const offset = (-1 * perimeter.value * (1 - rate.value)) / 2
  return `${offset}px`
})

const trailPathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
}))

const circlePathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${
    perimeter.value * rate.value * (props.percentage / 100)
  }px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
  transition:
    'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s',
}))

const stroke = computed(() => {
  let ret: string
  if (props.color) {
    ret = getCurrentColor(props.percentage)
  } else {
    ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default
  }
  return ret
})

const statusIcon = computed(() => {
  if (props.status === 'warning') {
    return WarningFilled
  }
  if (props.type === 'line') {
    return props.status === 'success' ? CircleCheck : CircleClose
  } else {
    return props.status === 'success' ? Check : Close
  }
})

const progressTextSize = computed(() => {
  return props.type === 'line'
    ? 12 + props.strokeWidth * 0.4
    : props.width * 0.111111 + 2
})

const content = computed(() => props.format(props.percentage))

function getColors(color: ProgressColor[]) {
  const span = 100 / color.length
  const seriesColors = color.map((seriesColor, index) => {
    if (isString(seriesColor)) {
      return {
        color: seriesColor,
        percentage: (index + 1) * span,
      }
    }
    return seriesColor
  })
  return seriesColors.sort((a, b) => a.percentage - b.percentage)
}

const getCurrentColor = (percentage: number) => {
  const { color } = props
  if (isFunction(color)) {
    return color(percentage)
  } else if (isString(color)) {
    return color
  } else {
    const colors = getColors(color)
    for (const color of colors) {
      if (color.percentage > percentage) return color.color
    }
    return colors[colors.length - 1]?.color
  }
}
</script>

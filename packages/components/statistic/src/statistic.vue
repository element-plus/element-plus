<template>
  <div :class="ns.b()">
    <div v-if="$slots.title || title" :class="ns.e('head')">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div :class="ns.e('content')">
      <div v-if="$slots.prefix || prefix" :class="ns.e('prefix')">
        <slot name="prefix">
          <span>{{ prefix }}</span>
        </slot>
      </div>
      <span :class="ns.e('number')" :style="valueStyle">
        {{ displayValue }}
      </span>
      <div v-if="$slots.suffix || suffix" :class="ns.e('suffix')">
        <slot name="suffix">
          <span>{{ suffix }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { isFunction, isNumber } from '@element-plus/utils'
import { statisticProps } from './statistic'

defineOptions({
  name: 'ElStatistic',
})

const props = defineProps(statisticProps)
const ns = useNamespace('statistic')

const displayValue = computed(() => {
  const { value, formatter, precision, decimalSeparator, groupSeparator } =
    props

  if (isFunction(formatter)) return formatter(value)

  // https://github.com/element-plus/element-plus/issues/17784
  if (!isNumber(value) || Number.isNaN(value)) return value

  let [integer, decimal = ''] = String(value).split('.')
  decimal = decimal
    .padEnd(precision, '0')
    .slice(0, precision > 0 ? precision : 0)
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)
  return [integer, decimal].join(decimal ? decimalSeparator : '')
})

defineExpose({
  /**
   * @description current display value
   */
  displayValue,
})
</script>

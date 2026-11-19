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

import type { StatisticProps } from './statistic'

defineOptions({
  name: 'ElStatistic',
})

const props = withDefaults(defineProps<StatisticProps>(), {
  decimalSeparator: '.',
  groupSeparator: ',',
  precision: 0,
  value: 0,
  valueStyle: undefined,
})
const ns = useNamespace('statistic')

// writes a number such as 1.2e-7 as plain digits, without rounding
const expandExponent = (text: string) => {
  const [coefficient, exponent] = text.split('e')
  const sign = coefficient.startsWith('-') ? '-' : ''
  const [integer, decimal = ''] = coefficient.replace('-', '').split('.')
  const digits = integer + decimal
  const point = integer.length + Number(exponent)

  if (point <= 0) return `${sign}0.${'0'.repeat(-point)}${digits}`
  if (point >= digits.length) return sign + digits.padEnd(point, '0')
  return `${sign}${digits.slice(0, point)}.${digits.slice(point)}`
}

const displayValue = computed(() => {
  const { value, formatter, precision, decimalSeparator, groupSeparator } =
    props

  if (isFunction(formatter)) return formatter(value)

  // https://github.com/element-plus/element-plus/issues/17784
  if (!isNumber(value) || Number.isNaN(value)) return value

  let text = String(value)
  // very small and very large numbers are written with an exponent, e.g. 1.2e-7
  if (text.includes('e')) text = expandExponent(text)

  let [integer, decimal = ''] = text.split('.')
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

<template>
  <div :class="ns.b()">
    <div v-if="$slots.title || title" ref="title" :class="ns.e('head')">
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
        {{ disposeValue }}
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
import { isNil } from 'lodash-unified'
import { useNamespace } from '@element-plus/hooks'
import { isFunction } from '@element-plus/utils'
import { regroup, statisticProps } from './statistic'

defineOptions({
  name: 'ElStatistic',
})

const props = defineProps(statisticProps)
const ns = useNamespace('statistic')

const disposeValue = computed(() => {
  if (isFunction(props.formatter)) {
    return props.formatter(props.value)
  } else if (
    isNil(props.value) ||
    !/^(-|\+)?\d+(\.\d+)?$/.test(`${props.value}`)
  ) {
    return props.value
  } else {
    let [integer, decimal] = `${props.value}`.split('.')
    if (!isNil(props.precision)) {
      decimal = `${decimal || ''}${(1)
        .toFixed(props.precision)
        .replace('.', '')
        .slice(1)}`
      decimal = decimal.slice(0, props.precision)
    }
    integer = regroup(integer, props.rate, props.groupSeparator)
    return [integer, decimal].join(decimal ? props.decimalSeparator || '.' : '')
  }
})

defineExpose({
  disposeValue,
})
</script>

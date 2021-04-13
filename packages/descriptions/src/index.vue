<template>
  <div class="el-descriptions">
    <div v-if="title || extra || $slots.title || $slots.extra" class="el-descriptions__header">
      <div class="el-descriptions__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="el-descriptions__extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div class="el-descriptions__body">
      <table :class="{'is-bordered': border}">
        <tbody>
          <tr>
            <slot></slot>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from 'vue'
import { isValidComponentSize } from '@element-plus/utils/validators'
import DescriptionsItem from '@element-plus/descriptions-item'

export default defineComponent({
  name: 'ElDescriptions',
  components: {
    [DescriptionsItem.name]: DescriptionsItem,
  },
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Number,
      default: 3,
      min: 1,
    },
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    title: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    provide('descriptions', props)

    const tdStyle = computed(() => {
      const width = `${100 / props.column}%`
      return {
        width: width,
      }
    })

    const rowCount = computed(() => {
      const slotCount = slots.default?.().length || 0
      return Math.ceil(slotCount / props.column)
    })

    console.log(rowCount.value)

    console.log()

    return {
      tdStyle,
      rowCount,
    }
  },
})
</script>

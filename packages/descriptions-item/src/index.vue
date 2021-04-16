<template>
  <template v-if="border">
    <td class="el-descriptions__label is-bordered-label">
      <slot name="label">{{ label }}</slot>
    </td>
    <td class="el-descriptions__content">
      <slot></slot>
    </td>
  </template>
  <template v-else>
    <td>
      <span class="el-descriptions__label" :class="{'is-bordered-label': border}">
        <slot name="label">{{ label }}</slot>
      </span>
      <span class="el-descriptions__content">
        <slot></slot>
      </span>
    </td>
  </template>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from 'vue'

interface IDescriptionsInject {
  border: boolean
  column: number
  direction: PropType<'horizontal' | 'vertical'>
  size: PropType<ComponentSize>
  title: string
  extra: string
}

export default defineComponent({
  name: 'ElDescriptionsItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    span: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const descriptions: IDescriptionsInject = inject('descriptions')

    return {
      border: descriptions.border,
    }
  },
})
</script>

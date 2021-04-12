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
      描述列表
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { isValidComponentSize } from '@element-plus/utils/validators'

export default defineComponent({
  name: 'ElDescriptions',
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Number,
      default: 3,
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
  setup(props) {
    // init here
  },
})
</script>

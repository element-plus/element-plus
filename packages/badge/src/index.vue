<template>
  <div class="el-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        class="el-badge__content"
        :class="[
          'el-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]"
        v-text="content"
      >
      </sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

interface IBadgeProps {
  value: string | number
  max: number
  isDot: boolean
  hidden: boolean
  type: string
}

interface IBadgeSetups {
  content: number | string
}
export default defineComponent({
  name: 'ElBadge',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    max: {
      type: Number,
      default: 99,
    },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator: (val: string) => {
        return ['primary', 'success', 'warning', 'info', 'danger'].includes(val)
      },
    },
  },
  setup(props) {
    const content = computed(() => {
      if (props.isDot) {
        return
      }
      const { value, max } = props
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }
      return value
    })
    return {
      content,
    }
  },
})
</script>

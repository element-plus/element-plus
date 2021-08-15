<template>
  <div class="el-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        class="el-badge__content"
        :class="[
          isDot ? 'is-dot' : 'el-badge__content--' + type,
          {
            'is-fixed': $slots.default,
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
      if (typeof props.value === 'number' && typeof props.max === 'number') {
        return props.max < props.value ? `${props.max}+` : props.value
      }
      return props.value
    })
    return {
      content,
    }
  },
})
</script>

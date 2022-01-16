<template>
  <div :class="prefixClass">
    <slot></slot>
    <transition :name="zoomInCenterClass">
      <sup
        v-show="!hidden && (content || content === '0' || isDot)"
        class="el-badge__content"
        :class="[
          `${prefixClass}__content`,
          `${prefixClass}__content--${type}`,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot,
          },
        ]"
        v-text="content"
      >
      </sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import { badgeProps } from './badge'

export default defineComponent({
  name: 'ElBadge',

  props: badgeProps,

  setup(props) {
    const prefixClass = usePrefixClass('badge')
    const zoomInCenterClass = usePrefixClass('zoom-in-center')

    const content = computed<string>(() => {
      if (props.isDot) return ''

      if (typeof props.value === 'number' && typeof props.max === 'number') {
        return props.max < props.value ? `${props.max}+` : `${props.value}`
      }
      return `${props.value}`
    })

    return {
      prefixClass,
      zoomInCenterClass,
      content,
    }
  },
})
</script>

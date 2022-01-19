<template>
  <div :class="ns.b()">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === '0' || isDot)"
        :class="[
          ns.e('content'),
          ns.em('content', type),
          ns.is('fixed', !!$slots.default),
          ns.is('dot', isDot),
        ]"
        v-text="content"
      >
      </sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { badgeProps } from './badge'

export default defineComponent({
  name: 'ElBadge',

  props: badgeProps,

  setup(props) {
    const ns = useNamespace('badge')

    const content = computed<string>(() => {
      if (props.isDot) return ''

      if (typeof props.value === 'number' && typeof props.max === 'number') {
        return props.max < props.value ? `${props.max}+` : `${props.value}`
      }
      return `${props.value}`
    })

    return {
      ns,
      content,
    }
  },
})
</script>

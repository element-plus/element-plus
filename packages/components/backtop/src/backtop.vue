<template>
  <transition name="el-fade-in">
    <div
      v-if="visible"
      :style="{
        right: styleRight,
        bottom: styleBottom,
      }"
      class="el-backtop"
      @click.stop="handleClick"
    >
      <slot>
        <i class="el-icon-caret-top"></i>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, shallowRef } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { easeInOutCubic } from '@element-plus/utils/animation'
import { throwError } from '@element-plus/utils/error'

import { backtopEmits, backtopProps } from './backtop'

const COMPONENT_NAME = 'ElBacktop'

export default defineComponent({
  name: COMPONENT_NAME,

  props: backtopProps,
  emits: backtopEmits,

  setup(props, { emit }) {
    const el = shallowRef<HTMLElement | undefined>(document.documentElement)
    const container = shallowRef<Document | HTMLElement>(document)
    const visible = ref(false)
    const styleBottom = computed(() => `${props.bottom}px`)
    const styleRight = computed(() => `${props.right}px`)

    const scrollToTop = () => {
      if (!el.value) return
      const beginTime = Date.now()
      const beginValue = el.value.scrollTop
      const frameFunc = () => {
        if (!el.value) return
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          requestAnimationFrame(frameFunc)
        } else {
          el.value.scrollTop = 0
        }
      }
      requestAnimationFrame(frameFunc)
    }
    const handleScroll = () => {
      if (el.value) visible.value = el.value.scrollTop >= props.visibilityHeight
    }
    const handleClick = (event: MouseEvent) => {
      scrollToTop()
      emit('click', event)
    }

    const handleScrollThrottled = useThrottleFn(handleScroll, 300)

    onMounted(() => {
      if (props.target) {
        el.value =
          document.querySelector<HTMLElement>(props.target) ?? undefined
        if (!el.value) {
          throwError(COMPONENT_NAME, `target is not existed: ${props.target}`)
        }
        container.value = el.value
      }

      useEventListener(container, 'scroll', handleScrollThrottled)
    })

    return {
      visible,
      styleBottom,
      styleRight,
      handleClick,
    }
  },
})
</script>

<template>
  <transition :name="`${ns.namespace.value}-fade-in`">
    <div
      v-if="visible"
      :style="backTopStyle"
      :class="ns.b()"
      @click.stop="handleClick"
    >
      <slot>
        <el-icon :class="ns.e('icon')"><caret-top /></el-icon>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { ElIcon } from '@element-plus/components/icon'
import { easeInOutCubic, throwError } from '@element-plus/utils'
import { CaretTop } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { backtopEmits, backtopProps } from './backtop'

const COMPONENT_NAME = 'ElBacktop'
defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(backtopProps)
const emit = defineEmits(backtopEmits)

const ns = useNamespace('backtop')
const el = shallowRef<HTMLElement>()
const container = shallowRef<Document | HTMLElement>()
const visible = ref(false)

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))

const scrollToTop = () => {
  // TODO: use https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo, with behavior: 'smooth'

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

useEventListener(container, 'scroll', handleScrollThrottled)
onMounted(() => {
  container.value = document
  el.value = document.documentElement

  if (props.target) {
    el.value = document.querySelector<HTMLElement>(props.target) ?? undefined
    if (!el.value) {
      throwError(COMPONENT_NAME, `target is not existed: ${props.target}`)
    }
    container.value = el.value
  }
})
</script>

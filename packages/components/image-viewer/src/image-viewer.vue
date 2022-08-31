<template>
  <teleport to="body" :disabled="!teleported">
    <transition name="viewer-fade" appear>
      <div
        ref="wrapper"
        :tabindex="-1"
        :class="ns.e('wrapper')"
        :style="{ zIndex: computedZIndex }"
      >
        <div :class="ns.e('mask')" @click.self="hideOnClickModal && hide()" />

        <!-- CLOSE -->
        <span :class="[ns.e('btn'), ns.e('close')]" @click="hide">
          <el-icon><Close /></el-icon>
        </span>

        <!-- ARROW -->
        <template v-if="!isSingle">
          <span
            :class="[
              ns.e('btn'),
              ns.e('prev'),
              ns.is('disabled', !infinite && isFirst),
            ]"
            @click="prev"
          >
            <el-icon><ArrowLeft /></el-icon>
          </span>
          <span
            :class="[
              ns.e('btn'),
              ns.e('next'),
              ns.is('disabled', !infinite && isLast),
            ]"
            @click="next"
          >
            <el-icon><ArrowRight /></el-icon>
          </span>
        </template>
        <!-- ACTIONS -->
        <div :class="[ns.e('btn'), ns.e('actions')]">
          <div :class="ns.e('actions__inner')">
            <el-icon @click="handleActions('zoomOut')">
              <ZoomOut />
            </el-icon>
            <el-icon @click="handleActions('zoomIn')">
              <ZoomIn />
            </el-icon>
            <i :class="ns.e('actions__divider')" />
            <el-icon @click="toggleMode">
              <component :is="mode.icon" />
            </el-icon>
            <i :class="ns.e('actions__divider')" />
            <el-icon @click="handleActions('anticlockwise')">
              <RefreshLeft />
            </el-icon>
            <el-icon @click="handleActions('clockwise')">
              <RefreshRight />
            </el-icon>
          </div>
        </div>
        <!-- CANVAS -->
        <div :class="ns.e('canvas')">
          <img
            v-for="(url, i) in urlList"
            v-show="i === activeIndex"
            :ref="(el) => (imgRefs[i] = el as HTMLImageElement)"
            :key="url"
            :src="url"
            :style="imgStyle"
            :class="ns.e('img')"
            @load="handleImgLoad"
            @error="handleImgError"
            @mousedown="handleMouseDown"
          />
        </div>
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import {
  computed,
  effectScope,
  markRaw,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  watch,
} from 'vue'
import { isNumber, useEventListener } from '@vueuse/core'
import { throttle } from 'lodash-unified'
import { useLocale, useNamespace, useZIndex } from '@element-plus/hooks'
import { EVENT_CODE } from '@element-plus/constants'
import { isFirefox, keysOf } from '@element-plus/utils'
import ElIcon from '@element-plus/components/icon'
import {
  ArrowLeft,
  ArrowRight,
  Close,
  FullScreen,
  RefreshLeft,
  RefreshRight,
  ScaleToOriginal,
  ZoomIn,
  ZoomOut,
} from '@element-plus/icons-vue'
import { imageViewerEmits, imageViewerProps } from './image-viewer'

import type { CSSProperties } from 'vue'
import type { ImageViewerAction, ImageViewerMode } from './image-viewer'

const modes: Record<'CONTAIN' | 'ORIGINAL', ImageViewerMode> = {
  CONTAIN: {
    name: 'contain',
    icon: markRaw(FullScreen),
  },
  ORIGINAL: {
    name: 'original',
    icon: markRaw(ScaleToOriginal),
  },
}

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel'

defineOptions({
  name: 'ElImageViewer',
})

const props = defineProps(imageViewerProps)
const emit = defineEmits(imageViewerEmits)

const { t } = useLocale()
const ns = useNamespace('image-viewer')
const { nextZIndex } = useZIndex()
const wrapper = ref<HTMLDivElement>()
const imgRefs = ref<HTMLImageElement[]>([])

const scopeEventListener = effectScope()

const loading = ref(true)
const activeIndex = ref(props.initialIndex)
const mode = shallowRef<ImageViewerMode>(modes.CONTAIN)
const transform = ref({
  scale: 1,
  deg: 0,
  offsetX: 0,
  offsetY: 0,
  enableTransition: false,
})

const isSingle = computed(() => {
  const { urlList } = props
  return urlList.length <= 1
})

const isFirst = computed(() => {
  return activeIndex.value === 0
})

const isLast = computed(() => {
  return activeIndex.value === props.urlList.length - 1
})

const currentImg = computed(() => {
  return props.urlList[activeIndex.value]
})

const imgStyle = computed(() => {
  const { scale, deg, offsetX, offsetY, enableTransition } = transform.value
  let translateX = offsetX / scale
  let translateY = offsetY / scale

  switch (deg % 360) {
    case 90:
    case -270:
      ;[translateX, translateY] = [translateY, -translateX]
      break
    case 180:
    case -180:
      ;[translateX, translateY] = [-translateX, -translateY]
      break
    case 270:
    case -90:
      ;[translateX, translateY] = [-translateY, translateX]
      break
  }

  const style: CSSProperties = {
    transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
    transition: enableTransition ? 'transform .3s' : '',
  }
  if (mode.value.name === modes.CONTAIN.name) {
    style.maxWidth = style.maxHeight = '100%'
  }
  return style
})

const computedZIndex = computed(() => {
  return isNumber(props.zIndex) ? props.zIndex : nextZIndex()
})

function hide() {
  unregisterEventListener()
  emit('close')
}

function registerEventListener() {
  const keydownHandler = throttle((e: KeyboardEvent) => {
    switch (e.code) {
      // ESC
      case EVENT_CODE.esc:
        props.closeOnPressEscape && hide()
        break
      // SPACE
      case EVENT_CODE.space:
        toggleMode()
        break
      // LEFT_ARROW
      case EVENT_CODE.left:
        prev()
        break
      // UP_ARROW
      case EVENT_CODE.up:
        handleActions('zoomIn')
        break
      // RIGHT_ARROW
      case EVENT_CODE.right:
        next()
        break
      // DOWN_ARROW
      case EVENT_CODE.down:
        handleActions('zoomOut')
        break
    }
  })
  const mousewheelHandler = throttle(
    (e: WheelEvent | any /* TODO: wheelDelta is deprecated */) => {
      const delta = e.wheelDelta ? e.wheelDelta : -e.detail
      if (delta > 0) {
        handleActions('zoomIn', {
          zoomRate: 1.2,
          enableTransition: false,
        })
      } else {
        handleActions('zoomOut', {
          zoomRate: 1.2,
          enableTransition: false,
        })
      }
    }
  )

  scopeEventListener.run(() => {
    useEventListener(document, 'keydown', keydownHandler)
    useEventListener(document, mousewheelEventName, mousewheelHandler)
  })
}

function unregisterEventListener() {
  scopeEventListener.stop()
}

function handleImgLoad() {
  loading.value = false
}

function handleImgError(e: Event) {
  loading.value = false
  ;(e.target as HTMLImageElement).alt = t('el.image.error')
}

function handleMouseDown(e: MouseEvent) {
  if (loading.value || e.button !== 0 || !wrapper.value) return
  transform.value.enableTransition = false

  const { offsetX, offsetY } = transform.value
  const startX = e.pageX
  const startY = e.pageY

  const dragHandler = throttle((ev: MouseEvent) => {
    transform.value = {
      ...transform.value,
      offsetX: offsetX + ev.pageX - startX,
      offsetY: offsetY + ev.pageY - startY,
    }
  })
  const removeMousemove = useEventListener(document, 'mousemove', dragHandler)
  useEventListener(document, 'mouseup', () => {
    removeMousemove()
  })

  e.preventDefault()
}

function reset() {
  transform.value = {
    scale: 1,
    deg: 0,
    offsetX: 0,
    offsetY: 0,
    enableTransition: false,
  }
}

function toggleMode() {
  if (loading.value) return

  const modeNames = keysOf(modes)
  const modeValues = Object.values(modes)
  const currentMode = mode.value.name
  const index = modeValues.findIndex((i) => i.name === currentMode)
  const nextIndex = (index + 1) % modeNames.length
  mode.value = modes[modeNames[nextIndex]]
  reset()
}

function setActiveItem(index: number) {
  const len = props.urlList.length
  activeIndex.value = (index + len) % len
}

function prev() {
  if (isFirst.value && !props.infinite) return
  setActiveItem(activeIndex.value - 1)
}

function next() {
  if (isLast.value && !props.infinite) return
  setActiveItem(activeIndex.value + 1)
}

function handleActions(action: ImageViewerAction, options = {}) {
  if (loading.value) return
  const { zoomRate, rotateDeg, enableTransition } = {
    zoomRate: 1.4,
    rotateDeg: 90,
    enableTransition: true,
    ...options,
  }
  switch (action) {
    case 'zoomOut':
      if (transform.value.scale > 0.2) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale / zoomRate).toFixed(3)
        )
      }
      break
    case 'zoomIn':
      if (transform.value.scale < 7) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale * zoomRate).toFixed(3)
        )
      }
      break
    case 'clockwise':
      transform.value.deg += rotateDeg
      break
    case 'anticlockwise':
      transform.value.deg -= rotateDeg
      break
  }
  transform.value.enableTransition = enableTransition
}

watch(currentImg, () => {
  nextTick(() => {
    const $img = imgRefs.value[0]
    if (!$img?.complete) {
      loading.value = true
    }
  })
})

watch(activeIndex, (val) => {
  reset()
  emit('switch', val)
})

onMounted(() => {
  registerEventListener()
  // add tabindex then wrapper can be focusable via Javascript
  // focus wrapper so arrow key can't cause inner scroll behavior underneath
  wrapper.value?.focus?.()
})

defineExpose({
  /** @description manually switch image */
  setActiveItem,
})
</script>

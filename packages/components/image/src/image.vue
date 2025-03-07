<template>
  <div ref="container" v-bind="containerAttrs" :class="[ns.b(), $attrs.class]">
    <slot v-if="hasLoadError" name="error">
      <div :class="ns.e('error')">{{ t('el.image.error') }}</div>
    </slot>
    <template v-else>
      <img
        v-if="imageSrc !== undefined"
        v-bind="imgAttrs"
        :src="imageSrc"
        :loading="loading"
        :style="imageStyle"
        :class="imageKls"
        :crossorigin="crossorigin"
        @click="clickHandler"
        @load="handleLoad"
        @error="handleError"
      />
      <div v-if="isLoading" :class="ns.e('wrapper')">
        <slot name="placeholder">
          <div :class="ns.e('placeholder')" />
        </slot>
      </div>
    </template>
    <template v-if="preview">
      <image-viewer
        v-if="showViewer"
        :z-index="zIndex"
        :initial-index="imageIndex"
        :infinite="infinite"
        :zoom-rate="zoomRate"
        :min-scale="minScale"
        :max-scale="maxScale"
        :show-progress="showProgress"
        :url-list="previewSrcList"
        :crossorigin="crossorigin"
        :hide-on-click-modal="hideOnClickModal"
        :teleported="previewTeleported"
        :close-on-press-escape="closeOnPressEscape"
        @close="closeViewer"
        @switch="switchViewer"
      >
        <div v-if="$slots.viewer">
          <slot name="viewer" />
        </div>
        <template #progress="progress">
          <slot name="progress" v-bind="progress" />
        </template>
        <template #toolbar="toolbar">
          <slot name="toolbar" v-bind="toolbar" />
        </template>
      </image-viewer>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  ref,
  useAttrs as useRawAttrs,
  watch,
} from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { fromPairs } from 'lodash-unified'
import { useAttrs, useLocale, useNamespace } from '@element-plus/hooks'
import ImageViewer from '@element-plus/components/image-viewer'
import {
  getScrollContainer,
  isArray,
  isClient,
  isElement,
  isInContainer,
  isString,
} from '@element-plus/utils'
import { imageEmits, imageProps } from './image'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElImage',
  inheritAttrs: false,
})

const props = defineProps(imageProps)
const emit = defineEmits(imageEmits)

const { t } = useLocale()
const ns = useNamespace('image')
const rawAttrs = useRawAttrs()

const containerAttrs = computed(() => {
  return fromPairs(
    Object.entries(rawAttrs).filter(
      ([key]) => /^(data-|on[A-Z])/i.test(key) || ['id', 'style'].includes(key)
    )
  )
})

const imgAttrs = useAttrs({
  excludeListeners: true,
  excludeKeys: computed<string[]>(() => {
    return Object.keys(containerAttrs.value)
  }),
})

const imageSrc = ref<string | undefined>()
const hasLoadError = ref(false)
const isLoading = ref(true)
const showViewer = ref(false)
const container = ref<HTMLElement>()
const _scrollContainer = ref<HTMLElement | Window>()

const supportLoading = isClient && 'loading' in HTMLImageElement.prototype
let stopScrollListener: (() => void) | undefined

const imageKls = computed(() => [
  ns.e('inner'),
  preview.value && ns.e('preview'),
  isLoading.value && ns.is('loading'),
])

const imageStyle = computed<CSSProperties>(() => {
  const { fit } = props
  if (isClient && fit) {
    return { objectFit: fit }
  }
  return {}
})

const preview = computed(() => {
  const { previewSrcList } = props
  return isArray(previewSrcList) && previewSrcList.length > 0
})

const imageIndex = computed(() => {
  const { previewSrcList, initialIndex } = props
  let previewIndex = initialIndex
  if (initialIndex > previewSrcList.length - 1) {
    previewIndex = 0
  }
  return previewIndex
})

const isManual = computed(() => {
  if (props.loading === 'eager') return false
  return (!supportLoading && props.loading === 'lazy') || props.lazy
})

const loadImage = () => {
  if (!isClient) return

  // reset status
  isLoading.value = true
  hasLoadError.value = false
  imageSrc.value = props.src
}

function handleLoad(event: Event) {
  isLoading.value = false
  hasLoadError.value = false
  emit('load', event)
}

function handleError(event: Event) {
  isLoading.value = false
  hasLoadError.value = true
  emit('error', event)
}

function handleLazyLoad() {
  if (isInContainer(container.value, _scrollContainer.value)) {
    loadImage()
    removeLazyLoadListener()
  }
}

const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200, true)

async function addLazyLoadListener() {
  if (!isClient) return

  await nextTick()

  const { scrollContainer } = props
  if (isElement(scrollContainer)) {
    _scrollContainer.value = scrollContainer
  } else if (isString(scrollContainer) && scrollContainer !== '') {
    _scrollContainer.value =
      document.querySelector<HTMLElement>(scrollContainer) ?? undefined
  } else if (container.value) {
    _scrollContainer.value = getScrollContainer(container.value)
  }

  if (_scrollContainer.value) {
    stopScrollListener = useEventListener(
      _scrollContainer,
      'scroll',
      lazyLoadHandler
    )
    setTimeout(() => handleLazyLoad(), 100)
  }
}

function removeLazyLoadListener() {
  if (!isClient || !_scrollContainer.value || !lazyLoadHandler) return

  stopScrollListener?.()
  _scrollContainer.value = undefined
}

function clickHandler() {
  // don't show viewer when preview is false
  if (!preview.value) return
  showViewer.value = true
  emit('show')
}

function closeViewer() {
  showViewer.value = false
  emit('close')
}

function switchViewer(val: number) {
  emit('switch', val)
}

watch(
  () => props.src,
  () => {
    if (isManual.value) {
      // reset status
      isLoading.value = true
      hasLoadError.value = false
      removeLazyLoadListener()
      addLazyLoadListener()
    } else {
      loadImage()
    }
  }
)

onMounted(() => {
  if (isManual.value) {
    addLazyLoadListener()
  } else {
    loadImage()
  }
})

defineExpose({
  /** @description manually open preview */
  showPreview: clickHandler,
})
</script>

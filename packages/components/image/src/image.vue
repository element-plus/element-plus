<template>
  <div
    ref="container"
    :class="['el-image', $attrs.class]"
    :style="containerStyle"
  >
    <slot v-if="loading" name="placeholder">
      <div class="el-image__placeholder"></div>
    </slot>
    <slot v-else-if="hasLoadError" name="error">
      <div class="el-image__error">{{ t('el.image.error') }}</div>
    </slot>
    <img
      v-else
      class="el-image__inner"
      v-bind="attrs"
      :src="src"
      :style="imageStyle"
      :class="{
        'el-image__preview': preview,
      }"
      @click="clickHandler"
    />
    <teleport to="body" :disabled="!appendToBody">
      <template v-if="preview">
        <image-viewer
          v-if="showViewer"
          :z-index="zIndex"
          :initial-index="imageIndex"
          :url-list="previewSrcList"
          :hide-on-click-modal="hideOnClickModal"
          @close="closeViewer"
          @switch="switchViewer"
        >
          <div v-if="$slots.viewer">
            <slot name="viewer" />
          </div>
        </image-viewer>
      </template>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch, nextTick } from 'vue'
import { isString } from '@vue/shared'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { useAttrs, useLocaleInject } from '@element-plus/hooks'
import ImageViewer from '@element-plus/components/image-viewer'
import isServer from '@element-plus/utils/isServer'
import { getScrollContainer, isInContainer } from '@element-plus/utils/dom'
import { imageEmits, imageProps } from './image'

import type { CSSProperties, StyleValue } from 'vue'

const isHtmlElement = (e: any): e is Element =>
  e && e.nodeType === Node.ELEMENT_NODE

let prevOverflow = ''

export default defineComponent({
  name: 'ElImage',
  components: {
    ImageViewer,
  },
  inheritAttrs: false,

  props: imageProps,
  emits: imageEmits,

  setup(props, { emit, attrs: rawAttrs }) {
    const { t } = useLocaleInject()

    const attrs = useAttrs()
    const hasLoadError = ref(false)
    const loading = ref(true)
    const imgWidth = ref(0)
    const imgHeight = ref(0)
    const showViewer = ref(false)
    const container = ref<HTMLElement>()

    const _scrollContainer = ref<HTMLElement | Window>()
    let stopScrollListener: () => void
    let stopWheelListener: () => void

    const containerStyle = computed(() => rawAttrs.style as StyleValue)

    const imageStyle = computed<CSSProperties>(() => {
      const { fit } = props
      if (!isServer && fit) {
        return { objectFit: fit }
      }
      return {}
    })

    const preview = computed(() => {
      const { previewSrcList } = props
      return Array.isArray(previewSrcList) && previewSrcList.length > 0
    })

    const imageIndex = computed(() => {
      const { src, previewSrcList } = props
      let previewIndex = 0
      const srcIndex = previewSrcList.indexOf(src)
      if (srcIndex >= 0) {
        previewIndex = srcIndex
      }
      return previewIndex
    })

    const loadImage = () => {
      if (isServer) return

      // reset status
      loading.value = true
      hasLoadError.value = false

      const img = new Image()
      img.addEventListener('load', (e) => handleLoad(e, img))
      img.addEventListener('error', handleError)

      // bind html attrs
      // so it can behave consistently
      Object.entries(attrs.value).forEach(([key, value]) => {
        // avoid onload to be overwritten
        if (key.toLowerCase() === 'onload') return
        img.setAttribute(key, value as string)
      })
      img.src = props.src
    }

    function handleLoad(e: Event, img: HTMLImageElement) {
      imgWidth.value = img.width
      imgHeight.value = img.height
      loading.value = false
      hasLoadError.value = false
    }

    function handleError(event: Event) {
      loading.value = false
      hasLoadError.value = true
      emit('error', event)
    }

    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage()
        removeLazyLoadListener()
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200)

    async function addLazyLoadListener() {
      if (isServer) return

      await nextTick()

      const { scrollContainer } = props
      if (isHtmlElement(scrollContainer)) {
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
      if (isServer || !_scrollContainer.value || !lazyLoadHandler) return

      stopScrollListener()
      _scrollContainer.value = undefined
    }

    function wheelHandler(e: WheelEvent) {
      if (!e.ctrlKey) return

      if (e.deltaY < 0) {
        e.preventDefault()
        return false
      } else if (e.deltaY > 0) {
        e.preventDefault()
        return false
      }
    }

    function clickHandler() {
      // don't show viewer when preview is false
      if (!preview.value) return

      stopWheelListener = useEventListener('wheel', wheelHandler, {
        passive: false,
      })

      // prevent body scroll
      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      showViewer.value = true
    }

    function closeViewer() {
      stopWheelListener?.()
      document.body.style.overflow = prevOverflow
      showViewer.value = false
      emit('close')
    }

    function switchViewer(val: number) {
      emit('switch', val)
    }

    watch(
      () => props.src,
      () => {
        if (props.lazy) {
          // reset status
          loading.value = true
          hasLoadError.value = false
          removeLazyLoadListener()
          addLazyLoadListener()
        } else {
          loadImage()
        }
      }
    )

    onMounted(() => {
      if (props.lazy) {
        addLazyLoadListener()
      } else {
        loadImage()
      }
    })

    return {
      attrs,
      loading,
      hasLoadError,
      showViewer,
      containerStyle,
      imageStyle,
      preview,
      imageIndex,
      container,

      clickHandler,
      closeViewer,
      switchViewer,
      t,
    }
  },
})
</script>

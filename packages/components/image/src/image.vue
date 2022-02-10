<template>
  <div ref="container" :class="[ns.b(), $attrs.class]" :style="containerStyle">
    <slot v-if="loading" name="placeholder">
      <div :class="ns.e('placeholder')"></div>
    </slot>
    <slot v-else-if="hasLoadError" name="error">
      <div :class="ns.e('error')">{{ t('el.image.error') }}</div>
    </slot>
    <img
      v-else
      v-bind="attrs"
      :src="src"
      :style="imageStyle"
      :class="[ns.e('inner'), preview ? ns.e('preview') : '']"
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
import { useEventListener, useThrottleFn, isClient } from '@vueuse/core'
import { useAttrs, useLocale, useNamespace } from '@element-plus/hooks'
import ImageViewer from '@element-plus/components/image-viewer'
import { getScrollContainer, isInContainer } from '@element-plus/utils-v2'
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
    const { t } = useLocale()
    const ns = useNamespace('image')

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
      if (isClient && fit) {
        return { objectFit: fit }
      }
      return {}
    })

    const preview = computed(() => {
      const { previewSrcList } = props
      return Array.isArray(previewSrcList) && previewSrcList.length > 0
    })

    const imageIndex = computed(() => {
      const { previewSrcList, initialIndex } = props
      let previewIndex = initialIndex
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0
      }
      return previewIndex
    })

    const loadImage = () => {
      if (!isClient) return

      // reset status
      loading.value = true
      hasLoadError.value = false

      const img = new Image()
      const currentImageSrc = props.src

      // load & error callbacks are only responsible for currentImageSrc
      img.addEventListener('load', (e) => {
        if (currentImageSrc !== props.src) {
          return
        }
        handleLoad(e, img)
      })
      img.addEventListener('error', (e) => {
        if (currentImageSrc !== props.src) {
          return
        }
        handleError(e)
      })

      // bind html attrs
      // so it can behave consistently
      Object.entries(attrs.value).forEach(([key, value]) => {
        // avoid onload to be overwritten
        if (key.toLowerCase() === 'onload') return
        img.setAttribute(key, value as string)
      })
      img.src = currentImageSrc
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
      if (!isClient) return

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
      if (!isClient || !_scrollContainer.value || !lazyLoadHandler) return

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
      ns,

      clickHandler,
      closeViewer,
      switchViewer,
      t,
    }
  },
})
</script>

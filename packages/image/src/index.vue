<template>
  <div
    ref="container"
    :class="['el-image', $attrs.class]"
    :style="$attrs.style"
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
      :class="{ 'el-image__inner--center': alignCenter, 'el-image__preview': preview }"
      @click="clickHandler"
    >
    <teleport to="body" :disabled="!appendToBody">
      <template v-if="preview">
        <image-viewer
          v-if="showViewer"
          :z-index="zIndex"
          :initial-index="imageIndex"
          :url-list="previewSrcList"
          :hide-on-click-modal="hideOnClickModal"
          @close="closeViewer"
        />
      </template>
    </teleport>
  </div>
</template>

<script lang='ts'>

import { defineComponent, computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { isString } from '@vue/shared'
import throttle from 'lodash/throttle'
import { useAttrs } from '@element-plus/hooks'
import isServer from '@element-plus/utils/isServer'
import { on, off, getScrollContainer, isInContainer } from '@element-plus/utils/dom'
import { useLocaleInject } from '@element-plus/hooks'
import ImageViewer from '@element-plus/image-viewer'
import type { PropType } from 'vue'

const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined
const isHtmlEle = e => e && e.nodeType === 1

const ObjectFit = {
  NONE: 'none',
  CONTAIN: 'contain',
  COVER: 'cover',
  FILL: 'fill',
  SCALE_DOWN: 'scale-down',
}

let prevOverflow = ''

export default defineComponent({
  name: 'ElImage',
  components: {
    ImageViewer,
  },
  inheritAttrs: false,
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    hideOnClickModal: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: '',
    },
    fit: {
      type: String,
      default: '',
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    scrollContainer: {
      type: [String, Object],
      default: null,
    },
    previewSrcList: {
      type: Array as PropType<string[]>,
      default: () => [] as string[],
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
  },
  emits: ['error'],
  setup(props, { emit }) {
    const { t } = useLocaleInject()
    // init here
    const attrs = useAttrs()
    const hasLoadError = ref(false)
    const loading = ref(true)
    const imgWidth = ref(0)
    const imgHeight = ref(0)
    const showViewer = ref(false)
    const container = ref<HTMLElement | null>(null)

    let _scrollContainer = null
    let _lazyLoadHandler = null

    const imageStyle = computed(() => {
      const { fit } = props
      if (!isServer && fit) {
        return isSupportObjectFit()
          ? { 'object-fit': fit }
          : getImageStyle(fit)
      }
      return {}
    })

    const alignCenter = computed(() => {
      const { fit } = props
      return !isServer && !isSupportObjectFit() && fit !== ObjectFit.FILL
    })

    const preview = computed(() => {
      const { previewSrcList } = props
      return Array.isArray(previewSrcList) && previewSrcList.length > 0
    })
    const imageIndex = computed(() => {
      const { src , previewSrcList } = props
      let previewIndex = 0
      const srcIndex = previewSrcList.indexOf(src)
      if (srcIndex >= 0) {
        previewIndex = srcIndex
      }
      return previewIndex
    })


    function getImageStyle(fit) {
      const imageWidth = imgWidth.value
      const imageHeight = imgHeight.value

      if (!container.value) return {}
      const {
        clientWidth: containerWidth,
        clientHeight: containerHeight,
      } = container.value
      if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {}

      const imageAspectRatio = imageWidth / imageHeight
      const containerAspectRatio = containerWidth / containerHeight

      if (fit === ObjectFit.SCALE_DOWN) {
        const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight
        fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN
      }

      switch (fit) {
        case ObjectFit.NONE:
          return { width: 'auto', height: 'auto' }
        case ObjectFit.CONTAIN:
          return (imageAspectRatio < containerAspectRatio) ? { width: 'auto' } : { height: 'auto' }
        case ObjectFit.COVER:
          return (imageAspectRatio < containerAspectRatio) ? { height: 'auto' } : { width: 'auto' }
        default:
          return {}
      }
    }

    const loadImage = () => {
      if (isServer) return

      const attributes = attrs.value

      // reset status
      loading.value = true
      hasLoadError.value = false

      const img = new Image()
      img.onload = e => handleLoad(e, img)
      img.onerror = handleError

      // bind html attrs
      // so it can behave consistently
      Object.keys(attributes)
        .forEach(key => {
          // avoid onload to be overwritten
          if (key.toLowerCase() === 'onload') return
          const value = attributes[key]
          img.setAttribute(key, value)
        })
      img.src = props.src
    }

    function handleLoad(e: Event, img: HTMLImageElement) {
      imgWidth.value = img.width
      imgHeight.value = img.height
      loading.value = false
      hasLoadError.value = false
    }

    function handleError(e: Event) {
      loading.value = false
      hasLoadError.value = true
      emit('error', e)
    }

    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer)) {
        loadImage()
        removeLazyLoadListener()
      }
    }

    function addLazyLoadListener() {
      if (isServer) return

      const { scrollContainer } = props
      if (isHtmlEle(scrollContainer)) {
        _scrollContainer = scrollContainer
      } else if (isString(scrollContainer) && scrollContainer !== '') {
        _scrollContainer = document.querySelector(scrollContainer)
      } else {
        _scrollContainer = getScrollContainer(container.value)
      }
      if (_scrollContainer) {
        _lazyLoadHandler = throttle(handleLazyLoad, 200)
        on(_scrollContainer, 'scroll', _lazyLoadHandler)
        setTimeout(() => handleLazyLoad(), 100)
      }
    }

    function removeLazyLoadListener() {
      if (isServer || !_scrollContainer || !_lazyLoadHandler) return

      off(_scrollContainer, 'scroll', _lazyLoadHandler)
      _scrollContainer = null
      _lazyLoadHandler = null
    }

    function clickHandler() {
      // don't show viewer when preview is false
      if (!preview.value) {
        return
      }
      // prevent body scroll
      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      showViewer.value = true
    }

    function closeViewer() {
      document.body.style.overflow = prevOverflow
      showViewer.value = false
    }

    watch(() => props.src, () => {
      loadImage()
    })

    onMounted(() => {
      if (props.lazy) {
        nextTick(addLazyLoadListener)
      } else {
        loadImage()
      }
    })

    onBeforeUnmount(() => {
      props.lazy && removeLazyLoadListener()
    })

    return {
      attrs,
      loading,
      hasLoadError,
      showViewer,
      imgWidth,
      imgHeight,
      imageStyle,
      alignCenter,
      preview,
      imageIndex,
      clickHandler,
      closeViewer,
      container,
      handleError,
      t,
    }
  },
})
</script>

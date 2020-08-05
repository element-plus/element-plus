<template>
  <div class="el-image">
    <slot v-if="loading" name="placeholder">
      <div class="el-image__placeholder"></div>
    </slot>
    <slot v-else-if="hasLoadError" name="error">
      <div class="el-image__error">{{ t('el.image.error') }}</div>
    </slot>
    <img
      v-else
      class="el-image__inner"
      v-bind="$attrs"
      :src="src"
      :style="imageStyle"
      :class="{ 'el-image__inner--center': alignCenter, 'el-image__preview': preview }"
      v-on="$listeners"
      @click="clickHandler">
  </div>
</template>

<script lang='ts'>

import { t } from '@element-plus/locale'
import { defineComponent, computed, ref } from 'vue'
import isServer from '@element-plus/utils/isServer'
import { on, off, getScrollContainer, isInContainer } from '@element-plus/utils/dom'
import { isHtmlElement } from '@element-plus/utils/types'


const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined

const ObjectFit = {
  NONE: 'none',
  CONTAIN: 'contain',
  COVER: 'cover',
  FILL: 'fill',
  SCALE_DOWN: 'scale-down'
}

let prevOverflow = ''

export default defineComponent({
  name: 'ElImage',
  props: {
    src: String,
    fit: String,
    lazy: Boolean,
    scrollContainer: {},
    previewSrcList: {
      type: Array,
      default: () => []
    },
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  
  setup(props, { emit, $listeners }) {

    const { lazy } = props;
    // init here
    const hasLoadError = ref(false)
    const loading = ref(false)
    const imageWidth = ref(false)
    const imageHeight = ref(false)
    const showViewer = ref(false)

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
      const { imageWidth, imageHeight } = props
      console.log(this.$el, '=======');
      const {
        clientWidth: containerWidth,
        clientHeight: containerHeight
      } = this.$el

      if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {}

      const vertical = imageWidth / imageHeight < 1

      if (fit === ObjectFit.SCALE_DOWN) {
        const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight
        fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN
      }

      switch (fit) {
        case ObjectFit.NONE:
          return { width: 'auto', height: 'auto' }
        case ObjectFit.CONTAIN:
          return vertical ? { width: 'auto' } : { height: 'auto' }
        case ObjectFit.COVER:
          return vertical ? { height: 'auto' } : { width: 'auto' }
        default:
          return {}
      }
    }

    function loadImage() {
      if (isServer) return

      // reset status
      loading.value = true
      hasLoadError.value = false

      const img = new Image()
      img.onload = e => handleLoad(e, img)
      img.onerror = handleError

      // bind html attrs
      // so it can behave consistently
      Object.keys(this.$attrs)
        .forEach((key) => {
          const value = this.$attrs[key]
          img.setAttribute(key, value)
        })
      img.src = this.src
    }

    function handleLoad(e: Event, img: Any) {
      imageWidth.value = img.width
      imageHeight.value = img.height
      loading.value = false
      hasLoadError.value = false
      console.log('------handleLoad', handleLoad)
    }

    function handleError(e: Event) {
      loading.value = false
      hasLoadError.value = true
      emit('error', e)
    }

    function handleLazyLoad() {
      if (isInContainer(this.$el, this._scrollContainer)) {
        this.show = true
        this.removeLazyLoadListener()
      }
    }
    
    function addLazyLoadListener() {
      if (this.$isServer) return

      const { scrollContainer } = this
      let _scrollContainer = null

      if (isHtmlElement(scrollContainer)) {
        _scrollContainer = scrollContainer
      } else if (isString(scrollContainer)) {
        _scrollContainer = document.querySelector(scrollContainer)
      } else {
        _scrollContainer = getScrollContainer(this.$el)
      }

      if (_scrollContainer) {
        this._scrollContainer = _scrollContainer
        this._lazyLoadHandler = throttle(200, this.handleLazyLoad)
        on(_scrollContainer, 'scroll', this._lazyLoadHandler)
        this.handleLazyLoad()
      }
    }

    function removeLazyLoadListener() {
      const { _scrollContainer, _lazyLoadHandler } = this

      if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return

      off(_scrollContainer, 'scroll', _lazyLoadHandler)
      this._scrollContainer = null
      this._lazyLoadHandler = null
    }

    function clickHandler() {
      // don't show viewer when preview is false
      if (!preview) {
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


    console.log('-----typeof Locale', typeof Locale)

    console.log('====hasLoadError', hasLoadError)
    return {
      loading,
      hasLoadError,
      imageWidth,
      imageHeight,
      imageStyle,
      alignCenter,
      preview,
      imageIndex,
      loadImage,
      addLazyLoadListener,
      removeLazyLoadListener,
      lazy,
      clickHandler,
      closeViewer,
      $listeners,
      t
    }
  },
  mounted() {
    console.log("=====onMounted")
    if (this.lazy) {
      this.addLazyLoadListener()
    } else {
      console.log("=====loadImage")
      this.loadImage()
    }
  },
  beforeUnmount() {
    this.lazy && this.removeLazyLoadListener()
  },
})
</script>
<style scoped>
</style>

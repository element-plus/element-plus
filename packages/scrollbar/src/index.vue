<template>
  <div ref="scrollbar" class="el-scrollbar">
    <div
      ref="wrap"
      :class="[
        wrapClass,
        'el-scrollbar__wrap',
        native ? '' : 'el-scrollbar__wrap--hidden-default',
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="['el-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar
        :move="moveX"
        :ratio="ratioX"
        :size="sizeWidth"
        :always="always"
      />
      <bar
        :move="moveY"
        :ratio="ratioY"
        :size="sizeHeight"
        vertical
        :always="always"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import { addUnit, isArray, isNumber, isString, toObject } from '@element-plus/utils/util'
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import Bar from './bar.vue'
import type { CSSProperties, PropType } from 'vue'
import { warn } from '@element-plus/utils/error'

export default defineComponent({
  name: 'ElScrollbar',
  components: { Bar },
  props: {
    height: {
      type: [String, Number],
      default: '',
    },
    maxHeight: {
      type: [String, Number],
      default: '',
    },
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array] as PropType<string | CSSProperties[]>,
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
    always: {
      type: Boolean,
      default: false,
    },
    minSize: {
      type: Number,
      default: 20,
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const scrollbar = ref(null)
    const wrap = ref(null)
    const resize = ref(null)
    const ratioY = ref(1)
    const ratioX = ref(1)

    const SCOPE = 'ElScrollbar'

    provide('scrollbar', scrollbar)
    provide('scrollbar-wrap', wrap)

    const handleScroll = () => {
      if (wrap.value) {
        moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight * ratioY.value
        moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth * ratioX.value
        emit('scroll', {
          scrollTop: wrap.value.scrollTop,
          scrollLeft: wrap.value.scrollLeft,
        })
      }
    }

    const setScrollTop = (value: number) => {
      if (!isNumber(value)) {
        if (process.env.NODE_ENV !== 'production') {
          warn(SCOPE, 'value must be a number')
        }
        return
      }
      wrap.value.scrollTop = value
    }

    const setScrollLeft = (value: number) => {
      if (!isNumber(value)) {
        if (process.env.NODE_ENV !== 'production') {
          warn(SCOPE, 'value must be a number')
        }
        return
      }
      wrap.value.scrollLeft = value
    }

    const update = () => {
      if (!wrap.value) return

      const originalHeightPercentage = (wrap.value.clientHeight * 100) / wrap.value.scrollHeight
      const originalWidthPercentage = (wrap.value.clientWidth * 100) / wrap.value.scrollWidth
      const minHeightPercentage = props.minSize * 100 / wrap.value.clientHeight
      const minWidthPercentage = props.minSize * 100 / wrap.value.clientWidth
      const heightPercentage = Math.max(originalHeightPercentage, minHeightPercentage)
      const widthPercentage = Math.max(originalWidthPercentage, minWidthPercentage)

      const originalHeight = originalHeightPercentage / 100 * wrap.value.clientHeight
      const originalWidth = originalWidthPercentage / 100 * wrap.value.clientWidth
      const height = heightPercentage / 100 * wrap.value.clientHeight
      const width = widthPercentage / 100 * wrap.value.clientWidth

      ratioY.value = (originalHeight / (wrap.value.clientHeight - originalHeight)) / (height / (wrap.value.clientHeight - height))
      ratioX.value = (originalWidth / (wrap.value.clientWidth - originalWidth)) / (width / (wrap.value.clientWidth - width))

      sizeHeight.value = heightPercentage < 100 ? heightPercentage + '%' : ''
      sizeWidth.value = widthPercentage < 100 ? widthPercentage + '%' : ''
    }

    const style = computed(() => {
      let style = props.wrapStyle
      if (isArray(style)) {
        style = toObject(style)
        style.height = addUnit(props.height)
        style.maxHeight = addUnit(props.maxHeight)
      } else if (isString(style)) {
        style += addUnit(props.height) ? `height: ${addUnit(props.height)};` : ''
        style += addUnit(props.maxHeight) ? `max-height: ${addUnit(props.maxHeight)};` : ''
      }
      return style
    })

    onMounted(() => {
      if (!props.native) {
        nextTick(update)
      }
      if (!props.noresize) {
        addResizeListener(resize.value, update)
        addEventListener('resize', update)
      }
    })

    onBeforeUnmount(() => {
      if (!props.noresize) {
        removeResizeListener(resize.value, update)
        removeEventListener('resize', update)
      }
    })

    return {
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      scrollbar,
      wrap,
      resize,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft,
    }
  },
})
</script>

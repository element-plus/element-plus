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
        <slot />
      </component>
    </div>
    <template v-if="!native">
      <bar :move="moveX" :ratio="ratioX" :size="sizeWidth" :always="always" />
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
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
} from 'vue'
import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'
import {
  addUnit,
  isArray,
  isNumber,
  isString,
  toObject,
} from '@element-plus/utils/util'
import { debugWarn } from '@element-plus/utils/error'
import Bar from './bar.vue'

import type { CSSProperties, PropType } from 'vue'

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
    const GAP = 4 // top 2 + bottom 2 of bar instance

    provide('scrollbar', scrollbar)
    provide('scrollbar-wrap', wrap)

    const handleScroll = () => {
      if (wrap.value) {
        const offsetHeight = wrap.value.offsetHeight - GAP
        const offsetWidth = wrap.value.offsetWidth - GAP

        moveY.value =
          ((wrap.value.scrollTop * 100) / offsetHeight) * ratioY.value
        moveX.value =
          ((wrap.value.scrollLeft * 100) / offsetWidth) * ratioX.value

        emit('scroll', {
          scrollTop: wrap.value.scrollTop,
          scrollLeft: wrap.value.scrollLeft,
        })
      }
    }

    const setScrollTop = (value: number) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, 'value must be a number')
        return
      }
      wrap.value.scrollTop = value
    }

    const setScrollLeft = (value: number) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, 'value must be a number')
        return
      }
      wrap.value.scrollLeft = value
    }

    const update = () => {
      if (!wrap.value) return

      const offsetHeight = wrap.value.offsetHeight - GAP
      const offsetWidth = wrap.value.offsetWidth - GAP

      const originalHeight = offsetHeight ** 2 / wrap.value.scrollHeight
      const originalWidth = offsetWidth ** 2 / wrap.value.scrollWidth
      const height = Math.max(originalHeight, props.minSize)
      const width = Math.max(originalWidth, props.minSize)

      ratioY.value =
        originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height))
      ratioX.value =
        originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width))

      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
    }

    const style = computed(() => {
      let style = props.wrapStyle as CSSProperties
      if (isArray(style)) {
        style = toObject(style)
        style.height = addUnit(props.height)
        style.maxHeight = addUnit(props.maxHeight)
      } else if (isString(style)) {
        style += addUnit(props.height)
          ? `height: ${addUnit(props.height)};`
          : ''
        style += addUnit(props.maxHeight)
          ? `max-height: ${addUnit(props.maxHeight)};`
          : ''
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

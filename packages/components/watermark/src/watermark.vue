<template>
  <div ref="containerRef" :style="[style]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  watch,
} from 'vue'
import { useMutationObserver } from '@vueuse/core'
import { isArray } from '@element-plus/utils'
import { watermarkProps } from './watermark'
import { getPixelRatio, getStyleStr, reRendering } from './utils'
import useClips, { FontGap } from './useClips'
import type { WatermarkProps } from './watermark'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElWatermark',
})

const style: CSSProperties = {
  position: 'relative',
}

const props = defineProps(watermarkProps)
const color = computed(() => props.font?.color ?? 'rgba(0,0,0,.15)')
const fontSize = computed(() => props.font?.fontSize ?? 16)
const fontWeight = computed(() => props.font?.fontWeight ?? 'normal')
const fontStyle = computed(() => props.font?.fontStyle ?? 'normal')
const fontFamily = computed(() => props.font?.fontFamily ?? 'sans-serif')
const textAlign = computed(() => props.font?.textAlign ?? 'center')
const textBaseline = computed(() => props.font?.textBaseline ?? 'hanging')

const gapX = computed(() => props.gap[0])
const gapY = computed(() => props.gap[1])
const gapXCenter = computed(() => gapX.value / 2)
const gapYCenter = computed(() => gapY.value / 2)
const offsetLeft = computed(() => props.offset?.[0] ?? gapXCenter.value)
const offsetTop = computed(() => props.offset?.[1] ?? gapYCenter.value)

const getMarkStyle = () => {
  const markStyle: CSSProperties = {
    zIndex: props.zIndex,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    backgroundRepeat: 'repeat',
  }

  /** Calculate the style of the offset */
  let positionLeft = offsetLeft.value - gapXCenter.value
  let positionTop = offsetTop.value - gapYCenter.value
  if (positionLeft > 0) {
    markStyle.left = `${positionLeft}px`
    markStyle.width = `calc(100% - ${positionLeft}px)`
    positionLeft = 0
  }
  if (positionTop > 0) {
    markStyle.top = `${positionTop}px`
    markStyle.height = `calc(100% - ${positionTop}px)`
    positionTop = 0
  }
  markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`

  return markStyle
}

const containerRef = shallowRef<HTMLDivElement | null>(null)
const watermarkRef = shallowRef<HTMLDivElement>()
const stopObservation = ref(false)

const destroyWatermark = () => {
  if (watermarkRef.value) {
    watermarkRef.value.remove()
    watermarkRef.value = undefined
  }
}
const appendWatermark = (base64Url: string, markWidth: number) => {
  if (containerRef.value && watermarkRef.value) {
    stopObservation.value = true
    watermarkRef.value.setAttribute(
      'style',
      getStyleStr({
        ...getMarkStyle(),
        backgroundImage: `url('${base64Url}')`,
        backgroundSize: `${Math.floor(markWidth)}px`,
      })
    )
    containerRef.value?.append(watermarkRef.value)
    // Delayed execution
    setTimeout(() => {
      stopObservation.value = false
    })
  }
}

/**
 * Get the width and height of the watermark. The default values are as follows
 * Image: [120, 64]; Content: It's calculated by content;
 */
const getMarkSize = (ctx: CanvasRenderingContext2D) => {
  let defaultWidth = 120
  let defaultHeight = 64
  const image = props.image
  const content = props.content
  const width = props.width
  const height = props.height
  if (!image && ctx.measureText) {
    ctx.font = `${Number(fontSize.value)}px ${fontFamily.value}`
    const contents = isArray(content) ? content : [content]
    const sizes = contents.map((item) => {
      const metrics = ctx.measureText(item!)

      return [
        metrics.width,
        // Using `actualBoundingBoxAscent` to be compatible with lower version browsers (eg: Firefox < 116)
        metrics.fontBoundingBoxAscent !== undefined
          ? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
          : metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
      ]
    })
    defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])))
    defaultHeight =
      Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length +
      (contents.length - 1) * FontGap
  }
  return [width ?? defaultWidth, height ?? defaultHeight] as const
}

const getClips = useClips()

const renderWatermark = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const image = props.image
  const content = props.content
  const rotate = props.rotate

  if (ctx) {
    if (!watermarkRef.value) {
      watermarkRef.value = document.createElement('div')
    }

    const ratio = getPixelRatio()
    const [markWidth, markHeight] = getMarkSize(ctx)

    const drawCanvas = (
      drawContent?: NonNullable<WatermarkProps['content']> | HTMLImageElement
    ) => {
      const [textClips, clipWidth] = getClips(
        drawContent || '',
        rotate,
        ratio,
        markWidth,
        markHeight,
        {
          color: color.value,
          fontSize: fontSize.value,
          fontStyle: fontStyle.value,
          fontWeight: fontWeight.value,
          fontFamily: fontFamily.value,
          textAlign: textAlign.value,
          textBaseline: textBaseline.value,
        },
        gapX.value,
        gapY.value
      )

      appendWatermark(textClips, clipWidth)
    }

    if (image) {
      const img = new Image()
      img.onload = () => {
        drawCanvas(img)
      }
      img.onerror = () => {
        drawCanvas(content)
      }
      img.crossOrigin = 'anonymous'
      img.referrerPolicy = 'no-referrer'
      img.src = image
    } else {
      drawCanvas(content)
    }
  }
}

onMounted(() => {
  renderWatermark()
})

watch(
  () => props,
  () => {
    renderWatermark()
  },
  {
    deep: true,
    flush: 'post',
  }
)

onBeforeUnmount(() => {
  destroyWatermark()
})

const onMutate = (mutations: MutationRecord[]) => {
  if (stopObservation.value) {
    return
  }
  mutations.forEach((mutation) => {
    if (reRendering(mutation, watermarkRef.value)) {
      destroyWatermark()
      renderWatermark()
    }
  })
}

useMutationObserver(containerRef, onMutate, {
  attributes: true,
  subtree: true,
  childList: true,
})
</script>

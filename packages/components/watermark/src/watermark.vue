<template>
  <div ref="watermarkRef" :class="ns.b()">
    <slot />
    <div ref="watermarkContentRef" :style="watermarkStyle" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { watermarkProps } from './watermark'
import { useMutationObserver } from './hooks'
import type { WatermarkImage, WatermarkText } from './watermark'
import type { CSSProperties } from 'vue'
const props = defineProps(watermarkProps)
const backgroundImage = ref('')
const ns = useNamespace('watermark')
const watermarkRef = ref<HTMLElement>()
const watermarkContentRef = ref<HTMLElement>()

const zIndex = computed(() => props.zIndex)

const offset = reactive(props.offset || [])

const gapX = computed(() => {
  return props.x
})

const gapY = computed(() => {
  return props.y
})

const rotate = computed(() => {
  return props.rotate
})

const backgroundRepeat = computed(() => {
  return props.isRepeat ? 'repeat' : 'no-repeat'
})

const offsetLeft = computed(() => {
  return offset[0] || gapX.value / 2
})

const offsetTop = computed(() => {
  return offset[1] || gapY.value / 2
})

let antiTamper: ReturnType<typeof useMutationObserver> | undefined = undefined

watch(
  [watermarkRef, watermarkContentRef, () => props.removable, backgroundImage],
  ([watermarkEl, watermarkContentRl, removable, base64]) => {
    if (removable && watermarkEl && watermarkContentRl && base64 !== '') {
      if (antiTamper) {
        antiTamper.stop()
      }
      antiTamper = useMutationObserver(watermarkEl, watermarkContentRl)
    }
  },
  {
    immediate: true,
    flush: 'post',
  }
)

const watermarkStyle = computed<CSSProperties>(() => {
  return {
    zIndex: zIndex.value,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundSize: `${props.x + props.width}px`,
    pointerEvents: 'none',
    backgroundRepeat: backgroundRepeat.value,
    backgroundImage: `url('${backgroundImage.value}')`,
  }
})
const bgImageOptions = {
  width: props.width,
  height: props.height,
  rotate: rotate.value,
  lineSpace: props.lineSpace,
  alpha: props.alpha,
  gapX: gapX.value,
  gapY: gapY.value,
  watermarkContent: props.watermarkContent,
  offsetLeft: offsetLeft.value,
  offsetTop: offsetTop.value,
}
const injectWaterMark = () => {
  generateBase64Url(bgImageOptions, (base64Url) => {
    backgroundImage.value = base64Url
  })
}
watch(() => props.watermarkContent, injectWaterMark, { deep: true })
onMounted(async () => {
  injectWaterMark()
})

function generateBase64Url(
  {
    width,
    height,
    gapX,
    gapY,
    offsetLeft,
    offsetTop,
    rotate,
    alpha,
    watermarkContent,
    lineSpace,
  }: {
    width: number
    height: number
    gapX: number
    gapY: number
    offsetLeft: number
    offsetTop: number
    rotate: number
    alpha: number
    watermarkContent: any
    lineSpace: number
  },
  onFinish: (url: string) => void
) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    // eslint-disable-next-line no-console
    console.warn('当前环境不支持Canvas, 无法绘制水印')
    onFinish('')
    return
  }
  if (!watermarkContentRef.value) {
    watermarkContentRef.value = document.createElement('div')
  }
  const ratio = window.devicePixelRatio || 1
  const canvasWidth = (gapX + width) * ratio
  const canvasHeight = (gapY + height) * ratio

  canvas.width = canvasWidth
  canvas.height = canvasHeight
  canvas.style.width = `${gapX + width}px`
  canvas.style.height = `${gapY + height}px`

  ctx.translate(offsetLeft * ratio, offsetTop * ratio)
  ctx.rotate((Math.PI / 180) * Number(rotate))
  ctx.globalAlpha = alpha

  const markWidth = width * ratio
  const markHeight = height * ratio

  ctx.fillStyle = 'transparent'
  ctx.fillRect(0, 0, markWidth, markHeight)

  const contents = Array.isArray(watermarkContent)
    ? watermarkContent
    : [{ ...watermarkContent }]
  let top = 0
  contents.forEach((item: WatermarkText & WatermarkImage & { top: number }) => {
    if (item.url) {
      const { url, isGrayscale = false } = item
      item.top = top
      top += height
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.referrerPolicy = 'no-referrer'
      img.src = url
      img.onload = () => {
        ctx.drawImage(img, 0, item.top * ratio, width * ratio, height * ratio)
        if (isGrayscale) {
          const imgData = ctx.getImageData(
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
          )
          const pixels = imgData.data
          for (let i = 0; i < pixels.length; i += 4) {
            const lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
            pixels[i] = lightness
            pixels[i + 1] = lightness
            pixels[i + 2] = lightness
          }
          ctx.putImageData(imgData, 0, 0)
        }
        onFinish(canvas.toDataURL())
      }
    } else if (item.text) {
      const {
        text,
        fontColor = 'rgba(0, 0, 0, 0.1)',
        fontSize = 16,
        fontWeight = 'normal',
      } = item
      item.top = top
      top += lineSpace
      const markSize = Number(fontSize) * ratio
      // TODO 后续完善font 渲染控制 目前font-family 暂时为 undefined
      ctx.font = `normal normal ${fontWeight} ${markSize}px/${markHeight}px undefined`
      ctx.textAlign = 'start'
      ctx.textBaseline = 'top'
      ctx.fillStyle = fontColor
      ctx.fillText(text, 0, item.top * ratio)
    }
  })
  onFinish(canvas.toDataURL())
}
</script>

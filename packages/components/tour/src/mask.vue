<template>
  <div
    v-if="visible"
    :class="ns.e('mask')"
    :style="({
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex,
      pointerEvents: pos && targetAreaClickable ? 'none' : 'auto',
    } as any)"
    v-bind="$attrs"
  >
    <svg
      :style="{
        width: '100%',
        height: '100%',
      }"
    >
      <defs>
        <mask :id="maskId">
          <rect x="0" y="0" width="100vw" height="100vh" fill="white" />
          <rect
            v-if="pos"
            :class="ns.e('hollow')"
            :x="pos.left"
            :y="pos.top"
            :rx="pos.radius"
            :width="pos.width"
            :height="pos.height"
            fill="black"
          />
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        :fill="fill"
        :mask="`url(#${maskId})`"
      />
      <template v-if="pos">
        <rect v-bind="COVER_PROPS" x="0" y="0" width="100%" :height="pos.top" />
        <rect
          v-bind="COVER_PROPS"
          x="0"
          y="0"
          :width="pos.left"
          height="100%"
        />
        <rect
          v-bind="COVER_PROPS"
          x="0"
          :y="pos.top + pos.height"
          width="100%"
          :height="`calc(100vh - ${pos.top + pos.height}px)`"
        />
        <rect
          v-bind="COVER_PROPS"
          :x="pos.left + pos.width"
          y="0"
          :width="`calc(100vw - ${pos.left + pos.width}px)`"
          height="100%"
        />
      </template>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { inject, toRef } from 'vue'
import { useId, useLockscreen } from '@element-plus/hooks'
import { maskProps } from './mask'
import { tourKey } from './helper'

defineOptions({
  name: 'ElTourMask',
  inheritAttrs: false,
})

const props = defineProps(maskProps)

const { ns } = inject(tourKey)!

const id = useId()
const maskId = `el-tour-mask-${id.value}`

useLockscreen(toRef(props, 'visible'), {
  ns,
})

const COVER_PROPS = {
  fill: 'transparent',
  'pointer-events': 'auto',
}
</script>

<template>
  <div :class="ns.b()">
    <div :class="ns.e('image')" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div :class="ns.e('description')">
      <slot v-if="$slots.description" name="description" />
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" :class="ns.e('bottom')">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ImgEmpty from './img-empty.vue'
import { emptyProps } from './empty'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElEmpty',
})

const props = defineProps(emptyProps)

const { t } = useLocale()
const ns = useNamespace('empty')
const emptyDescription = computed(
  () => props.description || t('el.table.emptyText')
)
const imageStyle = computed<CSSProperties>(() => ({
  width: props.imageSize ? `${props.imageSize}px` : '',
}))
</script>

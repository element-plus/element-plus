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
    <div v-if="hasValidDefaultSlot" :class="ns.e('bottom')">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { addUnit, flattedChildren, isComment } from '@element-plus/utils'
import ImgEmpty from './img-empty.vue'
import { emptyProps } from './empty'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElEmpty',
})

const props = defineProps(emptyProps)
const slots = useSlots()
const { t } = useLocale()
const ns = useNamespace('empty')
const emptyDescription = computed(
  () => props.description || t('el.table.emptyText')
)
const imageStyle = computed<CSSProperties>(() => ({
  width: addUnit(props.imageSize),
}))

const hasValidDefaultSlot = computed(() => {
  const slotContent = slots.default?.()
  if (!slotContent) return false

  const children = flattedChildren(slotContent)
  return children.some((child) => child !== null && !isComment(child))
})
</script>

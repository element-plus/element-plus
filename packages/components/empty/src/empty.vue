<template>
  <div :class="prefixClass">
    <div :class="`${prefixClass}__image`" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div :class="`${prefixClass}__description`">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" :class="`${prefixClass}__bottom`">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useLocale, usePrefixClass } from '@element-plus/hooks'
import ImgEmpty from './img-empty.vue'
import { emptyProps } from './empty'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElEmpty',
  components: {
    ImgEmpty,
  },

  props: emptyProps,

  setup(props) {
    const prefixClass = usePrefixClass('empty')

    const { t } = useLocale()
    const emptyDescription = computed(
      () => props.description || t('el.table.emptyText')
    )
    const imageStyle = computed<CSSProperties>(() => ({
      width: props.imageSize ? `${props.imageSize}px` : '',
    }))

    return {
      prefixClass,
      emptyDescription,
      imageStyle,
    }
  },
})
</script>

<template>
  <div class="el-empty">
    <div class="el-empty__image" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div class="el-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="el-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useLocaleInject } from '@element-plus/hooks'
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
    const { t } = useLocaleInject()
    const emptyDescription = computed(
      () => props.description || t('el.table.emptyText')
    )
    const imageStyle = computed<CSSProperties>(() => ({
      width: props.imageSize ? `${props.imageSize}px` : '',
    }))

    return {
      emptyDescription,
      imageStyle,
    }
  },
})
</script>

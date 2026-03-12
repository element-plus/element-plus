<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-label="prevText || t('g.pagination.prev')"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <g-icon v-else>
      <component :is="prevIcon" />
    </g-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocale } from '@element-plus/hooks'
import { GIcon } from '@element-plus/components/icon'
import { paginationPrevEmits, paginationPrevProps } from './prev'

defineOptions({
  name: 'GPaginationPrev',
})

const props = defineProps(paginationPrevProps)
defineEmits(paginationPrevEmits)

const { t } = useLocale()

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1
)
</script>

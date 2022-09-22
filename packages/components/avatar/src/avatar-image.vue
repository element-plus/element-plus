<template>
  <img
    v-if="srcSet"
    :srcSet="srcSet"
    :style="fitStyle"
    v-bind="$attrs"
    @error="$emit('error')"
  />
  <img
    v-if="!srcSet && imageLoadingStatus === 'loaded'"
    :src="src"
    :style="fitStyle"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { avatarImageEmits, avatarImageProps } from './avatar-image'
import { useAvatarImage } from './use-avatar'

import type { CSSProperties } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps(avatarImageProps)
defineEmits(avatarImageEmits)

const { imageLoadingStatus } = useAvatarImage(props)

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit,
}))
</script>

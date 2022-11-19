<template>
  <span :class="avatarClass" :style="sizeStyle">
    <template v-if="icon">
      <el-icon>
        <component :is="icon" />
      </el-icon>
    </template>
    <template v-else>
      <avatar-image
        :src="src"
        :src-set="srcSet"
        :alt="alt"
        :fit="fit"
        v-bind="$attrs"
        @state-change="onStateChange"
      />
      <avatar-fallback>
        <slot />
      </avatar-fallback>
    </template>
  </span>
</template>

<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { avatarKey } from '@element-plus/tokens'
import { addUnit, isNumber, isString } from '@element-plus/utils'
import AvatarFallback from './avatar-fallback.vue'
import AvatarImage from './avatar-image.vue'
import { avatarEmits, avatarProps } from './avatar'
import type { ImageLoadingState } from '@element-plus/tokens'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElAvatar',
})

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const ns = useNamespace('avatar')

const imageLoadingStatus = ref('idle')
provide(avatarKey, {
  imageLoadingStatus,
})

const avatarClass = computed(() => {
  const { size, icon, shape } = props
  const classList = [ns.b()]
  if (isString(size)) classList.push(ns.m(size))
  if (icon) classList.push(ns.m('icon'))
  if (shape) classList.push(ns.m(shape))
  return classList
})

const sizeStyle = computed(() => {
  const { size } = props
  return isNumber(size)
    ? (ns.cssVarBlock({
        size: addUnit(size) || '',
      }) as CSSProperties)
    : undefined
})

const onStateChange = (state: ImageLoadingState, evt?: Event) => {
  if (state === 'error') {
    emit('error', evt!)
  }
}
</script>

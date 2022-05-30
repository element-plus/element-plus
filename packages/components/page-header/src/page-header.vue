<script lang="ts" setup>
import { ElIcon } from '@element-plus/components/icon'

import { useLocale, useNamespace } from '@element-plus/hooks'
import { pageHeaderEmits, pageHeaderProps } from './page-header'

defineProps(pageHeaderProps)
const emit = defineEmits(pageHeaderEmits)
defineOptions({
  name: 'ElPageHeader',
})
const { t } = useLocale()
const ns = useNamespace('page-header')

function handleClick() {
  emit('back')
}
</script>
<template>
  <div :class="ns.b()">
    <div :class="ns.e('left')" @click="handleClick">
      <div v-if="icon || $slots.icon" :class="ns.e('icon')">
        <slot name="icon">
          <el-icon v-if="icon">
            <component :is="icon" />
          </el-icon>
        </slot>
      </div>
      <div :class="ns.e('title')">
        <slot name="title">{{ title || t('el.pageHeader.title') }}</slot>
      </div>
    </div>
    <div :class="ns.e('content')">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

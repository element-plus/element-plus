<template>
  <div :class="ns.b()">
    <div :class="ns.e('left')" @click="handleClick">
      <div v-if="icon || $slots.icon" :class="ns.e('icon')">
        <el-icon>
          <component :is="icon" v-if="icon" />
          <slot v-else name="icon" />
        </el-icon>
      </div>
      <div v-else :class="ns.e('icon')">
        <el-icon>
          <Back />
        </el-icon>
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
<script lang="ts" setup>
import { ElIcon } from '@element-plus/components/icon'
import { Back } from '@element-plus/icons-vue'

import { useLocale, useNamespace } from '@element-plus/hooks'
import { pageHeaderEmits, pageHeaderProps } from './page-header'

defineOptions({
  name: 'ElPageHeader',
})
defineProps(pageHeaderProps)
const emit = defineEmits(pageHeaderEmits)

const { t } = useLocale()
const ns = useNamespace('page-header')

function handleClick() {
  emit('back')
}
</script>

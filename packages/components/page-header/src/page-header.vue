<template>
  <div :class="prefixClass">
    <div :class="`${prefixClass}__left`" @click="handleClick">
      <div v-if="icon || $slots.icon" :class="`${prefixClass}__icon`">
        <slot name="icon">
          <el-icon v-if="icon"><component :is="icon" /></el-icon>
        </slot>
      </div>
      <div :class="`${prefixClass}__title`">
        <slot name="title">{{ title || t('el.pageHeader.title') }}</slot>
      </div>
    </div>
    <div :class="`${prefixClass}__content`">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElIcon } from '@element-plus/components/icon'

import { useLocale } from '@element-plus/hooks'
import { pageHeaderEmits, pageHeaderProps } from './page-header'
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElPageHeader',

  components: {
    ElIcon,
  },

  props: pageHeaderProps,
  emits: pageHeaderEmits,

  setup(_, { emit }) {
    const prefixClass = usePrefixClass('page-header')
    const { t } = useLocale()

    function handleClick() {
      emit('back')
    }

    return {
      prefixClass,
      handleClick,
      t,
    }
  },
})
</script>
